import React from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000
});

function Landingscreen() {
  return (
    <div className='row landing justify-content-center'>
        <div className='col-md-9 my-auto text-center' style={{borderRight:"8px solid white",borderLeft:"8px solid white"}}>
            <h2 data-aos="fade-down-left" style={{color:'white' , fontSize:"130px"}}>The Aluxor</h2>
            <h1  data-aos="fade-left" style={{color:'white'}}>"True hospitality consists of giving the best of yourself to your guests"</h1>

            <Link to='/home'>
                <button className='btn btn-success' style={{marginTop:"90px"}}>Get Started</button>
            </Link>
        </div>
    </div>
  )
}

export default Landingscreen



    //  data-aos-offset="300"
    //  data-aos-easing="ease-in-sine">