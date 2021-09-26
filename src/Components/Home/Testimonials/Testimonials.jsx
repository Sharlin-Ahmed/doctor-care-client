import React from 'react';
import Testimonial from '../Testimonial/Testimonial.jsx';
import './Testimonials.css';
import person1 from '../../../images/person1.png';
import person2 from '../../../images/person2.png';
import person3 from '../../../images/person3.png';
const testimonialsData = [
    {    
        qoute : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  inventore reprehenderit suscipit eum dicta deleniti veniam nam odio perferendis officiis.',
        name : 'Wilson Hanrry',
        from : 'New York',
        img : person1
    },
    {
        qoute : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  inventore reprehenderit suscipit eum dicta deleniti veniam nam odio perferendis officiis.',
        name : 'Ema Gomer',
        from : 'Califonia',
        img : person2
    },
    {
        qoute : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  inventore reprehenderit suscipit eum dicta deleniti veniam nam odio perferendis officiis.',
        name : 'Aliza Farari',
        from : 'New York',
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
                    <div className="d-flex justify-content-betwee">
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