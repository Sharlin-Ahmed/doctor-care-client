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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum, corporis quas repellendus quaerat quam corrupti ipsum asperiores voluptate sint!</p>

                        <button className='btn btn-primary mt-3'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MakeAppointment;