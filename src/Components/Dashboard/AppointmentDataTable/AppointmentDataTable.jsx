import React from 'react';
const AppointmentDataTable = ({appointments}) => {
    return(
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Age</th>
                    <th className="text-secondary" scope="col">Weight</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>

            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.data.name}</td>
                        <td>{appointment.data.gender}</td>
                        <td>{appointment.data.age}</td>
                        <td>{appointment.data.weight}KG</td>
                        <td>{appointment.data.phone}</td>
                        <td>{appointment.data.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}
export default AppointmentDataTable;