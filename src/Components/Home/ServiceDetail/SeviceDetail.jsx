import React from 'react'
const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="my-3">{service.name}</h5>
            <p className="text-secondary lead">{service.treatmentDetails}</p>
        </div>
    )
}
export default ServiceDetail;