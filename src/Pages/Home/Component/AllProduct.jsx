import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import useProduct from "../../../Data/useProduct";
import RowMiniCard from "../../../Component/Shared/RowMiniCard";

export default function AllProduct() {
    const {products} = useProduct()
  return (
    <>
      <Swiper watchSlidesProgress={true} slidesPerView={6} className="mySwiper">
        <div className="">
            {
                products?.map(product => (
                    <SwiperSlide>
                        <RowMiniCard product={product}></RowMiniCard>
                    </SwiperSlide>
                ))
            }
        </div>
      </Swiper>
    </>
  );
}
