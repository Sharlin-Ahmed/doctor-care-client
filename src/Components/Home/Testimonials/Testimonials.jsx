import React from 'react';
import Testimonial from '../Testimonial/Testimonial.jsx';
import './Testimonials.css';
import person1 from '../../../images/tP1.jpg';
import person2 from '../../../images/tP2.jpg';
import person3 from '../../../images/tP4.jpg';
const testimonialsData = [
    {    
        qoute : '"Life after treatment is just great because I no longer have to worry about an ill-fitting denture and I can eat without thinking."',
        name : 'Rajib Saha',
        from : 'Kandirpar, Cumilla',
        img : person1
    },
    {
        qoute : '"When I first saw my smile I felt really confident that everything had gone really well because my tooth looked just as it had before."',
        name : 'Jamal Islam',
        from : 'Cantonment, Cumilla',
        img : person2
    },
    {
        qoute : '"What I love to do is play a small role in patients’ lives – not just their mouths – and to be able to give them their confidence back"',
        name : 'Faizul Abedin',
        from : 'Rajgong, Cumilla',
        img : person3
    },
]
const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5" id="review">
            <div className="container">
                <div className="section-header my-3">
                    <h5 className="text-primary text-uppercase">Testimonials</h5>
                    <h1>What Our Patients <br /> Says</h1>
                </div>
                <div className="row card mt-5">
                    <div className="d-flex justify-content-between">
                    {
                        testimonialsData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials;