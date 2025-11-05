import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState } from "react";


export default function SearchBox( {updateInfo} ) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL ="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY ="8c409a787200d9066ab6d8a1d9a738fa";

    let getWeatherInfo = async () =>{
        try{
            const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result={
            Feels_Like : jsonResponse.main.feels_like,
            Ground_Level : jsonResponse.main.grnd_level,
            Humidity : jsonResponse.main.humidity,
            Pressure : jsonResponse.main.pressure,
            Temperature : jsonResponse.main.temp,
            Max_Temp : jsonResponse.main.temp_max,
            Min_Temp : jsonResponse.main.temp_min,
            weather : jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
        }

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) =>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
         let newInfo =await getWeatherInfo();
         updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    };


    return (
        <div className="SearchBox">
        
        <form onSubmit={handleSubmit}>
            <h3>Search for the Weather</h3>
            <br />
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange}
            />
            <br /><br />
            <Button 
            variant="contained" 
            type="submit" 
            >
                Search
            </Button>
            {error && <p style={{color:'red'}}> No Such place exists!</p>}
        </form>
        </div>
    );
}