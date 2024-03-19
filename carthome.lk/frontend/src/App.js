import React from "react";
import Home from "./components/Home";
import "./App.css";
import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignIn2 from "./components/SignIn2";
import SignUp2 from "./components/SignUp2";
import BuyerOrders from "./components/BuyerOrders";
import ViewVehicles from "./components/ViewVehicles";
import CreateVehicle from "./components/CreateVehicle";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import BS_SignUp from "./components/B&S Signup";
import BS_SignIn from "./components/B&S SignIn";
import ChangeVehicle from "./components/ChangeVehicle";
import SellerPage from "./components/SellerPage";
import ViewVehicles2 from "./components/ViewVehicles2";


const App = () => {

    const user = useSelector(selectUser);
    console.log(user);

    return (

        <div className="app">
            <Router>
                <Header>
                </Header>
                <Routes>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route path="/signin" element={<SignIn/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                    <Route path="/signin2" element={<SignIn2/>}></Route>
                    <Route path="/signup2" element={<SignUp2/>}></Route>
                    <Route path="/bs_signup" element={<BS_SignUp/>}/>
                    <Route path="/bs_signin" element={<BS_SignIn/>}/>
                    <Route path="/sellerpage" element={<SellerPage/>}/>
                    {/* <Route path="/buyerorders" element={
                        user ? <BuyerOrders></BuyerOrders> : <SignIn/>
                    }/> */}
                     <Route path="/createvehicle" element={
                      <CreateVehicle></CreateVehicle> } />

                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/service" element={<Service/>}></Route>
                    <Route path="/contact" element={<Contact/>} ></Route>

                    <Route path="/vehicles" element={<ViewVehicles />}></Route>
                    <Route path="/vehicles2" element={<ViewVehicles2 />}></Route>

                    <Route path="/changevehicle/:id" element={<ChangeVehicle />} />
                   
                </Routes>
                <Footer> </Footer>
            </Router>
        </div>

    );
};

export default App;
