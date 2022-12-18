import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar.tsx";
import NavLogoIcon from "../../sources/nav_logo";
import background_b from "../../sources/MainpageBg.png";
import background_s from "../../sources/StartingBg.png";
import "./MainPage.css";
import CarriageInfo from "../../components/carriageInfo/CarriageInfo";

const MainPage = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  return (
    <div className="container mainpage_container">
      <div className="starting_mainpage">
        <div
          style={{ backgroundImage: `url(${background_s})` }}
          className="mainpage_header"
        >
          <div className="mainpage_navigation_section">
            <div className="mainpage_logo">
              <NavLogoIcon />
            </div>
            {/*<nav className='mainpage_navbar'>*/}
            {/*    <ul>*/}
            {/*      <li className='mainpage_navbar_item text-font'><Link to="/">Вагоны</Link></li>*/}
            {/*      <li className='mainpage_navbar_item text-font'><Link to="/contacts">Контакты</Link></li>*/}
            {/*      <li className='mainpage_navbar_item text-font'><Link to="/menu">Меню</Link></li>*/}
            {/*      <li className='mainpage_navbar_item mainpage_navbar_item_colored text-font'><Link to="/signin">Вход</Link></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
          </div>
          <section className="mainpage_main_block">
            <h1 className="mainpage_main_header header-font">
              HackWagon
              <br /> 2022
            </h1>
            <h2 className="mainpage_second_header subtitle-font">
              Отслеживай движение состава
            </h2>
          </section>
          <SearchBar onSubmit={() => setIsSubmited(true)} />
        </div>
      </div>
      {isSubmited ? (
        <section className="mainpage_infoSection">
          <CarriageInfo />
        </section>
      ) : null}
    </div>
  );
};

export default MainPage;
