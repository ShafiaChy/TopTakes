import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Gallery from './Pages/Gallery/Gallery';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
   <div>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
          
        </Routes>
      </BrowserRouter>
      
      </AuthProvider>
  </div>
  );
}

export default App;
