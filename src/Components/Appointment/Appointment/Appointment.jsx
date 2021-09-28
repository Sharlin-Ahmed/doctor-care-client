import React, { useState } from "react";
import '../AppointmentHeader/AppointmentHeader.css';
import Footer from '../../Shared/Footer/Footer.jsx'
import Navbar from "../../Shared/Navbar/Navbar.jsx";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader.jsx";
import BookAppointment from "../BookAppointment/BookAppointment";
 const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        console.log(date)
        setSelectedDate(date)
    }
     return (
         <div>
             <div className="appointment-container">
                <Navbar/>
                <AppointmentHeader handleDateChange={handleDateChange}/>
             </div>
             <BookAppointment date={selectedDate}/>
             <Footer/>
         </div>
     )
 }
 export default Appointment;