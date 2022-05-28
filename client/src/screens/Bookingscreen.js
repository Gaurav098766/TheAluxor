import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import Swal from "sweetalert2";
import StripeCheckout from 'react-stripe-checkout';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000
}); 

const Bookingscreen = () => {
  
  const {roomid,fromdate,todate} = useParams();
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState()
  const [room, setroom] = useState()
  
  const newFromdate = fromdate
  const newTodate = todate
  const fdate = moment(newFromdate,'DD-MM-YYYY');
  const tdate = moment(newTodate,'DD-MM-YYYY'); 


  const totaldays = moment.duration(tdate.diff(fdate)).asDays()+1;

  const [totalamount,settotalamount] = useState();

  useEffect(() =>{

    if(!localStorage.getItem('currentUser')){
      window.location.reload="/login";
    }





    const fetchData = async () =>{
      try {
        setloading(true)
        const response = await axios.post('/api/rooms/getroombyid',{roomid:roomid});
        settotalamount(response.data.rentperday*totaldays);
        setroom(response.data)
        setloading(false)
      } catch (error) {
        setloading(false)
        seterror(true)
      }
    };
    fetchData(); 
  },[]);



  async function bookRoom(){
    const bookingDetails = {
      userid:JSON.parse(localStorage.getItem('currentUser'))._id,
      room,
      fromdate,
      todate,
      totalamount,
      totaldays
    }

    try {
      setloading(true)
      const result = await axios.post('/api/bookings/bookroom',bookingDetails)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    };
  }


async function onToken(token){
  console.log(token)
  const bookingDetails = {
    userid:JSON.parse(localStorage.getItem('currentUser'))._id,
    room,
    fromdate,
    todate,
    totalamount,
    totaldays,
    token
  }

  try {
    setloading(true)
    const result = await axios.post('/api/bookings/bookroom',bookingDetails)
    setloading(false)
    Swal.fire("Congratultions","Your Room booked Successfully","success").then(result=>{
      window.location.href="/profile"
    })
  } catch (error) {
    // console.log(error)
    setloading(false)
    Swal.fire("Oops","Something went wrong","error");
  }
}

  return (
    <div className='m-5' data-aos="flip-left">
             {loading ? (<Loader/>) : room ?  (<div>

             <div className='row justify-content-center mt-5 bs'>
                 <div className='col-md-5'>
                     <h1>{room.name}</h1>
                     <img src={room.imageurls[0]} className='bigimg'/>
                 </div>

                 <div className='col-md-5'>
                   <div style={{textAlign:'right'}}>
                      <h1>Booking Details</h1>
                        <hr/>
                        <b>
                          <p>Name:{JSON.parse(localStorage.getItem('currentUser')).name}</p>
                          <p>From Date:{fromdate} </p>
                          <p>To Date: {todate}</p>
                          <p>Max Count: {room.maxcount}</p>
                        </b>
                    </div>

                  <div style={{textAlign:'right'}}>
                      <b>
                      <h1>Amount</h1>
                      <hr/>
                      <p>Total Days: {totaldays} </p>
                      <p>Rent per day :{room.rentperday}</p>
                      <p>Total Amount : {totalamount}</p>
                      </b>
                 </div>

                
                 
                   <StripeCheckout
                    amount={totalamount * 100}
                    currency = 'INR'
                    token={onToken}
                    stripeKey="pk_test_51KM8Z1SGKpSkohBgKHcrVlL9ouDUDzPMuBhQ5k9L1VCX2eOt00uVJnZJW85tMnJDLh87FcfIxiDOENEDetHFA5gW005gZ9aA4k"
                    >
                    <div style={{float:'right'}}>
                    <button className='btn btn-success'>Pay Now</button>
                    </div>
                    </StripeCheckout>
                 </div>


                



             </div>

        </div>) :  (<Error/>)}
    </div>
  )
}

export default Bookingscreen


























// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function Bookingscreen() {

//   const [loading, setloading] = useState(true)
//   const [error, seterror] = useState()
//   const [room, setroom] = useState()

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setloading(true)
//         const response = await axios.post('/api/rooms/getallrooms');
//         setroom(response.data)
//         setloading(false)
//       }
//       catch (e) {
//         setloading(false)
//         seterror(true)
//       }
//     };
//     fetchData();
//   }, [])

//   return (
//     <div>
//         {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error...</h1>): (<div>

//             <div className='row'>
//                 <div className='col-md-5'>
//                     <h1>{room.name}</h1>
//                     <img src={room.imageurls[0]} className='bigimg'/>
//                 </div>

//                 <div className='col-md-5'>



//                 </div>



//             </div>

//         </div>)}
//     </div>
//   )
// }

// export default Bookingscreen