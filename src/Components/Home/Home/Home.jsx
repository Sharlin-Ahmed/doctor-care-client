import React from 'react'
import Blogs from '../Blogs/Blogs';
import Contact from '../ContactUs/Contact';
import Doctors from '../Doctors/Doctors';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <>
            <Header/>
            <Services/>
            <Feature/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default Home;