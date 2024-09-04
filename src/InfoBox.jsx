import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import "./App.css";
export default function InfoBox({info}){
    let CARD_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL  = "https://images.unsplash.com/photo-1534723889935-a2564af843b9?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let SPRING_URL = "";
    // let SNOW_URL = "";
    return(
      
        <div className="InfoBox">
        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80
            ?RAIN_URL
            : info.temp >15
            ?HOT_URL
            :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Min temp = {info.tempMin}&deg;C</p>
         <p>Max temp = {info.tempMax}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Weather is <i>{info.weather}</i> and it feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}