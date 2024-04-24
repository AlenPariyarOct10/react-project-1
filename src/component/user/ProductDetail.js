import React, { useState, useEffect } from 'react';
import { useAppContext } from '../ContextAPI';
import { Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Button } from 'antd';
import { Spin } from 'antd';

import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("prod_id");
  const { appState } = useAppContext();
  const [responseData, setResponseData] = useState(null); // New state for storing response data

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("abc", searchParams.entries());
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        console.log("Ress => ", response);
        setProduct(response.data);
        setResponseData(response.data); // Update responseData with response data
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {

    };
  }, [productId, searchParams]);

  if (loading) return <Spin />;
  if (error) return <p>Error: {error}</p>;
  if (!product) return null;
  console.log(responseData);
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-3/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{responseData.title}</h1>

              <div className="flex flex-row w-5/5">

                <Rate allowHalf defaultValue={responseData.rating.rate} />
              </div>
              <h2 className="text-sm title-font text-green-800 tracking-widest"><span>Rs. {product.price}</span> </h2>
              {/* <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{appState.data.discount}% Off</span> */}
              <p className="leading-relaxed">{responseData.description}</p>
              <form className="max-w-sm">
                <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900">Quantity:</label>
                <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </form>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Viewed by : {responseData.rating.count}</span>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">In stock : </span>
                  <div className="relative">
                    {appState.data.inStock} items
                  </div>
                </div>
              </div>
              <TextArea
                placeholder="Enter comment"
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </div>
            <div className="flex gap-2 justify-between w-full">
              <Button className='bg-black hover:bg-slate-900 text-white font-bold my-3 w-full rounded-full'>Buy Now</Button>
              <Button className='bg-blue-600 hover:bg-slate-900 text-white font-bold my-3 w-full rounded-full'>Add to cart</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
