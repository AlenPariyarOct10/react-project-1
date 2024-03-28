import React from 'react';
import {Card, Button} from "antd";

const DashboardProductReuseAble = ({title, data, color}) => {
    
    return (
        <>
        {console.log(color)}
        <div className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>
                
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class={"px-2 "+color} >{title}</mark></h1>
            </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10">
            
            {
                data?.map((product) => (
                
                    <div key={product.id}>
                        <Card
                            cover={<img height="20px" src={product.image}></img>}
                            >
                            <p className='mb-2 text-1xl font-extrabold text-slate-900'>{product.name}</p>
                            <p>${product.price}</p>
                            <p>{product.description}</p>
                            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 w-full rounded-full'>Buy now</Button>
                                
                        </Card>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default DashboardProductReuseAble;