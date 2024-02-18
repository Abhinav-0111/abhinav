import "../page5/page5.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Page5 = () => {
    return (
        <>
            <div className="page5">
                <div className="slider">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Page5;
