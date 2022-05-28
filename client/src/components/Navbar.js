import React from 'react'

function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  function logout(){
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }
  return (
    <div>
      <nav class='navbar navbar-expand-lg'>
        <a class='navbar-brand' href='/home'>
          The Aluxor
        </a>
        <button 
          class='navbar-toggler' 
          type='button' 
          data-toggle = 'collapse' 
          data-target='#navbarNav' 
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'><i class="fa fa-bars" style={{color:'white'}}></i></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav mr-5'>
           {user ? (
             <>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-user"></i> {user.name}
                </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/profile">Profile</a>
                <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
              </div>
            </div>
             </>
           ):(
             <>
                 <li class='nav-link active'>
                    <a class='nav-link' href="/register">
                      Register
                    </a>
                  </li>
                  <li class='nav-link active'>
                    <a class='nav-link' href="/login">
                      Login
                      </a>
                  </li>
             </>
           )}

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar



























// import React,{useState} from 'react'

// const Navbar = () =>{
  // const user = JSON.stringify(localStorage.getItem('currentUser'))
  // function logout(){
  //   localStorage.removeItem('currentUser')
  //   Window.location.href='/login'
  // }
  
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="Navbar">
//     <span className="nav-logo">The Aluxor</span>
//     <div className={`nav-items ${isOpen && "open"}`}>
//       <a href="/home">Home</a>
//       <a href="/about">About Us</a>
//       <a href="/service">Service</a>
//       <a href="/contact">Contact</a>
//       <a href="/register">Register</a>
//       <a href="/login">Login</a>
//     </div>
//     <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
//       <div className="bar"></div>
//     </div>
    
//   </div>
//   )
// }

// export default Navbar