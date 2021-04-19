import React from 'react'
import Slider from "react-slick";
import '../css/home.css';
import IMAGES from '../component/images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ()=> {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

 return(
   <>
   <div className="ovr_c">
   <Slider {...settings} className="sliderhome">
    <div className="pos_rel">
    <img alt="Banner" src={IMAGES.banner1} />
    <h1>Build <br />Level Five<br />Cultured Companies.
     </h1>


    </div>

    <div className="pos_rel">
    <img alt="Banner" src={IMAGES.banner2} />
        <h1>Scams are Rising Across the <br/>
        Globe, and Criminals are Exploiting<br/>
        the Current Situation to Prey on More Victims
	    </h1>

    </div>

    <div className="pos_rel">
    <img alt="Banner" src={IMAGES.banner3} />
        <h1>World Leading Provider of Adaptive
         Behavioral Analytics Technology for Fraud and Risk Managements
	      </h1>

    </div>

    <div className="pos_rel">
    <img alt="Banner" src={IMAGES.banner4} />
        <h1>The First Integrated AI-Growth Management
        Platform, Funneling Growth Across Omnichannel for Digital Marketers.
	    </h1>

    </div>

  </Slider>
   </div>
   <div className="padleft_right">
     Home
   </div>
   </>

 )


}
export default Home
