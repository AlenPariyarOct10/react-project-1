import React from 'react';
import { hotproduct } from '../utils';
import DashboardProductReuseAble from './DashboardProductReuseAble';
import TrendingProductsComponent from './TrendingProductsComponent';
import FeaturesComponents from './FeaturesComponents';
import CarouselDash from './CarouselDash';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DashBoard = () => {
    
    return (
        <>
        
       <DashboardProductReuseAble title={"Hot Products 🔥"} data={hotproduct} color={"text-white rounded dark:bg-yellow-300"}></DashboardProductReuseAble>
       <div>
            <CarouselDash title="Latest products" data={hotproduct}/>
        </div>
       <DashboardProductReuseAble title={"Phones"} data={hotproduct} color={"text-white bg-blue-600 rounded dark:bg-blue-500"}></DashboardProductReuseAble>
       <TrendingProductsComponent title={"Premium Products"} data={hotproduct.filter((item)=> item.price>=999)} color={"text-white bg-gold-700 rounded dark:bg-gold-700"}></TrendingProductsComponent>
       <FeaturesComponents title={"Most recent products"} data={hotproduct.filter((item)=> item.price>=999)} color={"text-white bg-black rounded dark:bg-black"}></FeaturesComponents>
       
       </>

    )
}

export default DashBoard;