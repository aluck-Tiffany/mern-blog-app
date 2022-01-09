import { useState } from 'react'

import './weather-test.css'
export default function WeatherTest() {

    const apiKey = 'dd60782b776a892e503a3cc859d40439'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = event => {
        if (event.key === "Enter") {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setWeatherData(data)
                    setCity("")
                })
        }
    }
    return (
        <div className='container'>
            <input className='input'
                placeholder='Enter city...'
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getWeather}
            />
            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <br></br>
                    <p >Welcome to weather Component!
                        Enter in a city to get the weather of.
                    </p>
                </div>
            ) : (
                // T(°C) = T(K) - 273.15
                <div className='weather-data'>
                    <p className='city'>{weatherData.name}</p>
                    <p className='temp'>{(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
                    {/* <p >{Math.round(weatherData.main.temp)}°K</p> */}
                    <p className='weather'>{weatherData.weather[0].main}</p>
                </div>
            )}
            {weatherData.cod === "404" ? (
                <p>City not found.</p>
            ) : (
                <></>
            )}
        </div>
    )
    // https://www.youtube.com/watch?v=rtR4s626ebE
}
