import React from "react";
import "./header.css";
import logo2 from '../../assets/logo2.jpeg';
import first from '../../assets/Image-1.webp'
import second from '../../assets/Image-2.webp'
import third from '../../assets/Image-3.webp'
import toi from '../../assets/toi.png'
import zee from '../../assets/zee.jpeg'
import out from '../../assets/out.png'


function First() {
   
    return (
        <>
            <div className="flex flex-outer most">
                <div className="main">
                    <div className="firstImage">
                        <img src={first}></img>
                        <div className="img-1">
                            <p>Beyond fashion,</p>
                            <p>Beyond ordinary</p>
                        </div>
                    </div>
                    <div className="flex upar">
                        <div className="flex flex-dashimg">
                            <div className="dashimg-button secondImage">
                                <img src={third}></img>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="second lastImage">
                    <img src={second}></img>
                    <div className="img-2">
                        <p>Every Stitch is a</p>
                        <p>a work of Heart</p>
                    </div>
                </div>
            </div>




            <div className="featured">Featured In</div>
            <hr></hr>
            <div className="flex flex-logo">
                <img src={toi} className="logo2"></img>
                <img src={zee} className="logo2"></img>
                <img src={out} className="logo2"></img>
            </div>
            <hr></hr>
            </>
       
    );
}
export default First;