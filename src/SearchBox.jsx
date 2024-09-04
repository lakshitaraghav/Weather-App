import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({updateInfo}) {
  let [city, setcity] = useState("");
  let [err, seterr] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "80b3da95a73758d251202aadb77e84fe";
 
  let getWeatherInfo = async() =>{
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      
      let result = {
        city : city,
        temp : jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelslike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }catch(err){
      throw err;
      // seterr("error");
    }
 
  }

  let handleChange = async (event) => {
   
      setcity(event.target.value);
  }
   
    let handleSubmit = async (event) => {
      try{
      event.preventDefault();
      console.log(city);
      setcity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    }catch(err){
      seterr(true);
    }
    
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="city"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="outlined" type="submit">
          Search
        </Button>
        {err && <p>error received</p> }
      </form>
    </div>
  );
}
