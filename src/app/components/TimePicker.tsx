import React, { useState } from "react";

export const TimePicker = () => {
  const [ampm, setAmpm] = useState<string>("am");
  const [hours, setHours] = useState<string>("1");
  const [minutes, setMinutes] = useState<string>("0");

  const handleTimeChange = () => {
    const selectedTime = `${ampm}: ${hours}:${minutes} `;
    console.log(selectedTime);
  };

  return (
    <div className="w-40 bg-white rounded-lg shadow-l text-l align-middle">
      <div className="flex">
        <select
          name="ampm"
          className="bg-transparent appearance-none outline-none mr-4"
          onChange={(e) => {
            setAmpm(e.target.value);
            handleTimeChange();
          }}
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
        <select
          name="hours"
          className="bg-transparent appearance-none outline-none"
          onChange={(e) => {
            setHours(e.target.value);
            handleTimeChange();
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">10</option>
          <option value="12">12</option>
        </select>
        <span className="mr-3">:</span>
        <select
          name="minutes"
          className="bg-transparent appearance-none outline-none"
          onChange={(e) => {
            setMinutes(e.target.value);
            handleTimeChange();
          }}
        >
          <option value="0">00</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};
