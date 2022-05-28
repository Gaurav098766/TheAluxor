import React,{useEffect,useState} from 'react'
import  img from '../images/img.jpg'
import axios from 'axios';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

function Registerscreen() {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [cpassword,setcpassword] = useState('')
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [success , setsuccess] = useState();


async function register(){
    if(password===cpassword){
        const user={
            name,
            email,
            password,
            cpassword
        }
        try {
            setloading(true)
            const result = await axios.post('/api/users/register',user).data
            // return result
            setloading(false)
            setsuccess(true)

            setname('')
            setemail('')
            setpassword('')
            setcpassword('')
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)
        }
    }
    else{
        alert('Passwords dont match')
    }
}





  return (
      <div>
          {loading && (<Loader/>)}
          {error && (<Error/>)}
          <div className='row justify-content-center mt-5'>
                <div className='col-md-5 bs1'>
                {success && (<Success message='Registration Successful'/>)}
                    <h2>Register</h2>
                            <div>
                                <label htmlFor='name'>
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type='text' className='form-control' placeholder='Your Name' value={name} onChange={(e) => {setname(e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor='email'>
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type='email' className='form-control' placeholder='Your Email' value={email} onChange={(e) => {setemail(e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor='password'>
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type='password' className='form-control' placeholder='Your Password' value={password} onChange={(e) => {setpassword(e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor='cpassword'>
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type='password' className='form-control' placeholder='Confirm Password' value={cpassword} onChange={(e) => {setcpassword(e.target.value)}}/>
                            </div>

                            
                            <button className='btn btn-primary mt-3' onClick={register}>Register</button>
                            
                        
                        <div className='image' style={{float :'right' , margin:'3px'}}>
                            <img src={img} alt="" />
                        </div>
                    
                </div>
                
            </div>
    </div>           

                
  )
}

export default Registerscreen