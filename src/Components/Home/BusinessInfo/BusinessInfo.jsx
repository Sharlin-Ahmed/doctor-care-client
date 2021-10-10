import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const infosData = [
    {
        title : "Opening Hours",
        description : "We are open 7 days",
        icon : faClock,
        backgroundColor : `primary`
    },
    {
        title : "Visits ours location",
        description : "Kandirpar Rajgong road 32/A",
        icon : faMapMarker,
        backgroundColor : `dark`
    },
    {
        title : "Call us now",
        description : "+880 1564-254-256",
        icon : faPhoneAlt,
        backgroundColor : `primary`
    },
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}/>)
                }
            </div>
        </section>
    )
}         
export default BusinessInfo;