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
import Cart from './Pages/Cart/Cart';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/Shared/Dashboard/MakeAdmin';
import AddReview from './Pages/Shared/Dashboard/AddReview/AddReview';
import AllReviews from './Pages/AllReviews/AllReviews';
import ManageAllOrders from './Pages/Shared/Dashboard/ManageAllOrders/ManageAllOrders';


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
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/cart" element={<PrivateRoute>
            <Cart />
          </PrivateRoute>} />
          <Route path="/manageorders" element={<PrivateRoute>
            <ManageAllOrders />
          </PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute>
            <MakeAdmin />
          </PrivateRoute>} />
          <Route path="/addreview" element={<PrivateRoute>
            <AddReview />
          </PrivateRoute>} />

        
          
        </Routes>
      </BrowserRouter>
      
      </AuthProvider>
  </div>
  );
}

export default App;
