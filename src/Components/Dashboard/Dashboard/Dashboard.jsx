import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
const Dashboard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
    const [appointments, setAppointments] = useState([])
    console.log(selectedDate)
    console.log(appointments)

    const handleDateChange = (date) => {
        setSelectedDate(date.toDateString())
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate})
        })
            .then(res => res.json())
            // .then(data => setAppointments(data))
            .then(data => console.log(data))
    }, [selectedDate])


    const containerStyle = {
        backgroundColor: '#f4fdfb',
        height: '100%'
    }

    return (
        <section style={containerStyle} className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-4 ms-5 mt-5">
                    <h3>Select By Date</h3>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-4 ms-5 mt-5">
                    <AppointmentsByDate appointments={appointments}/>
                </div>
            </div>
        </section>
    )
}
export default Dashboard;