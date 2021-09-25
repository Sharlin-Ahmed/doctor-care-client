import React from 'react'
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
const Home = () => {
    return (
        <>
            <Header/>
            <Services/>
            <Feature/>
            <MakeAppointment/>
        </>
    )
}
export default Home;