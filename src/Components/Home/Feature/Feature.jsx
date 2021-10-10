import React from 'react'
import featureImg from '../../../images/featurePic3.png'
const Feature = () => {
    return (
        <section className='feature-service pb-0 pb-md-5 my-5'>
            <div className='container'>
                <div className='row mb-5'>
                    <div className="col-md-5 mb-4">
                        <img src={featureImg} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Term.</h1>
                        <p className="text-secondary my-5 lead">Your dentist can suggest various treatments to restore damaged teeth. These treatments help restore the appearance, shape and function of your teeth. They include: bonding – chipped, gapped, discoloured or oddly shaped teeth can be treated with bonding. A tooth-coloured resin filling is applied to achieve a more regular look to the affected tooth.</p>

                        <button style={{backgroundColor : '#1cc7c1', fontWeight : '600'}} className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feature;