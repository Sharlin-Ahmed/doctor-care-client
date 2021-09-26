import React from 'react'
import ServiceDetail from '../ServiceDetail/SeviceDetail';
import Fluride from '../../../images/fluride.png'
import Cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'
const serviceData = [
    {
        name: 'Fluride Treatment',
        img : Fluride
    },
    {
        name: 'Cavity Filling',
        img : Cavity
    },
    {
        name: 'Teath Whitiening ',
        img : Whitening
    },
]
const Services = () => {
    return (
        <div className="services-container mt-5" id='service'>
            <div className="text-center">
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}/>)
                }
            </div>
        </div>
        </div>
    )
}
export default Services;