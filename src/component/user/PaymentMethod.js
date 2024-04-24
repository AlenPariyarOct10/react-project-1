// import { Table } from 'antd'
// import React from 'react'
// import { useSelector } from 'react-redux';
// import { paymentmethod } from '../component/utlis';
// import { Esewa } from './Esewa';
// import {Khalti} from './Khalti';
// import KhaltiCheckout from 'khalti-checkout-web';


// export const PaymentMethod = () => {
    
//     const carditem = useSelector((state) => state);
//   console.log("carditem", carditem);
//   const [orderdata,setOrderData] = React.useState([]);
//   console.log("orderdata", orderdata);
//   React.useEffect(() => {
//     setOrderData(carditem?.addtocard?.data);
//   }, [carditem?.addtocard?.data]);

//   const total= orderdata.reduce((accumulator, currentItem)=>{
//     return accumulator+currentItem.price * currentItem.qty;
//   },0)
//   const addtoqty= orderdata.reduce((accumulator, currentItem)=>{
//     return accumulator+currentItem.qty;
//   },0)

//     // const dataSource = [
//     //     {
//     //       key: '1',
//     //       name: 'Mike',
//     //       age: 32,
//     //       address: '10 Downing Street',
//     //     },
//     //     {
//     //       key: '2',
//     //       name: 'John',
//     //       age: 42,
//     //       address: '10 Downing Street',
//     //     },
//     //   ];
//       const columns = [
//         {
//           title: 'Name',
//           dataIndex: 'name',
//           key: 'name',
//         },
//         {
//           title: 'Price',
//           dataIndex: 'price',
//           key: 'price',
//         },
//         {
//           title: 'Qty',
//           dataIndex: 'qty',
//           key: 'qty',
//         },
//       ];
//       const path="https://uat.esewa.com.np/epay/main";
//    const params={
//     amt:100,
//     psc:0,
//     pdc:0,
//     txAmt:0,
//     tAmt:100,
//     pid:"fasfjhdsajflfhaal",
//     scd:"EPAYTEST",
//     su:"http://merchant.com.np/page/esewa_payment_success",
//     fu:"http://merchant.com.np/page/esewa_payment_failed"

//    }

//    let checkout = new KhaltiCheckout(Khalti);

//    const [isPayment,setPayment]=React.useState({
//     eSewa:false,
//     khalti:false
//    });
//    const handelpayment = (id) => {
//     console.log("esewa", id);
//     if (id === 1) {
//       setPayment({
//         eSewa: true,
//         khalti: false,
//         cod: false
//       });
//     } else if (id === 2) {
//       setPayment({
//         eSewa: false,
//         khalti: true,
//         cod: false
//       });
//     } else {
//       setPayment({
//         eSewa: false,
//         khalti: false,
//         cod: true
//       });
//     }
//   };
  
//    console.log("isPayment", isPayment)
      

//   return (
//     <div className='text-center  text-base mb-3 '>
//         Modes of Payment
//         <div className=' md:flex justify-center '> 
//           <div className='h-auto'>
//           <div   >
//             <Table dataSource={carditem?.addtocard?.data} columns={columns}   />
//           </div>
//           <div className=' flex justify-center gap-2'>
//             <div>Total amount is:{total}</div>
//             <div>Total number of qty:{addtoqty}</div>
//           </div>
//           </div>
//         <div className=' flex justify-end'>
//         {paymentmethod?.map((item) => (
//                 <div key={item.image} style={{
//                     color: item.color
//                 }} className='flex justify-end' onClick={()=>handelpayment(item.id)}>
//                   {<img alt="example" src={item.image} className="w-15 h-10"  />}
                  
//                 </div>
//               ))}
//         </div>
//         </div>
        
//           {isPayment?.eSewa &&
//           <Esewa path={path} params={params} /> }
        
//     </div>
//   )
// }

