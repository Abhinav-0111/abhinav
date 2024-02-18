import React from "react";
import "../page1/page1.css";
import Header from "../header/Header";
import video from "../../assets/video/v1.mp4";
import { BsChevronCompactDown } from "react-icons/bs";

const Page1 = () => {
    return (
        <>
            <div className="page1">
                <Header />
                <div className="container">
                    <video
                        autoplay
                        loop
                        muted
                        poster="https://24carrots.com/wp-content/uploads/2023/08/chef.png"
                    >
                        <source
                            src={video}
                            type="video/mp4"
                        ></source>
                    </video>
                    <h4 className="page1_heading">Simply the Finest</h4>
                    <div className="icon">
                        <BsChevronCompactDown
                            size={50}
                            color="white"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page1;
