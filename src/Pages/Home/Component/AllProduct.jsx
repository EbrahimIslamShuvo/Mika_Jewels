import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";
import useProduct from "../../../Data/useProduct";
import RowMiniCard from "../../../Component/Shared/RowMiniCard";

export default function AllProduct() {
  const { products } = useProduct();

  return (
    <div className="bg-[#F0F0F0] py-5">
      <Swiper
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <RowMiniCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
