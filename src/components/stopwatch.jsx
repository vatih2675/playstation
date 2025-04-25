"use client"
import React, { useEffect, useState, useRef } from "react";
import StopwatchButton from "./stopwatchButton";

const Stopwatch = ({ billing, ps, category, price }) => {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const [color, setColor] = useState("");
  const jam = 60 * 60 * 1000;
  const [timeSelect, setTimeSelect] = useState(0);
  const handleChangeTimeSelect = (e) => {
    setTimeSelect(e.target.value);
  };

  let timeDisplay;

  if (timeSelect < 1) {
    timeDisplay = time();
  } else {
    timeDisplay = timeDecrease();
  }

  useEffect(() => {
    if (running) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [running]);

  function start() {
    setRunning(true);
    setColor("text-blue-600");
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setRunning(false);
    setColor("text-red-600");
  }

  function finish() {
    setElapsedTime(0);
    setRunning(false);
    setColor("");
    setTimeSelect(0);
  }

  function time() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // return `${hours}:${minutes}:${seconds}:${milliseconds}`
    return `${hours}:${minutes}:${seconds}`;
  }

  // if (elapsedTimeDecrease < 1) {
  //   setRunning(false);
  //   setElapsedTime(0);
  //   setColor("text-red-600");
  //   elapsedTimeDecrease = 0;
  // }

  function timeDecrease() {
    let elapsedTimeDecrease;
    elapsedTimeDecrease = jam * timeSelect - elapsedTime;
    // elapsedTimeDecrease = (3000) - elapsedTime;
    if (elapsedTimeDecrease < 1) {
      setRunning(false);
      setElapsedTime(0);
      setColor("text-red-600");
      elapsedTimeDecrease = 0;
    }
    // elapsedTimeDecrease = (3000) - elapsedTime;
    let hours = Math.floor(elapsedTimeDecrease / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTimeDecrease / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTimeDecrease / 1000) % 60);
    let milliseconds = Math.floor((elapsedTimeDecrease % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // return `${hours}:${minutes}:${seconds}:${milliseconds}`
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatPrice(price) {
    return `Rp${parseInt(price).toLocaleString("id-ID")}`;
  }

  function currentPrice(price) {
    const priceperjam = price / jam;
    return `Rp${Number((priceperjam * elapsedTime).toFixed()).toLocaleString(
      "id-ID"
    )}`;
    // return jam - elapsedTime;
    // return `Rp ${parseInt(0).toLocaleString("id-ID")}`;
  }

  let categoryColor = null;

  switch (category) {
    case "Standar":
      categoryColor = "bg-gray-300";
      break;

    case "Premium":
      categoryColor = "bg-green-300";
      break;

    default:
      categoryColor = "bg-yellow-300";
      break;
  }

  return (
    <div className="p-1 w-1/4">
      <div className="bg-white shadow-md p-4 cursor-default w-full">
        <div className="w-full flex justify-between items-start m-0">
          <div className="flex flex-col justify-start items-start">
            <h2 className="font-bold text-xl text-center m-0 flex justify-start items-center gap-1">
              {ps}{" "}
              <span
                className={`text-[0.6rem] px-1 rounded-r-full rounded-l-full ${categoryColor}`}
              >
                {category}
              </span>
            </h2>
            <span className="text-sm">{formatPrice(price)}/Jam</span>
          </div>
          <div className="flex flex-col justify-center items-end">
            <h2 className="font-bold text-xl text-end m-0">Billing {billing}</h2>
            <span className={`text-sm text-end ${color}`}>
              {currentPrice(price)}
            </span>
          </div>
        </div>
        <h1
          className={`w-full font-mono text-[3.7rem] font-bold text-center ${color}`}
        >
          {timeDisplay}
        </h1>
        <form
          action=""
          className={`w-full ${
            elapsedTime > 0 ? "pointer-events-none" : "pointer-events-auto"
          } flex justify-center items-center gap-2 mb-4`}
        >
          <select
            onChange={handleChangeTimeSelect}
            name="timeSelect"
            id="timeSelect"
            className={`w-full px-2 py-1 border border-gray-300 focus:ring-0 focus:outline-1 focus:outline-green-400 focus:shadow-md ${
              elapsedTime > 0 ? "bg-gray-200 text-black/50" : ""
            }`}
            value={timeSelect}
          >
            <option value="0">Waktu Normal</option>
            <option value="1">1 Jam</option>
            <option value="2">2 Jam</option>
            <option value="3">3 Jam</option>
            <option value="4">4 Jam</option>
            <option value="5">5 Jam</option>
            <option value="6">6 Jam</option>
          </select>
          {/* <button className="w-fit px-2 py-1 bg-gradient-to-b from-green-400 to-green-500 hover:bg-gradient-to-t rounded-md cursor-pointer transition-all duration-300 hover:shadow-md text-black/70 hover:text-black text-sm"><i className="bi-check2-circle me-1"></i></button> */}
        </form>
        {/* {elapsedTime + (jam * timeSelect)} - {elapsedTimeDecrease} */}
        <div className="w-full flex justify-between items-center gap-1">
          <StopwatchButton
            click={start}
            title="Start"
            color={
              running
                ? "from-blue-400/30 to-blue-500/30 pointer-events-none cursor-none"
                : "from-blue-400 to-blue-500 pointer-events-auto cursor-pointer"
            }
            icon="play-fill"
          />
          <StopwatchButton
            click={stop}
            title="Stop"
            color={
              !running
                ? "from-red-400/30 to-red-500/30 pointer-events-none cursor-none"
                : "from-red-400 to-red-500 pointer-events-auto cursor-pointer"
            }
            icon="stop-fill"
          />
          <StopwatchButton
            click={finish}
            title="Finish"
            color={
              running || elapsedTime <= 0
                ? "from-gray-400/30 to-gray-500/30 pointer-events-none cursor-none"
                : "from-gray-400 to-gray-500 pointer-events-auto cursor-pointer"
            }
            icon="check2-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;