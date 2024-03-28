import React from "react";
import Slider from "react-slick";

const CarouselDash = ({data, title})=>{
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      return (
        <>
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class={"px-2 "} >{title}</mark></h1>

        <Slider {...settings}>
          {data.map((item)=>(
            <div key={item.id} class="flex justify-center"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight: '250px',
              minWidth: '500px',
            }}
            >
            <img src={item.image} class="object-contain h-20 w-full blur-1xl ..."/>
          </div>
         
          ))}
        </Slider>
        </>
      );
}

export default CarouselDash;