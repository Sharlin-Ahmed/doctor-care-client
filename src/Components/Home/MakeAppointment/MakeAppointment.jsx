import React from 'react'
import doctorImg from '../../../images/doctorImg.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctorImg} alt="pic" className="img-fluid" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-uppercase">Appointment</h5>
                        <h1 className="my-4">Make an appointment <br /> Today</h1>
                        <p>Doctor Care. If your teeth are missing, decayed, weakened or fractured, you might need a dental restoration. See your dentist if you’re having any problems with your teeth. For Booking.</p>
                        <h1 className="my-3">Call : +099-666-999</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MakeAppointment;