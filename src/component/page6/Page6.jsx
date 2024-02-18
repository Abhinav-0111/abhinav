import React, { useState } from "react";
import "../page6/page6.css";
import ReactPlayer from "react-player";
import { IoPlaySharp } from "react-icons/io5";

const Page6 = () => {
    const [pause, setpause] = useState(true);
    return (
        <>
            <div className="page6">
                <div className="page6_top">
                    <h1>
                        Far More Than
                        <br /> Just Business
                    </h1>
                    <p>
                        The way you do anything is the way you do everything. We
                        haven’t cracked the code on catering; we simply care
                        unreasonably about every aspect of what we do. We care
                        about people as much as we care about details, and we
                        absolutely refuse to compromise on making your day
                        anything but the best. We’ve got your back from the
                        initial idea to the final farewell!
                    </p>
                </div>
                <div className="page6_bottom">
                    {pause && (
                        <>
                            <div className="svg">
                                <IoPlaySharp
                                    size={100}
                                    color="white"
                                    onClick={() => {
                                        setpause(false);
                                    }}
                                />
                            </div>
                            <div className="page6_img">
                                <img src="https://i.ytimg.com/vi/7gPP9hsV4a0/maxresdefault.jpg" />
                            </div>
                        </>
                    )}
                    {pause ? (
                        ""
                    ) : (
                        <ReactPlayer
                            url={`https://youtu.be/7gPP9hsV4a0`}
                            controls
                            width="100%"
                            height="100%"
                            playing={true}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Page6;
