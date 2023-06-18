import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {getProducts} from "../redux/ProductsReducer/action"
import ProductCard from './ProductCard'
import {useSearchParams} from "react-router-dom"
// import { any } from 'prop-types'
// import Pagination from './Pagination'
import Sidebar from './Sidebar'

const ProductList = () => {

  const [searchParams] = useSearchParams()
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const paramObj = {
    params: {
      categories: searchParams.getAll('categories'),
      color: searchParams.getAll('color'),
      gender: searchParams.getAll('gender'),
      _order: searchParams.get('order'),
      _sort: searchParams.get('order') && 'price',
    },
  };
  const items = useSelector((store: any) => store.ProductsReducer.products);
  const totalProducts = useSelector((store: any) => store.ProductsReducer.totalProducts);
  const dispatch = useDispatch()

  useEffect(() => {
    const action: any = getProducts(paramObj,page);
  dispatch(action)
  }, [searchParams,page])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const action: any = await getProducts(paramObj, page);
  //     dispatch(action);
  //     setPageCount(Math.ceil(totalProducts / 15));
  //   };

  //   fetchData();
  // }, [searchParams, page, totalProducts, dispatch, paramObj]);

  // const handlePageChange = (pageNumber: number) => {
  //   setPage(pageNumber);
  // };

  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr", gap: "15px", marginRight: "30px", marginLeft: "30px" }}>
      <Sidebar />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
        {items.length ?
          items.map((ele: any) => {
            return <ProductCard {...ele} key={ele.id} />;
          }) : (
            <div style={{ marginTop: "150px", fontSize: "30px", fontWeight: "600" }}>
              <p>We are adding more products ...</p>
              <p>Explore other products till then ...</p>
            </div>
          )}
      </div>
    </div>
    {/* <Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePageChange} /> */}
  </>

)

}

 export default ProductList




