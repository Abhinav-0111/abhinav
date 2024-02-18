import React from "react";
import "../page4/page4.css";
import { FaArrowRight } from "react-icons/fa6";

const Page4 = () => {
    return (
        <>
            <div className="page4">
                <div className="page4_top">
                    <img src="https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png" />
                </div>
                <div className="page4_bottom">
                    <div className="page4_heading">
                        <h1>Unforgettable Venues</h1>
                        <p>
                            24 Carrots is the exclusive or preferred caterer at
                            Southern California’s most
                            <br /> spectacular properties. From intimate
                            understated spaces to large and luxurious ,<br />{" "}
                            we’ll help you find the event venue that makes your
                            heart skip a beat.
                        </p>
                        <button>
                            EXPLORE VENUES
                            <FaArrowRight
                                size={20}
                                style={{ marginLeft: "10px" }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page4;
