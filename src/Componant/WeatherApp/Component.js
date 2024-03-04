
import './WeatherApp.css'
import { FaSearchLocation } from "react-icons/fa";


const WeatherApp = () => {

    // const [windIcon, setWindIcon] = useState(cloud_icon);

    const API_KEY  = "637e6bd9ed9a3fc6f194c6d3e54920e5"

   
        const search = async () =>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === "" )
            {
                return 0;
            }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`

        let response = await fetch(url);
        let data = await response.json(); 
        
        
        const humidity = document.getElementsByClassName('humidity-percent')
        const wind = document.getElementsByClassName('wind')
        const temp = document.getElementsByClassName('weather-temp')
        const location = document.getElementsByClassName('weather-location')

        humidity[0].innerHTML =data.main.humidity+"%"
        wind[0].innerHTML =data.wind.speed+"km/h" 
        temp[0].innerHTML =data.main.temp+"°C"
        location[0].innerHTML = data.name

    }
    // } catch (error) {
    //   console.log(error.message)
    // }

  return (
        <div className="Container">
           <div className="top-bar">
           <input className="cityInput" placeholder='Search Country' />
            <div className="searchIcon">
            <FaSearchLocation 
            className='searchIcon'
            onClick={search}/>
            </div>
           </div>
           <div className="weather-image">
             <img src='https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=' alt="rain Icon" />
           </div>            
            <div className="weather-temp">24c</div>
            <div className="weather-location">London</div>
            <div className="weather-container">
            <div className="element">
                    <img src="https://banner2.cleanpng.com/20180516/ajw/kisspng-computer-icons-humidity-moisture-clip-art-5afbd0099c4508.6547128615264522336401.jpg" alt="humidity Icon" />
                    <div className="data">
                        <div className="humidity-percent">
                            64%
                        </div>
                        <div className="text">
                            Humidity
                        </div>
                    </div>
                </div>
                <div className="element">
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Window Icon" />
                    <div className="data">
                        <div className="wind">
                            18 km 
                        </div>
                        <div className="text">
                           Wind Speed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp