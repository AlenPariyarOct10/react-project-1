import React from "react";
import { useSelector } from "react-redux";
import CartProductDetail from "../cart/CartProductDetail";
import CartProductList from "../cart/CartProductList";

const ViewCart = () => {
  const cart = useSelector((state) => state.cart);

  console.log("cart state->", cart);

  return (
    <div>
     
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div class="hidden lg:grid grid-cols-2 py-6">
            <div class="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span class="w-full max-w-[200px] text-center">
                Price
              </span>
              <span class="w-full max-w-[260px] text-center">Quantity</span>
              <span class="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>

          {cart.map((product, index) => (
            <>
          <CartProductList
            key={index}
            id={product.id}
            name={product.title}
            description={product.description}
            image={product.image}
            quantity={product.quantity}
            price={product.price}
            discount={10}
          />
          </>
        ))}
        
          <div class="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            
       
            <div class="flex items-center justify-between w-full py-6">
              <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 class="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                ${
                  cart.reduce((accum, product) => accum + parseFloat(product.price) * product.quantity,0)
                }
              </h6>
            </div>
          </div>
          <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button class="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
              <span class="px-2 font-semibold text-lg leading-8 text-indigo-600">
                Add Coupon Code
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                  stroke="#4F46E5"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
              Continue to Payment
              <svg
                class="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewCart;
