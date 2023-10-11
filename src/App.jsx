import { useEffect } from "react";
import "./App.css";
import axios from "axios";
//import { data } from "autoprefixer";
import { useState } from "react";
import WeatherContainer from "./components/WeatherContainer";
import Load from "./components/Load";

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "9c8b2ae9e910cf6cb7d6368e7f44329a";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data)).catch;
    (err) => console.log(err);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen px-2 bg-[url("/paradaise.jpeg")] bg-cover bg-center'>
      {weather === null ? (
        <Load />
      ) : (
        <WeatherContainer weather={weather} />
      )}
    </main>
  );
}

export default App;
