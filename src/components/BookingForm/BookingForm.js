import React from 'react'
import './BookingForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { submitAPI } from '../../utils/API';

function BookingForm(props) {
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState("17:00");
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState("birthday");
    const navigate = useNavigate();

    const todayDate = new Date().toISOString().slice(0, 10);;

    const availableTimes = props.availableTimes;
    console.log("available", availableTimes)

    const dispatch = props.dispatch;

    const timeOnChange = (newTime) => {
        setTime(newTime)
        dispatch({ type: 'UPDATE_TIMES', payload: newTime})
        console.log(newTime, "SENDDDD")
    }

    const dateOnChange = (newDate) => {
        setDate(newDate)
        dispatch({ type: 'UPDATE_TIMES', payload: newDate})
        console.log(newDate, "SENDDDD")
    }

    const submitForm = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        const check = submitAPI(formData);
        console.log(check, formData)
        if (check) {
            navigate('./success', {state: {date: date, time: time, guests: guests, occasion: occasion}});
        }
    }

    React.useEffect(() => {
        setDate(todayDate)
    }, [])

    return (
        <div className='app__booking' >
            <Link to='/'><button type='button' className='close__button'>X</button></Link>
            <form className='app__booking__form' onSubmit={submitForm}>
                <div className="booking__form-input">
                    <label className='p__description' htmlFor='res-date'>Date</label>
                    <input type='date' defaultValue={date} min={todayDate} id='res-date' onChange={(e) => dateOnChange(e.target.value)}/>
                </div>
                <div className="booking__form-input">
                    <label className='p__description' htmlFor='res-time'>Time</label>
                    <select id='res-time' onChange={(e) => timeOnChange(e.target.value)}>
                        {availableTimes.times.map((element) => (
                            <option value={element} key={element}>{element}</option>
                        ))}
                    </select>
                </div>
                <div className="booking__form-input" id='booking-guests'>
                    <label className='p__description' htmlFor='res-guests'>Number of Guests</label>
                    <input type='number' defaultValue='1' min='1' max='10' id="res-guests" onChange={(e) => setGuests(e.target.value)}/>
                </div>
                <div className="booking__form-input">
                    <label className='p__description' htmlFor='res-occasion'>Occasion</label>
                    <select id='res-occasion' onChange={(e) => setOccasion(e.target.value)}>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="date">Date</option>
                    </select>
                </div>
            <input className='custom__button' type='submit' value='Make Your reservation'/>
            </form>
        </div>
    )
}

export default BookingForm