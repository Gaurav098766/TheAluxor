import React from 'react'
import axios from 'axios';
import {Tabs} from "antd";
import Loader from '../components/Loader';
import Error from '../components/Error';
import Swal from "sweetalert2";
import { useEffect,useState } from 'react';

const {TabPane}= Tabs;
function Adminscreen() {

    useEffect(() =>{
        if(!JSON.parse(localStorage.getItem('currentUser')).isAdmin){
            window.location.href="/home";
        }
    })


  return (
    <div className='mt-3 ml-2 bs1'>
        <h2 className='text-center' style={{fontSize:'30px'}}><b>Admin Panel</b></h2>
        <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
            <Bookings/>
        </TabPane>
        <TabPane tab="Rooms" key="2">
            <Rooms/>
        </TabPane>
        <TabPane tab="Add Rooms" key="3">
            <Addroom/>
        </TabPane>
        <TabPane tab="Users" key="4">
            <Users/>
        </TabPane>
        </Tabs>
    </div>
  )
}

export default Adminscreen


export function Bookings(){

const [bookings,setbookings] = useState([]);
const [loading,setloading]=useState(true)
const [error,seterror] = useState()
useEffect(()=>{
    const fetchData = async () =>{
    try {
        const data = await (
            await axios.get("/api/bookings/getallbookings")).data
        setbookings(data);
        setloading(false)
    } catch (error) {
        console.log(error);
        setloading(false)
        seterror(error);
    }
};
fetchData();
},[])


    return(
        <div className='row'>
            <div className='col-md-12'>
                <h1>Bookings</h1>
                {loading && <Loader/>}

                <table className='table table-bordered table-dark'>
                    <thead className='bs1'>
                        <tr>
                            <th>Booking Id</th>
                            <th>User Id</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                    {bookings.length && (bookings.map(booking=>{
                        return <tr>
                            <td>{booking._id}</td>
                            <td>{booking.userid}</td>
                            <td>{booking.room}</td>
                            <td>{booking.fromdate}</td>
                            <td>{booking.todate}</td>
                            <td>{booking.status}</td>
                        </tr>
                    }))}
                    </tbody>


                </table>             
            </div>
        </div>
    )
}



export function Rooms(){

    const [rooms,setrooms] = useState([]);
    const [loading,setloading]=useState(true)
    const [error,seterror] = useState()
    useEffect(()=>{
        const fetchData = async () =>{
        try {
            const data = await (
                await axios.get("/api/rooms/getallrooms")).data
            setrooms(data);
            setloading(false)
        } catch (error) {
            console.log(error);
            setloading(false)
            seterror(error);
        }
    };
    fetchData();
    },[])
    
    
        return(
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Rooms</h1>
                    {loading && <Loader/>}
    
                    <table className='table table-bordered table-dark'>
                        <thead className='bs1'>
                            <tr>
                                <th>Room Id</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Rent per day</th>
                                <th>Max Count</th>
                                <th>Phone Number </th>
                            </tr>
                        </thead>
    
                        <tbody>
                        {rooms.length && (rooms.map(room=>{
                            return <tr>
                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}</td>
                                <td>{room.maxcount}</td>
                                <td>{room.phonenumber}</td>
                            </tr>
                        }))}
                        </tbody>
    
    
                    </table>             
                </div>
            </div>
        )
    }


    export function Users(){
        const [users,setusers] = useState([]);
        const [loading,setloading]=useState(true)
        const [error,seterror] = useState()
        useEffect(()=>{
            const fetchData = async () =>{
            try {
                const data = await (
                    await axios.get("/api/users/getallusers")).data
                setusers(data);
                setloading(false)
            } catch (error) {
                console.log(error);
                setloading(false)
                seterror(error);
            }
        };
        fetchData();
        },[])

        return(
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Users</h1>
                    {loading && <Loader/>}
                    <table className='table table-dark table-bordered'>
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Is Admin</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users && (users.map(user=>{
                                return <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? "YES":"NO"}</td>
                                </tr>
                            }))}
                        </tbody>


                    </table>
                </div>
            </div>
        )
    }



    export function Addroom(){

        const [loading,setloading]=useState(false)
        const [error,seterror] = useState()
        const[name,setname] = useState('')
        const[rentperday,setrentperday] = useState()
        const[maxcount,setmaxcount] = useState()
        const[description,setdescription] = useState()
        const[phonenumber,setphonenumber] = useState()
        const[type,settype] = useState()
        const[imageurl1,setimageurl1] = useState()
        const[imageurl2,setimageurl2] = useState()
        const[imageurl3,setimageurl3] = useState()


        async function addroom(){
            const newroom={
                name,
                rentperday,
                maxcount,
                description,
                phonenumber,
                type,
                imageurls:[imageurl1,imageurl2,imageurl3]
            }

            try {
                setloading(true);
                const result = await axios.post('/api/rooms/addroom',newroom)
                console.log(result.data)
                setloading(false);
                Swal.fire('Congrats',"Your New Room Added Successfully","success")
                    .then(result=>{
                        window.location.href="/home";
                    })
            } catch (error) {
                console.log(error)
                setloading(false);
                Swal.fire('Oops',"Something went wrong","error");
            }
        }


        return (
            <div className='row'>  

                <div className='col-md-5'>
                {loading && <Loader/>}
                    <input type="text" className="form-control" placeholder="room name"
                        value={name} onChange={(e)=>{setname(e.target.value)}}
                        />
                    <input type="text" className="form-control" placeholder="rent per day"
                    value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}}
                        />
                    <input type="text" className="form-control" placeholder="mac count"
                    value={maxcount} onChange={(e)=>{setmaxcount(e.target.value)}}
                        />
                    <input type="text" className="form-control" placeholder="description"
                    value={description} onChange={(e)=>{setdescription(e.target.value)}}
                        />
                    <input type="text" className="form-control" placeholder="phone number"
                    value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}
                    />

                </div>


                <div className='col-md-5'> 

                    <input type="text" className="form-control" placeholder="type"
                    value={type} onChange={(e)=>{settype(e.target.value)}}
                        />
                    <input type="text" className="form-control" placeholder="Image URL1"
                    value={imageurl1} onChange={(e)=>{setimageurl1(e.target.value)}}
                    />
                    <input type="text" className="form-control" placeholder="Image URL2"
                    value={imageurl2} onChange={(e)=>{setimageurl2(e.target.value)}}
                    />
                    <input type="text" className="form-control" placeholder="Image URL3"
                    value={imageurl3} onChange={(e)=>{setimageurl3(e.target.value)}}
                    />


                    <div className='text-right mt-2'>
                    <button className='btn btn-primary' onClick={addroom}>Add Rooms</button>
                </div>

                </div>
            </div>
        )
    }