import React from 'react'
import Feature from '../Feature/Feature';
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
        </>
    )
}
export default Home;