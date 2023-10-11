import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WeatherContainer = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = (temp) => {
    if (isCelsius) {
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return `${celsiusTemp}°C`;
    } else {
      const fahrenheitTemp = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
      return `${fahrenheitTemp}°F`;
    }
  };

  const handleChangeUnit = () => {
    setIsCelsius(!isCelsius);
  };

  //console.log(changeUnitTemp(weather.unit.temp))

  //console.log(weather);
  return (
    <section className="text-center gap-5 grid">
      <h3 className="text-xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h3>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        {/* seccion superior*/}
        <article className="bg-[#e0e0e080] rounded-2xl grid grid-cols-2 items-center p-3">
          <h4 className="col-span-2 text-lg capitalize">
            {weather.weather[0].description}
          </h4>
          <span className="text-5xl ">{changeUnitTemp(weather.main.temp)}</span>
          <picture>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </picture>
        </article>

        {/* seccion inferior*/}
        <article className="grid grid-cols-3 justify-items-center bg-[#e0e0e080] rounded-2xl p-2 py-3 sm:grid-cols-1">
          <WeatherStat
            icon="/mdi_weather-windy.png"
            unit="m/s"
            value={weather.wind.speed}
          />
          <WeatherStat
            icon="/tabler_arrow-wave-right-down.png"
            unit="%"
            value={weather.main.humidity}
          />
          <WeatherStat
            icon="/uil_raindrops-alt.png"
            unit="hPa"
            value={weather.main.pressure}
          />
        </article>
      </div>

      <button
        onClick={handleChangeUnit}
        className="bg-blue-500 w-40 m-[0_auto] rounded-full text-base font-semibold py-1 active:scale-[.98] active:duration-75 hover:scale-[1.06] ease-out transition-all"
      >
        C° / F°
      </button>
    </section>
  );
};
export default WeatherContainer;
