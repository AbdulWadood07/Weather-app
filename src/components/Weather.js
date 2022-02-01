import React, { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {
  const [city, setcity] = useState(null);
  const [search, setSearch] = useState("karachi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7edca52e9ff1dfeb3784d3717b9dde53`;
      const response = await fetch(url);
      const resJson = await response.json();
      setcity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="body">
      <div className="box">
        <div className="bg-img">
          <div className="inputData">
            <input
              type="search"
              className="inputField"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            </div>
          {!city ? (
            <p className="errorMsg">No data Found</p>
          ): (

          <div className="main-box">

            <div className="city-name">
              <h3>{search}</h3>
            </div>
            <div className="city-temp">
              <h1>{city.temp}</h1>
            </div>
            <div className="min-max">
              <div className="max">
                <h2>{city.temp_max} </h2>
                <h3>max </h3>
              </div>
              <div className="min">
                <h2>{city.temp_min} </h2>
                <h3>min </h3>
              </div>
            </div>
          </div>
          
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
