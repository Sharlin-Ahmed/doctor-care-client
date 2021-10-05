import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.service = appointmentOn;
        data.appointmentDate = date.toDateString()
        data.created = new Date()

        fetch('https://afternoon-waters-72934.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(success => {
            if(success){
              console.log(success)  
            }
        })
        alert("Your Appoinment Successfully Submited")
        closeModal()
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 style={{color: '#1cc7c1'}} className="text-center">{appointmentOn}</h2>
                
                <h5 className="text-secondary text-center">{date.toDateString()}</h5>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-group my-3">
                            <input type="text" {...register('name', { required: true })} name="name" placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group my-3">
                        <input type="text" {...register('email', { required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group my-3">
                        <input type="text" {...register('phone', { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>


                    <div className="form-group row my-3">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register('gender', { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input {...register('age', { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input {...register('weight', { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group d-flex justify-content-end">
                        <button type="submit" style={{backgroundColor: '#1cc7c1'}} className="btn">Send</button>
                    </div>

                </form>
            </Modal>
        </div>
    )
}
export default AppointmentForm;