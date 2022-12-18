import React from 'react'

import './CarriageInfo.css'

type CarriageInfoPropsType = {
    departureDate?: string,
    departureTime?: string,
    departureCity?: string,
    departureStation?: string,
    arrivalDate?: string,
    arrivalTime?: string,
    arrivalCity?: string,
    arrivalStation?: string,
    currentTimeOnWay?: string,
    percentageOfCompletion?: number,
    timeBeforeArriving?: string,
}
const CarriageInfo = (props: CarriageInfoPropsType) => {
  return (
    <div className='container CarriageInfo_container'>
        <div className='departureInfo'>
            <h4 className='departureDate text-font'>20 дек. вт.</h4>
            <h3 className='departureTime header-font'>12:40</h3>
            <p className='departureCity desc-font'>Москва</p>
            <p className='departureStation desc-font'>ст. Ясная</p>
        </div>
        <div className='timeBeforeArriving'>
        <p className='currentTimeOnWay desc-font'>8 дней 2 часа</p>
        <div className='percentageOfCompletion_mainline'><div className='percentageOfCompletion_progress'></div></div>
        <p className='timeBeforeArriving desc-font'>Прибудет через <span style={{color: "#8A2432"}} className='info-colored desc-font'>1 день и 8 часов</span></p>

        </div>
        <div className='arrivalInfo'>
            <h4 className='arrivalDate text-font'>20 дек. вт.</h4>
            <h3 className='arrivalTime header-font'>12:40</h3>
            <p className='arrivalCity desc-font'>Москва</p>
            <p className='arrivalStation desc-font'>ст. Ясная</p>
        </div>
    </div>
  )
}

export default CarriageInfo