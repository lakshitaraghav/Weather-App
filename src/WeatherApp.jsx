import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({city: "delhi",
    feelslike:  37.05,
    humidity:94,
    temp:30.05,
    tempMax:30.05,
    tempMin:30.05,
    weather:"mist",});

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
        
return(
    <>  
     <div style={{textAlign:"center"}}>
    <h2>WEATHER APP</h2></div>
    <SearchBox updateInfo ={updateInfo}/>
    <InfoBox info ={weatherInfo}/>
 
        </>
)
}