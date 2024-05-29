import React from 'react';
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';

import './style.css';

const Banners = ()=>{
    return(
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='box'>
                            <img src='https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw1a33dbac/images/Jan%202024/blogs%202.jpg' className='w-100 transition' />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <img src='https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwf70960f9/images/2023/AND_New_2.0_Jan2024/blogs%204.jpg' className='w-100 transition' />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <img src='https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw692fe375/images/Jan%202024/blogs%201.jpg  ' className='w-100 transition' />
                        </div>
                    </div>

                   
                                       
                </div>
            </div>
        </div>
    )
}

export default Banners;