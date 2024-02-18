import "../page2/page2.css";
import { FaArrowRight } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Page2 = () => {
    return (
        <>
            <div className="page2">
                <div className="page2_left">
                    <div className="top_heading">
                        <p>WELCOME TO 24 CARROTS</p>
                        <h2>Remarkable Catering & Events</h2>
                    </div>
                    <div className="bottom_heading">
                        <p>
                            24 Carrots is the premier catering and events
                            company of choice in Southern California. We create
                            remarkable experiences by offering the finest
                            quality foods and providing unsurpassed personalized
                            service, driven by our passion for life’s special
                            occasions.
                        </p>
                        <button>
                            GET IN TOUCH
                            <FaArrowRight
                                size={20}
                                style={{ marginLeft: "10px" }}
                            />
                        </button>
                    </div>
                </div>
                <div className="page2_right">
                    <div className="img_container">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page2;
