import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png'
const AppointmentHeader = ({handleDateChange}) => {
    return (
        <div className="container">
            <main style={{ height: '580px' }} className='row d-flex'>
            <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                <div className='col-md-4 offset-md-1'>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className='col-md-6'>
                    <img src={chair} alt="" className='img-fluid' />
                </div>
            </main>
        </div>
    )
}
export default AppointmentHeader;