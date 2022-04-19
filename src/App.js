import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import About from './pages/About/About';
import AddProducts from './pages/AddProducts/AddProducts';
import AddReview from './pages/AddReview/AddReview';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './pages/DashboardHome/DashboardHome';
import Home from './pages/Home/Home';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import MyOrders from './pages/MyOrders/MyOrders';
import Shop from './pages/Shop/Shop';
import Checkout from './pages/Checkout/Checkout.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard/*" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="" element={<DashboardHome />} />
              <Route path="manageOrders" element={<ManageOrders />} />
              <Route path="addProducts" element={<AddProducts />} />
              <Route path="manageProducts" element={<ManageProducts />} />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="addReview" element={<AddReview />} />
            </Route>

            <Route path="/checkout" element={<PrivateRoute>
              <Checkout />
            </PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
