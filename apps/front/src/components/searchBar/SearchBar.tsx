import React from "react";
import "./SearchBar.css";
import CalendarIcon from "../../sources/calendar";
import CalendarRedIcon from "../../sources/calendar_red";
import CircleRedIcon from "../../sources/circle_red";
import CircleRedBigIcon from "../../sources/circle_red_big";

type SearchBarPropsType = {
  onSubmit: () => {};
};
// const dateInput = document.querySelector("#date_input");

const SearchBar = (props: SearchBarPropsType) => {
  function showPopup() {
    const target = document.querySelector("#date_input") as HTMLInputElement;
    target.showPicker();
  }

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  const submit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.debug("---from", from);
      props.onSubmit();
    },
    [from]
  );

  const changeFrom = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFrom(e.currentTarget.value);
    },
    []
  );
  const changeTo = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTo(e.currentTarget.value);
    },
    []
  );

  return (
    <form className="searchbar_form" onSubmit={submit}>
      <div className="input_section">
        <div className="redCircle_wrapper_m">
          <CircleRedIcon />
        </div>
        <div className="redCircle_wrapper_d">
          <CircleRedBigIcon />
        </div>
        <input
          onChange={changeFrom}
          placeholder="Откуда"
          className="searchbar_departure_input"
          value={from}
          type="text"
        />
      </div>
      <div className="input_section">
        <div className="redCircle_wrapper_m">
          <CircleRedIcon />
        </div>
        <div className="redCircle_wrapper_d">
          <CircleRedBigIcon />
        </div>
        <input
          onInput={changeTo}
          placeholder="Куда"
          className="searchbar_destination_input"
          value={to}
          type="text"
        />
      </div>
      <input
        name="date_input"
        id="date_input"
        className="searchbar_date_input"
        type="date"
      />
      <label className="icon_m" htmlFor="date_input">
        <CalendarRedIcon />
      </label>
      <label
        onClick={() => {
          showPopup();
        }}
        htmlFor="date_input"
      >
        <CalendarIcon />
      </label>

      <button type="submit" className="form_submit_btn text-font">
        Найти
      </button>
    </form>
  );
};
export default SearchBar;
