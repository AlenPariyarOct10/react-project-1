import React from "react";
import Slider from "react-slick";

const CarouselDash = ({ data, title }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 800,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class={"px-2 "} >{title}</mark></h1>

      <Slider {...settings}>
        {/* {data.map((item) => (
          
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
            <img style={{
              minHeight: '250px',
              minWidth: '500px',
            }} src={item.image} class="object-contain h-20 w-full blur-1xl ..." />
         
            </div>
        ))} */}
      </Slider>
    </>
  );
}

export default CarouselDash;