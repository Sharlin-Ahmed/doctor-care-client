import React from 'react'
import doctor1 from '../../../images/dr1.jpg'
import doctor2 from '../../../images/dr2.jpg'
import doctor3 from '../../../images/dr3.jpg'
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const doctorData = [
        {
            pic : doctor1,
            name : 'Dr. Jasmin Chowduray',
            spcialization : "Pediatric Dentist",
            number : '+880 1777 545-545'
        },
        {
            pic : doctor2,
            name : 'Dr. Faruk Abedin',
            spcialization : "Oral and Maxillofacial Surgeon",
            number : '+880 1888 545-545'
        },
        {
            pic : doctor3,
            name : 'Dr. Saleh Ahmed',
            spcialization : "Orthodontist",
            number : '+880 1999 545-545'
        },
    ] 
    return (
        <section className='doctors'>
            <div className="container">
                <h5 className="text-center text-uppercase text-primary mb-3">Our Doctors</h5>
                <h1 className="text-center pb-md-5 pb-2">Meet Ours Best Doctors</h1>
                <div className="row">
                    {
                        doctorData.map(doctor => <Doctor data={doctor}/>)
                    }
                </div>
            </div>    
        </section>
    )
}
export default Doctors;