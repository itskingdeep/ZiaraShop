import React, { useEffect, useContext} from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../../assets/images/DESKTOP MAIN BANNER.jpg';
import Slide2 from '../../../assets/images/bann.jpg';
import Button from '@mui/material/Button';

import Newsletter from '../../../components/newsletter';

import { MyContext } from '../../../App';

const HomeSlider = () => {

    const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: context.windowWidth>992 ? true : false,
        autoplay:true
    };



    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <img src={Slide1} className='w-100' />
                       
                    </div>
                    <div className="item">
                        <img src={Slide2} className='w-100' />
                        
                    </div>
                </Slider>

                {/* {
                    context.windowWidth>992 && <Newsletter/>
                }
                 */}

            </div>
        </section>
    )
}

export default HomeSlider;