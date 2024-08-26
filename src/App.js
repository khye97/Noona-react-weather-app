import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox.js';
import WeatherButton from './component/WeatherButton.js';
import BeatLoader from "react-spinners/BeatLoader";


// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다 
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태가 보인다
// 3. 5개의 버튼이 있다 (현재 위치, 다른 도시 4개)
// 4. 도시 버튼을 클릭하면 도시별 날씨가 보인다 
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
// 6. 데이터를 로딩하는 동안 로딩 스피너가 보인다 


function App() {
  const API_KEY = '9536d22b2686e8fd7fe6505b7df9f1e2';
  const [weatherData, setWeatherData] = useState(null);
  let cities = ["Seoul", "New York", "Paris", "Tokyo"];
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (city == ""){
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity(city);
    }
  }, [city])

  function getCurrentLocation (){
    window.navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; // 위도
      let lon = position.coords.longitude; // 경도  
      getWeatherByCurrentLocation(lat, lon);
      setCity("");
    })
  }

  async function getWeatherByCurrentLocation (lat, lon){
    try {
      let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      console.log("현재위치", data);
      setWeatherData(data);
      setLoading(false);
    } catch (err) {
      setApiError(err.message);
      setLoading(false)
    }
    
    // fetch(url)
    // .then((response) => { return response.json() })
    // .then((data) => { console.log(data)})
  }

  async function getWeatherByCity (city){
    try {
      let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      console.log("위치버튼", data);
      setWeatherData(data);
      setLoading(false);
    } catch (err){
      setApiError(err.message);
      setLoading(false)
    }
    
  }

  function handleCityChange (city){
    if (city == "current"){
      setCity("");
    } else {
      setCity(city);
    }
  }

  return (
    <>
    { loading == true ? 
      <div className='wrap'>
        <BeatLoader loading={loading} size={15} color='#fff'/>
      </div> 
    : <div className='wrap'>
        <WeatherBox weatherData={weatherData} />
        <WeatherButton handleCityChange={handleCityChange} setCity={setCity} cities={cities} city={city} />
      </div> }
    </>
  );
}

export default App;
