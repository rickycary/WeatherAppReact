import React from "react"

const WeatherForecast = ({
  img,

  day, 

  conditions,
  
  time
}) => {
  return (
    // Classname weather to link to CSS
    <div className = "weather">

    <img src = {img} alt="weather icon" />

    <p> Today is <span day /> {day} and it will be a 
    <span conditions time /> {conditions} {time}!</p>

    </div>
  )
}

export default WeatherForecast