import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/appointmentBg.jpg';
const AppointmentHeader = ({handleDateChange}) => {
    return (
        <div className="container">
            <main style={{ height: '580px' }} className='row d-flex'>
            <h1 className="mt-5" style={{ color: '#3A4256' }}>Book Your Appointment</h1>
                <div className='col-md-4 offset-md-1'>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className='col-md-6'>
                    <img style={{boxShadow: '5px 5px 5px gray'}} src={chair} alt="" className='img-fluid' />
                </div>
            </main>
        </div>
    )
}
export default AppointmentHeader;