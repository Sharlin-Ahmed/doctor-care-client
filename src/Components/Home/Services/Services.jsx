import React from 'react'
import ServiceDetail from '../ServiceDetail/SeviceDetail';
import Fluride from '../../../images/fluride.png'
import Cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'
const serviceData = [
    {
        name: 'Root Canal Treatment',
        img: Fluride,
        treatmentDetails: 'Root canal treatment is a dental procedure that replaces a tooth’s damaged or infected pulp with a filling. '
    },
    {
        name: 'Cavity Filling',
        img: Cavity,
        treatmentDetails: 'Cavity fillings treatment, also called dental fillings or tooth fillings, are most commonly used to fill minor cavities.'
    },
    {
        name: 'Teath Whitiening',
        img: Whitening,
        treatmentDetails: 'Strawberries are known to have malic acid and vitamin c in them which are both useful for teeth whitening for looking good.'
    },
]
const Services = () => {
    return (
        <div className="services-container mt-5" id='service'>
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default Services;