import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes,Router,Route} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Landingscreen from './screens/Landingscreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home"  element = {<Homescreen/>}></Route>
          <Route exact path="/book/:roomid/:fromdate/:todate"  element = {<Bookingscreen/>}></Route>
          <Route exact path="/register"  element = {<Registerscreen/>}></Route>
          <Route exact path="/Login"  element = {<Loginscreen/>}></Route>
          <Route exact path="/profile"  element = {<Profilescreen/>}></Route>
          <Route exact path="/admin"  element = {<Adminscreen/>}></Route>
          <Route exact path="/"  element = {<Landingscreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
