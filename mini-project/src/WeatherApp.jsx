import SearchBox from "./SearchBox";
import Infobox from "./Infobox";    
import { useState } from "react";


export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo] =useState({
        city: "Lucknow",
        Feels_Like : 19.56,
        Ground_Level : 996,
        Humidity : 100,
        Max_Temp : 18.99,
        Min_Temp : 18.99,
        Pressure : 1010,
        Temperature : 18.99,
        weather : "mist"
    });
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h1 style={{textAlign : 'center'}}>Weather App By Mohd Ali Khan</h1>
            <SearchBox updateInfo={updateInfo} />
            <Infobox info={weatherInfo}/>
        </div>
    );
}