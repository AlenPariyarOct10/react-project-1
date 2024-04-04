import React, { useState } from 'react';
import { Button } from 'antd';
import { useAppContext } from "../ContextAPI";

const CartProductDetail = ({ id, name, description, image, quantity: initialQuantity = 1, price, discount }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const { appState, updateState } = useAppContext();

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if(newQuantity > 1)
        {
            setQuantity(newQuantity);

            const updatedCart = appState.cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: newQuantity
                    };
                }
                return item;
            });
    
            updateState({ cart: updatedCart });
        }
        
        
    };

    const removeItem = (id) =>{
        const newCart = appState.cart.filter(item => item.id != id);
        updateState({cart: newCart});
     } 

    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <h2 className="text-sm title-font text-green-800 tracking-widest">
                    <span className='line-through'>Rs. {price}</span> Rs.{price - price * discount / 100}
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {discount}% Off
                </span>
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <form className="max-w-sm">
                    <label htmlFor="number-input" className="inline-block mb-2 text-sm font-medium text-gray-900">
                        Quantity:
                    </label>
                    <input
                        type="number"
                        onChange={handleQuantityChange}
                        id="number-input"
                        className="inline-block bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 text-black"
                        value={quantity}
                        required
                    />
                </form>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Button onClick={()=>removeItem(id)} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Remove
                </Button>
            </div>
        </div>
    );
}

export default CartProductDetail;
