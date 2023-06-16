import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {getProducts} from "../redux/ProductsReducer/action"
import ProductCard from './ProductCard'
import {useSearchParams} from "react-router-dom"
import { any } from 'prop-types'

const ProductList = () => {

  const [searchParams] = useSearchParams()

  let paramObj :any= {
    params: {
      category: searchParams.getAll("category"),
      gender: searchParams.getAll("gender"),
      _order: searchParams.get("order"),
      _sort: searchParams.get("order") && "price"
   }
 }

  const items = useSelector((store:any) => store.ProductsReducer.products)
 
  const dispatch = useDispatch()

  useEffect(() => {
    const action: any = getProducts(paramObj);
  dispatch(action)
  }, [searchParams])
  

return (
  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap:"20px"}}>
    {
      items?.map((ele: any) => {
        return <ProductCard {...ele} key={ele.id} />
      })
    }
  </div>
)

}

export default ProductList


