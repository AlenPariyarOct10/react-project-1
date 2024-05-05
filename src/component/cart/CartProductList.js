import React, { useState } from "react";
import { Button } from "antd";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/CartState";
import { updateProductQuantity } from "../../redux/CartState";

const CartProductList = ({
  id,
  name,
  description,
  image,
  quantity: initialQuantity = 1,
  price,
  discount,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);

      dispatch(updateProductQuantity({ id: id, quantity: newQuantity }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <>
      <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
        <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
          <div class="img-box">
            <img src={image} alt="perfume bottle image" class="xl:w-[140px]" />
          </div>
          <div class="pro-data w-full max-w-sm ">
            <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
              {name}
            </h5>
            <p class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
              {description}
            </p>
          </div>
        </div>
        
        <div class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
          <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
            ${price}
          </h6>
          <div class="flex items-center w-full mx-auto justify-center">
            <input
              type="number"
              onChange={handleQuantityChange}
              id="number-input"
              className="inline-block bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 text-black"
              value={quantity}
              required
            />
          </div>
          <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
            ${quantity * price}
          </h6>
          
        </div>
        <div className="px-6 pt-4 pb-2">
                <Button onClick={()=>removeItem(id)} className="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Remove
                </Button>
            </div>
        
      </div>
    </>
  );
};

export default CartProductList;
