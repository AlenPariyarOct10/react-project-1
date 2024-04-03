import React from 'react';
import { useAppContext } from '../ContextAPI';
import CartProductDetail from '../cart/CartProductDetail';
import { Card, Space, Button } from 'antd';


const ViewCart = () => {
  const { appState } = useAppContext();
  console.log(appState);
  let costPrice = appState.cart.reduce((accum, product) => accum + parseInt(product.price) * product.quantity, 0);
  let discountPrice = appState.cart.reduce((accum, product) => accum + (parseInt(product.price * product.discount / 100)) * product.quantity, 0);
  let grandTotal = costPrice - discountPrice;
  return (
    <>
      <h2 className='text-gray-900 text-3xl title-font font-medium mb-1'>Items in Cart</h2>
      <Space direction="vertical" size={5}>
        <Card title="Cart" className='w-full bg-blue-200'>
          <h2 className='text-gray-900 text-2xl title-font font-small mb-1'>Total Items : {appState.cart.length}</h2>
          <h2 className='text-gray-900 text-2xl title-font font-small mb-1'>Cost Price : ${costPrice}</h2>
          <h2 className='text-gray-900 text-2xl title-font font-small mb-1'>Discount Amount : ${discountPrice}</h2>
          <hr />
          <h1 className='text-green-600 text-2xl title-font font-bold mb-1'>Grand Total : ${grandTotal}</h1>
          <Button className="bg-blue-800 text-white">Order now</Button>
        </Card>
        <hr />
      </Space>


      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

        {
          appState.cart.map((product) => (
            <CartProductDetail key={product.id} id={product.id} name={product.name} description={product.description} image={product.image} quantity={product.quantity} price={product.price} discount={product.discount} />
          ))
        }
      </div>
    </>
  )
}

export default ViewCart;