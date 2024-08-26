function WeatherBox (props){
  console.log("컴포넌트 프롭스", props);
  
  return (
    <div className='weather-box'>
      {/* <h3>{props.weatherData.name}</h3>
      <h3>기온 | {props.weatherData.main.temp}</h3>
      <h4>최고기온 | {props.weatherData.main.temp_max}</h4>
      <h4>최저기온 | {props.weatherData.main.temp_min}</h4>
      <h4>날씨 상태 | {props.weatherData.weather[0].description}</h4> */}
    </div>
  )
}

export default WeatherBox;