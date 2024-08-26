import { Button } from 'react-bootstrap';
import '../App.css';
import { useEffect, useState } from 'react';

function WeatherButton (props){
  return (
    <div className='btn-box'>
      <Button variant={`${props.city == "" ? "outline-light" : "light"}`} onClick={() => { props.handleCityChange("current") }}>Current Location</Button>
      {props.cities.map((item, index) => {
        return <Button key={index} variant={`${props.city == item ? "outline-light" : "light"}`} onClick={() => { props.setCity(item) }}>{item}</Button>
      })}
    </div>
  )
}

export default WeatherButton;