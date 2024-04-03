import React from 'react';
import { useAppContext } from '../ContextAPI';
import { hotproduct } from './utils';
import { Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Button } from 'antd';
import DashboardProductReuseAble from './dashboard/DashboardProductReuseAble';


const ProductDetail = () => {
    const {appState} = useAppContext();
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
      {
        let arr = appState.data.relatedProduct;
        let items = arr.map((i)=>i);
        var related = hotproduct.filter(item => items.includes(item.id));
      }
    
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
         
        <h2 class="text-sm title-font text-green-800 tracking-widest"><span className='line-through'>Rs. {appState.data.price}</span> Rs.{appState.data.price - appState.data.price*appState.data.discount/100}</h2><span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{appState.data.discount}% Off</span>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{appState.data.name}</h1>
        
        <p class="leading-relaxed">{appState.data.description}</p>
        <form class="max-w-sm">
    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900">Quantity:</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
</form>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

          <div class="flex">
            <span class="mr-3">Viewed by : {appState.data.viewBy}</span>
            
          </div>
          
         
          <div class="flex ml-6 items-center">
            <span class="mr-3">In stock : </span>
            <div class="relative">
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
      <Button  className='bg-black hover:bg-slate-900 text-white font-bold my-3 w-full rounded-full'>Buy Now</Button>
      <Button  className='bg-blue-600 hover:bg-slate-900 text-white font-bold my-3 w-full rounded-full'>Add to cart</Button>
      </div>
   
    </div>
  </div>
</section>


<DashboardProductReuseAble title={"Related Products 🔥"} data={related} color={"text-white rounded dark:bg-yellow-300"}></DashboardProductReuseAble>

</>
    )
}

export default ProductDetail;