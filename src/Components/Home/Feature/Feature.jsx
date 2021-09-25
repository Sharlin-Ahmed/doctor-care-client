import React from 'react'
import featureImg from '../../../images/featureImg.png'
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
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam id facere illo facilis iure libero praesentium voluptas porro. Maxime iste mollitia dicta culpa tempora numquam, unde provident est recusandae magni sed excepturi eligendi dolore, aspernatur voluptates molestiae quae possimus! Aliquid odit ducimus nisi! Excepturi alias nemo at aliquam, nisi aspernatur!</p>

                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feature;