import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const getSelectedDataData = () => {
        const selectedDate = date.toDateString()
        fetch('https://afternoon-waters-72934.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ bookedDate: selectedDate })
        })
            .then(res => res.json())
            .then(data => {
                let serviceNames = data.map(singleData => singleData.service)
                console.log(serviceNames)
                let serviceNumber = 0
                serviceNames.filter(service => {
                    if (booking.subject === service) {
                        serviceNumber += 1
                    }
                    return serviceNumber;
                })

                console.log(`Find ${booking.subject}`, serviceNumber, 'Times')
                checkModalOpenOrNot(serviceNumber)
            })
    }

    function checkModalOpenOrNot(serviceNumber) {
        var today, selectedDate;
        today = new Date();
        today.setHours(0, 0, 0, 0);
        // console.log(today);
        selectedDate = new Date(date);
        // console.log(selectedDate);
        if (today.getTime() === selectedDate.getTime() && serviceNumber < 5) {
            setIsOpen(true);
        } else if (today.getTime() < selectedDate.getTime() && serviceNumber < 5) {
            setIsOpen(true);
        } else if (today.getTime() > selectedDate.getTime() && serviceNumber < 5) {
            alert("Select a Back Date. Please Check Your Selected Date.")
        }
        else{
            alert("Ooh! Sorry! Today No Spaces Available For Appointment")
        }
    }
    function openModal() {
        getSelectedDataData()
        console.log(booking.subject)
    }


    // function openModal() {
    //     setIsOpen(true);
    // }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3 shadow rounded">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <h4>{booking.doctorName}</h4>
                    {/* <p>{booking.totalSpace} SPACES AVAILABLE</p> */}
                    <button style={{ backgroundColor: '#1cc7c1' }} onClick={openModal} className="btn btn-brand text-uppercase mt-2">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    )
}
export default BookingCard;