import React from 'react'
import './BookingForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { submitAPI } from '../../utils/API';

function BookingForm(props) {
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState("17:00");
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState("birthday");
    const [policy, setPolicy] = React.useState(false);
    const navigate = useNavigate();

    const todayDate = new Date().toISOString().slice(0, 10);;

    const availableTimes = props.availableTimes;
    console.log("available", availableTimes)

    const dispatch = props.dispatch;

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
            <Link to='/'><button type='button' aria-label='Close on Click' className='close__button'>X</button></Link>
            <form className='app__booking__form' onSubmit={submitForm}>
                <div className="booking__form-input" aria-label='Choose Date'>
                    <label className='p__description' htmlFor='res-date'>Date</label>
                    <input type='date' defaultValue={date} min={todayDate} id='res-date' onChange={(e) => dateOnChange(e.target.value)}/>
                </div>
                <div className="booking__form-input">
                    <label className='p__description' htmlFor='res-time' aria-label='Choose Time'>Time</label>
                    <select id='res-time' onChange={(e) => setTime(e.target.value)}>
                        {availableTimes.times.map((element) => (
                            <option value={element} key={element}>{element}</option>
                        ))}
                    </select>
                </div>
                <div className="booking__form-input" id='booking-guests' aria-label='Choose Guests'>
                    <label className='p__description' htmlFor='res-guests'>Guests</label>
                    <input type='number' defaultValue='1' min='1' max='10' id="res-guests" onChange={(e) => setGuests(e.target.value)}/>
                </div>
                <div className="booking__form-input" aria-label='Choose Oscasion'>
                    <label className='p__description' htmlFor='res-occasion'>Occasion</label>
                    <select id='res-occasion' onChange={(e) => setOccasion(e.target.value)}>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="date">Date</option>
                    </select>
                </div>
                <div className='booking__form-input' aria-label='Agree with booking policy'>
                    <label className='p__description' htmlFor='res-policy'>I accept the booking policy.</label>
                    <input type='checkbox' id='res-policy' onChange={(e) => setPolicy(e.target.checked)}/>
                </div>
            <input className='custom__button' type='submit' disabled={!policy} title={policy ? '' : 'Please, accept our booking policy.'} value='Make Your reservation' aria-label='Submit Button'/>
            </form>
        </div>
    )
}

export default BookingForm