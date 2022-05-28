import React,{useState} from 'react'
import {Modal,Button,Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000
});


function Room({room,fromdate,todate}) {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='row bs' data-aos="fade-up">
        <div className='col-md-4'>
            <img src = {room.imageurls[0]} className='smalling' alt=""/>
        </div>
        <div className='col-md-7'>
            <b>
            <h1>{room.name}</h1>
            <p>Max Count: {room.maxcount}</p>
            <p>Phone Number : {room.phonenumber}</p>
            <p>Type : {room.type}</p>
            </b>


            <div style={{float:'right'}}>

              {(fromdate && todate) && (
                <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                  <button className='btn btn-primary m-2'>Book Now</button>
                </Link>
              )}
          
                <button className='btn btn-primary' onClick={handleShow}>View Details</button>
            </div>
        </div>

        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel fade>
           {room.imageurls.map(url=>{
               return  <Carousel.Item>
               <img className="d-block w-100 bigimg" src={url} alt=""/>
           </Carousel.Item>
           })}
        </Carousel>

        <p>{room.description}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>





    </div>
  )
}

export default Room




































// import React, { useState } from 'react'

// function Room({room}) {


 



//   return (
//     <div className='row bs'>
//         <div className='col-md-4'>
//             <img src={room.imageurls[0]} className='smalling'/>   
//         </div>
//         <div className='col-md-7'>
//             <h1>{room.name}</h1>
//             <b>
//                 {" "}
//                 <p>Max count : {room.maxcount}</p>
//                 <p>Phone Number : {room.phonenumber}</p>
//                 <p>Type : {room.type}</p>
//             </b>
//             <div style={{float: "right"}}>
//                 <button className='btn btn-primary'>View Details</button>
//             </div>
//         </div>






//     </div>
//   )
// }


// export default Room