import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import SearchBox from "./SearchBox.jsx"



export default function InfoBox( {info} ){
let HOT_URL="https://www.bing.com/images/search?view=detailV2&ccid=Wc3GSkdD&id=F4E48D133B9A4F1E83387C758EBDA18F6D3A5D4E&thid=OIP.Wc3GSkdDJCWnJOfhh5lTjwHaE8&mediaurl=https%3a%2f%2fimages.caxton.co.za%2fwp-content%2fuploads%2fsites%2f144%2f2023%2f01%2fHot-Weather.jpg&exph=1000&expw=1500&q=hot+weateher&FORM=IRPRST&ck=2944E0E85AB2F2E1492D226F720A5E16&selectedIndex=1&itb=0";
let COLD_URL="https://tse4.mm.bing.net/th/id/OIP.Eat3XguFLV8ivkICw1xfzwHaE7?w=1280&h=853&rs=1&pid=ImgDetMain&o=7&rm=3";
let RAIN_URL="https://www.bing.com/images/search?view=detailV2&ccid=9E0c01lp&id=13D74EA61CBFCF852EE66B6C6EF0788F3F796315&thid=OIP.9E0c01lpsVRnyy7SwjYXwgHaEK&mediaurl=https%3a%2f%2fs7d2.scene7.com%2fis%2fimage%2fTWCNews%2fweather_rain_umbrellawalkingjpg&exph=720&expw=1280&q=rsainweateher&FORM=IRPRST&ck=43181CA7A4E4F189C2D9869DBAAFDADC&selectedIndex=36&itb=0";
    return (
        <div className="InfoBox">
            <h1>Weather Info {info.weather}</h1>
             <div className="card-container">
              <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL :info.temp > 15 ? HOT_URL :COLD_URL}
      />
      <CardContent>
        <Typography 
        gutterBottom variant="h5" 
        component="div"
        >
          {info.city}
        </Typography>
        <Typography 
        variant="body2" 
        sx={{ color: 'text.secondary' }} 
        component={"span"}
        >
        <p> Feels_Like : {info.Feels_Like}</p>
        <p> Ground_Level : {info.Ground_Level}</p>
        <p> Humidity : {info.Humidity}</p>
        <p> Max_Temp : {info.Max_Temp}&deg;C</p>
        <p> Min_Temp : {info.Min_Temp}&deg;C</p>
        <p> Pressure : {info.Pressure}</p>
        <p> Temperature : {info.Temperature}&deg;C</p>
        <p> Weather : {info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
             </div>
        </div>
    );
}