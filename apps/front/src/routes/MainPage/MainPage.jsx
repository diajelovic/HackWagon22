import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/searchBar/SearchBar.tsx'
import NavLogoIcon from '../../sources/nav_logo'
import background_b from "../../sources/MainpageBg.png";
import background_s from "../../sources/StartingBg.png";
import "./MainPage.css"
import CarriageInfo from '../../components/carriageInfo/CarriageInfo';
const MainPage = (props) => {
  const [isSubmited, setIsSubmited] = useState(false)
  return (
    <div className='container mainpage_container'>

      <div style={!isSubmited ? {position: "relative", transform: "translateY(0)", opacity: "1"}: {position: "absolute", transform: "translateY(-500%)", opacity: "0"}} className='starting_mainpage'>
        <div style={{ backgroundImage: `url(${background_s})` }} className='mainpage_header'>
          <div className='mainpage_navigation_section'>
            <div className='mainpage_logo'><NavLogoIcon /></div>
            <nav className='mainpage_navbar'>
                <ul>
                  <li className='mainpage_navbar_item text-font'><Link to="/">Вагоны</Link></li>
                  <li className='mainpage_navbar_item text-font'><Link to="/contacts">Контакты</Link></li>
                  <li className='mainpage_navbar_item text-font'><Link to="/menu">Меню</Link></li>
                  <li className='mainpage_navbar_item mainpage_navbar_item_colored text-font'><Link to="/signin">Вход</Link></li>
                </ul>
            </nav>
          </div>
          <section className='mainpage_main_block'>
            <h1 className='mainpage_main_header header-font'>HackWagon<br /> 2022</h1>
            <h2 className='mainpage_second_header subtitle-font'>Отслеживай движение состава</h2>
          </section>
          <SearchBar onSubmit={() => setIsSubmited(true)}></SearchBar>
        </div>
      </div>  



      <div style={isSubmited ? {position: "relative", transform: "translateY(0)", opacity: "1"}: {position: "absolute", transform: "translateY(-500%)", opacity: "0"}} className='responced_mainpage'>
        <div style={{ backgroundImage: `url(${background_b})` }} className='mainpage_header'>
          <div className='mainpage_navigation_section'>
            <div className='mainpage_logo'><NavLogoIcon /></div>
            <nav className='mainpage_navbar'>
                <ul>
                  <li className='mainpage_navbar_item text-font'><Link to="/">Вагоны</Link></li>
                  <li className='mainpage_navbar_item text-font'><Link to="/contacts">Контакты</Link></li>
                  <li className='mainpage_navbar_item text-font'><Link to="/menu">Меню</Link></li>
                  <li className='mainpage_navbar_item mainpage_navbar_item_colored text-font'><Link to="/signin">Вход</Link></li>
                </ul>
            </nav>
          </div>
          <SearchBar></SearchBar>
        </div>
        <section className='mainpage_infoSection'>
          <CarriageInfo></CarriageInfo>
        </section>
      </div>

    </div>
  )
}

export default MainPage