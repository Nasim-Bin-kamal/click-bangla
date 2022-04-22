import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
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
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout';
import Payment from './pages/Payment/Payment';
import AddAdmin from './pages/AddAdmin/AddAdmin';
import AdminRoute from './components/AdminRoute/AdminRoute';



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

              <Route path="manage-orders" element={<AdminRoute>
                <ManageOrders />
              </AdminRoute>} />
              <Route path="add-product" element={<AddProducts />} />
              <Route path="manage-products" element={<AdminRoute>
                <ManageProducts />
              </AdminRoute>} />
              {/* <Route path="manage-products/update/:id" element={<UpdateProduct />} /> */}
              <Route path="my-orders" element={<MyOrders />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="add-admin" element={<AdminRoute>
                <AddAdmin />
              </AdminRoute>} />
            </Route>

            <Route path="/checkout" element={<PrivateRoute>
              <Checkout />
            </PrivateRoute>} />
            <Route path="/payment" element={<PrivateRoute>
              <Payment />
            </PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
