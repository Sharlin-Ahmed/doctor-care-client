import React from 'react'
import { useHistory } from "react-router-dom";
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    const history = useHistory();
    return (
        <div className="container">
            <main style={{ height: '580px' }} className='row d-flex align-items-center'>
                <div className='col-md-4 offset-md-1'>
                    <h1 style={{ color: '#3A4256' }}>Your New Smile <br /> Starts Here...</h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos earum qui sequi itaque velit!</p>
                    <button className='btn btn-primary' onClick={() => history.push("/appointment")}>Get Appointments</button>
                </div>
                <div className='col-md-6'>
                    <img src={chair} alt="" className='img-fluid' />
                </div>
            </main>
        </div>
    )
}
export default HeaderMain;