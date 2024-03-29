import React from 'react';
import { useState } from 'react';
import { Card, Button, Avatar } from "antd";

const FeaturesComponents = ({ title, data, color }) => {

    const [currentCount, nextCount] = useState([{}]);

    return (
        <>
            {console.log(color)}
            <div className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>
                <h1>Selected : {currentCount.length}</h1>

                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class={"px-2 " + color} >{title}</mark></h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10">

                {
                    data?.map((product) => (

                        <div key={product.id}>
                            <Card>
                                <div className="text-center">
                                    <div>
                                        <div className='gap-0 w-full'>
                                            <Avatar src={product.image} size={80}/>
                                        </div>
                                        <div className='gap-0 mb-2 text-1xl font-extrabold text-slate-900 flex justify-center'>{product.name}</div>
                                    </div>
                                    <p className="text-center font-semibold text-green-600">
                                        ${product.price}
                                    </p>
                                    <p className="text-center">
                                        {product.description}
                                    </p>
                                </div>
                                <Button onClick={() => {nextCount((prevData) => [...prevData, { id: product.id }]);console.log(currentCount)}} className='bg-black hover:bg-slate-900 text-white font-bold my-3 w-full rounded-full'>Add to cart</Button>

                            </Card>
                        </div>


                    ))
                }
            </div>
        </>
    )
}

export default FeaturesComponents;