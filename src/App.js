// import Nav from './Nav'
import WeatherApp from './Componant/WeatherApp/Component.js'

const App = () => {

  // const API_KEY  = "637e6bd9ed9a3fc6f194c6d3e54920e5"

   
  //       const search = async () =>{

  //       const [searchValue, setSearchValue] = useState("");
  //       const element = document.getElementsByClassName("cityInput")
  //       if(element[0].value === "" )
  //           {
  //               return 0;
  //           }

  //       let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`

  //       let response = await fetch(url);
  //       let data = await response.json(); 
        
        
  //       const humidity = document.getElementsByClassName('humidity-percent')
  //       const wind = document.getElementsByClassName('wind')
  //       const temp = document.getElementsByClassName('weather-temp')
  //       const location = document.getElementsByClassName('weather-location')

  //       humidity[0].innerHTML =data.main.humidity+"%"
  //       wind[0].innerHTML =data.wind.speed+"km/h" 
  //       temp[0].innerHTML =data.main.temp+"°C"
  //       location[0].innerHTML = data.name

  //   }


  return (
      <WeatherApp 
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />
    )
}

export default App