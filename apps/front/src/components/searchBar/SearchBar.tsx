import React, {useRef} from 'react'
import "./SearchBar.css"
import CalendarIcon from '../../sources/calendar'
import CalendarRedIcon from '../../sources/calendar_red'
import CircleRedIcon from '../../sources/circle_red'
import CircleRedBigIcon from '../../sources/circle_red_big'
// import {ReactComponent as CalendarIcon} from '../../sources'
type SearchBarPropsType = {
    onClick: () => {},
    onSubmit: () => {},
    onInput: () => {},
}
const dateInput = document.querySelector('#date_input')
const SearchBar = (props: SearchBarPropsType) => {
  function showPopup() {
    const target = document.querySelector('#date_input') as HTMLInputElement
    target.showPicker()
  }
  const interviewDateRef = useRef();
    const handleInterviewDateClick = () => {
    // interviewDateRef.current.focus();
  };
  return (
    <form onClick={props.onClick} className='searchbar_form' onSubmit={(e) => {e.preventDefault(); props.onSubmit()}}>
        <div className='input_section'>
          <div className='redCircle_wrapper_m'><CircleRedIcon /></div>
          <div className='redCircle_wrapper_d'><CircleRedBigIcon /></div>
          <input onInput={props.onInput} placeholder='Откуда' className='searchbar_departure_input' type="text" />
        </div>
        <div className='input_section'>
          <div className='redCircle_wrapper_m'><CircleRedIcon /></div>
          <div className='redCircle_wrapper_d'><CircleRedBigIcon /></div>
          <input onInput={props.onInput} placeholder='Куда' className='searchbar_destination_input' type="text" />
        </div>
        <input onInput={props.onInput} name='date_input' id="date_input" className='searchbar_date_input' type="date" />
        <label className='icon_m' htmlFor="date_input"><CalendarRedIcon /></label>
        <label onClick={() => {showPopup()}} htmlFor="date_input"><CalendarIcon /></label>
    
        <button type="submit" className='form_submit_btn text-font'>Найти</button>
    </form>
  )
}
export default SearchBar