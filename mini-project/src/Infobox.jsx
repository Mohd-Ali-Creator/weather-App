import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";



export default function InfoBox( {info} ){
    // Handle case when info is not provided
    if (!info) {
        return (
            <div className="InfoBox">
                <h1>No Weather Data Available</h1>
            </div>
        );
    }

    let HOT_URL="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";
    let COLD_URL="https://images.unsplash.com/photo-1483664852095-d6b1c9203197?w=800&q=80";
    let RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80";
    
    // Determine which image to use based on weather conditions
    let imageUrl = COLD_URL;
    if (info.Humidity > 80) {
        imageUrl = RAIN_URL;
    } else if (info.Temperature > 15) {
        imageUrl = HOT_URL;
    }

    return (
        <div className="InfoBox">
            <h1>Weather Info: {info.weather || "N/A"}</h1>
             <div className="card-container">
              <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    alt="weather condition"
                    height="140"
                    image={imageUrl}
                  />
                  <CardContent>
                    <Typography 
                      gutterBottom variant="h5" 
                      component="div"
                    >
                      {info.city || "Unknown City"}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'text.secondary' }} 
                      component={"span"}
                    >
                      <p>Feels Like: {info.Feels_Like || "N/A"}&deg;C</p>
                      <p>Ground Level: {info.Ground_Level || "N/A"}</p>
                      <p>Humidity: {info.Humidity || "N/A"}%</p>
                      <p>Max Temp: {info.Max_Temp || "N/A"}&deg;C</p>
                      <p>Min Temp: {info.Min_Temp || "N/A"}&deg;C</p>
                      <p>Pressure: {info.Pressure || "N/A"}</p>
                      <p>Temperature: {info.Temperature || "N/A"}&deg;C</p>
                      <p>Weather: {info.weather || "N/A"}</p>
                    </Typography>
                  </CardContent>
                </Card>
             </div>
        </div>
    );
}