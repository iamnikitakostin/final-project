import React from 'react'
import BookingForm from '../../components/BookingForm/BookingForm'
import { fetchAPI } from '../../utils/API';



function BookingPage() {

  const updateTimes = (state, selectedDate) => {
    const times = fetchAPI(new Date(selectedDate))
    return {...state, times};
  }

  const initializeTimes = () => {
    const date = new Date().toISOString().slice(0, 10);
    const times = fetchAPI(new Date(date));
    return { times };
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(state, action.payload);
      default:
        return state;
    }
  }

  const [availableTimes, dispatch] = React.useReducer(reducer, undefined, initializeTimes);


  return (
    <div className='app__bookingpage'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </div>
  )
}

export default BookingPage