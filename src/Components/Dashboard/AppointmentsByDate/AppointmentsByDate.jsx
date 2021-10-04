import React from 'react';
// import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h3 className="text-center">AppointmentsByDate {appointments.length}</h3>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    )
}
export default AppointmentsByDate;