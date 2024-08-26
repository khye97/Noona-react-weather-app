function WeatherBox (props){
  console.log("컴포넌트 프롭스", props);
  
  return (
    <div className='weather-box'>
      <h3 className='city'>{props.weatherData && props.weatherData.name}</h3>
      <img className='icon' src={props.weatherData && `https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`} />
      <h1 className='main-temp'>{props.weatherData && props.weatherData.main.temp} &#8451;</h1>
      <h4 className='main-desc'>{props.weatherData && props.weatherData.weather[0].main}</h4>
      <h6 className='desc'>최고기온 | {props.weatherData && props.weatherData.main.temp_max} &#8451;</h6>
      <h6 className='desc'>최저기온 | {props.weatherData && props.weatherData.main.temp_min} &#8451;</h6>
      <h6 className='desc'>습도 | {props.weatherData && props.weatherData.main.humidity}%</h6>
    </div>
  )
}

export default WeatherBox;