import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import AdminDashboard from './pages/Admin';
import ProductBookingPage from './pages/ProductBookingPage';
import ServiceBookingPage from './pages/ServiceBookingPage';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import AddBooking from './pages/AddBooking';








// import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        
        <Router>
          {/* navbar */}
            <Header />
            
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-booking" element={<AddBooking />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <AdminDashboard />
                        </PrivateRoute>
                    }
                />
                <Route path="/products/:productId/book" element={<ProductBookingPage />} />
                <Route path="/services/:serviceId/book" element={<ServiceBookingPage />} />
                <Route path="/login" element={<Login />} />



            </Routes>
            <Footer />
        </Router>
       
    );
};

export default App;
