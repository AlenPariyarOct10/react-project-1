import React from 'react';
import { useAppContext } from '../ContextAPI';
import { hotproduct } from './utils';
import { Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Button } from 'antd';


const ProductDetail = () => {
    const {appState} = useAppContext();
    console.log(appState);
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={appState.data.image} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <>
         
        <section class="text-gray-700 body-font overflow-hidden bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-3/5 mx-auto flex flex-wrap">
  

      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={appState.data.image}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <div className="flex flex-row w-5/5">
          <Rate allowHalf defaultValue={appState.data.rate} />
          </div>
         
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{appState.data.price}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{appState.data.name}</h1>
        
        <p class="leading-relaxed">{appState.data.description}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

          <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
         
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
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
      <Button  className='bg-black hover:bg-slate-900 text-white font-bold my-3 w-full rounded-full'>Buy Now</Button>

   
    </div>
  </div>
</section>
</>
    )
}

export default ProductDetail;