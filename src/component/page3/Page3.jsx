import React from "react";
import "../page3/page3.css";
import { FaArrowRight } from "react-icons/fa6";

const Page3 = () => {
    return (
        <>
            <div className="page3">
                <img
                    className="img_page3"
                    src="	https://24carrots.com/wp-content/themes/24carrots/img/big-carrot.svg
"
                />
                <div className="page3_left">
                    <div className="img__container">
                        <img src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg" />
                    </div>
                </div>
                <div className="page3_right">
                    <div className="page3_top">
                        <h1>Making Every Experience Magical</h1>
                    </div>
                    <div className="page3_bottom">
                        <div className="bottom_left">
                            <h1 className="h1_heading">Weddings</h1>
                            <h1>Social</h1>
                            <h1>Corporate</h1>
                            <h1>Venues</h1>
                        </div>
                        <div className="bottom__right">
                            <p>EXCEPTIONAL WEDDINGS</p>
                            <h2>
                                The most important day of your life, is ours
                                too. Your wedding should be the ultimate
                                celebration of your relationship, and our team
                                of experts guide you through the process,
                                offering peace of mind and a remarkable
                                experience.
                            </h2>
                            <button>
                                LEARN MORE
                                <FaArrowRight
                                    size={20}
                                    style={{ marginLeft: "10px" }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page3;
