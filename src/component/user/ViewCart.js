import React from 'react';
import { useSelector } from "react-redux";
import { useAppContext } from '../ContextAPI';
import { Card, Space, Button } from 'antd';
import { Table } from 'antd';
import { paymentMethods } from './utils';
import { Meta } from 'antd/es/list/Item';


const ViewCart = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://rc-epay.esewa.com.np/api/epay/main/v2/form', {
      method: 'POST',
      body: JSON.stringify(paymentDetails),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Cost Price',
      dataIndex: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Discount %',
      dataIndex: 'discount',
    },
    {
      title: 'Discount Amount',
      dataIndex: 'discountAmount',
    },

    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
    },
  ];


  const cart = useSelector((state) => state.cart);
  let calculatedCart = cart.map((item) => {
    item.discountAmount = ((item.price * (item.discount / 100)) * item.quantity).toFixed(2);
    item.totalAmount = ((item.price * item.quantity) - (item.discountAmount)).toFixed(2);
    return item;
  });

  console.log("ccard ", calculatedCart);
  const { appState } = useAppContext();
  console.log(appState);
  let costPrice = cart.reduce((accum, product) => accum + parseInt(product.price) * product.quantity, 0);
  let discountPrice = cart.reduce((accum, product) => accum + (parseInt(product.price * product.discount / 100)) * product.quantity, 0);
  let grandTotal = costPrice - discountPrice;

  const paymentDetails = {
    "amount": grandTotal,
    "failure_url": "https://google.com",
    "product_delivery_charge": "0",
    "product_service_charge": "0",
    "product_code": "EPAYTEST",
    "signature": "YVweM7CgAtZW5tRKica/BIeYFvpSj09AaInsulqNKHk=",
    "signed_field_names": "total_amount,transaction_uuid,product_code",
    "success_url": "https://esewa.com.np",
    "tax_amount": "0",
    "total_amount": grandTotal,
    "transaction_uuid": "ab14a8f2b02c3"
  }
  return (
    <>
      <div className='flex justify-around align-middle'>
      
            <div>
              <h2 className='text-gray-900 text-3xl title-font font-medium mb-1'>Place your order</h2>
              <Space direction="vertical" size={5}>
                <Card title="Cart" className='w-full bg-blue-200'>
                  <h2 className='text-gray-900 text-2xl title-font font-small mb-1'>Total Items : {cart.length}</h2>
                  <h2 className='text-gray-900 text-2xl title-font font-small mb-1'>Cost Price : ${costPrice}</h2>
                  <h2 className='text-gray-900 text-2xl title-font font-small mb-1'>Discount Amount : ${discountPrice}</h2>
                  <hr />
                  <h1 className='text-green-600 text-2xl title-font font-bold mb-1'>Grand Total : ${grandTotal}</h1>
                  <Button className="bg-blue-800 text-white" onClick={handleSubmit} >Order now</Button>
                </Card>
                <hr />
              </Space>
            </div>
            <div>

            </div>
            <div>
              Payment
              <div className='flex'>
                {
                  paymentMethods.map((item) => (<Card
                    key={item.id}
                    hoverable
                    style={{
                      width: 100,
                    }}
                    cover={<img alt={item.name} src={item.logo} />}
                  >
                    <Meta title={item.name} />
                  </Card>
                  ))
                }
              </div>
              <div>

              </div>
            </div>
          </div>

          <Table

            columns={columns}
            dataSource={calculatedCart}
          />
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            {/* 
        {
          cart.map((product) => (
            <CartProductDetail key={product.id} id={product.id} name={product.name} description={product.description} image={product.image} quantity={product.quantity} price={product.price} discount={product.discount} />
          ))
        } */}

          </div>
        </>
        )
}

        export default ViewCart;