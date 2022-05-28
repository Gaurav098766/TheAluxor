import React,{useEffect,useState} from 'react'
import axios from 'axios';
import  loginimg from '../images/loginimg.jpg'
import Error from '../components/Error';
import Loader from '../components/Loader';

function Loginscreen() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()

async function Login(){
    
        const user={
            email,
            password,
        }
        try {
            setloading(true)
            const result = await axios.post('/api/users/Login',user)
            setloading(false)
            
            localStorage.setItem('currentUser',JSON.stringify(result.data))
            window.location.href='/home'
            console.log(result.data);
        } 
        catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)
        }
    }





  return (
      <div>
          {loading && (<Loader/>)}
          <div className='row justify-content-center mt-5'>
                <div className='col-md-5 bs1'>
                    {error && (<Error message="Invalid Credentials"/>)}
                    <h2>Login</h2>
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

                            
                            <button className='btn btn-primary mt-3' onClick={Login}>Login</button>
                            
                        
                            <div className='image' style={{float :'right' , margin:'10px'}}>
                            <img src={loginimg} alt="" />
                        </div>
                    
                </div>
            </div>
    </div>           

                
  )
}

export default Loginscreen