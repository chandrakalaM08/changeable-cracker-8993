import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {getProducts} from "../redux/ProductsReducer/action"
import ProductCard from './ProductCard'
import {useSearchParams} from "react-router-dom"
import { any } from 'prop-types'
import Pagination from './Pagination'

const ProductList = () => {

  const [searchParams] = useSearchParams()
  const [page, setPage] = useState<number>(1)
  const [pageCount , setPageCount] = useState<number>(0)
  let paramObj :any= {
    params: {
      categories: searchParams.getAll("categories"),
      color: searchParams.getAll("color"),
      _order: searchParams.get("order"),
      _sort: searchParams.get("order") && "price"
   }
 }

  const items = useSelector((store:any) => store.ProductsReducer.products)
 
  const dispatch = useDispatch()

  useEffect(() => {
    const action: any = getProducts(paramObj,page);
  dispatch(action)
  }, [searchParams])
  

  return (
  <>
  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}}>
    { items.length ? 
      items.map((ele: any) => {
        return <ProductCard {...ele} key={ele.id} />
      }) : <div style={{marginTop:"150px", fontSize:"30px", fontWeight:"600"}}> <p> We are adding more products ...</p>
      <p>Explore other products till then ...</p></div>
    }
      </div>
      <Pagination totalPages={Math.ceil(92/15)}/>
      </>
)

}

export default ProductList


