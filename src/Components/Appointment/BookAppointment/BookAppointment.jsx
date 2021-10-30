import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        doctorName: 'Dr. Miran Uddin',
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        doctorName: 'Dr. Khondokar Imam',
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        doctorName: 'Dr. Md. Jaforulla Khan',
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        doctorName: 'Dr. Abdul Ahmed',
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        doctorName: 'Dr. Saleh Jaman',
        subject: 'Teeth Scaling',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        doctorName: 'Dr. Sajib Chowdhori',
        subject: 'Teeth Root canals',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]
const BookAppointment = ({date}) => {
    return (
        <section className='my-5'>
            <h2 style={{color: '#1cc7c1'}} className="text-center my-5">Available Appointment on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard date={date} booking={booking} key={booking.id}/>)
                }
            </div>
        </section>
    )
}
export default BookAppointment;