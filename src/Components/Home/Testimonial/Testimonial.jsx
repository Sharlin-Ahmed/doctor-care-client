import React from 'react';
const Testimonial = (props) => {
    const {qoute,img,name,from} = props.testimonial;
    return (
        <div className="col-md-4">
            <div className="card shadow-sm">
            <div className="card-body my-5">
                <p className="card-text text-center">{qoute}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img src={img} alt="" className='img-fluid mx-3 rounded' width="60"/>
                <div className='text-center'>
                    <h6 className='text-primary'>{name}</h6>
                    <p className='m-0'>{from}</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Testimonial;