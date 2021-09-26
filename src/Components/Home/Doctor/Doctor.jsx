import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
const Doctor = (props) => {
    const {pic, name, number} = props.data
    return (
        <div className='col-md-4 text-center'>
            <img src={pic} alt="" className='img-fluid mb-3'/>
            <div className="container">
                <h4 className="text-center text-primary mb-3">{name}</h4>
                <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>{number}</p>
            </div>    
        </div>
    )
}
export default Doctor;