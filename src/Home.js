import React from 'react';
import alpha from './image/images.png'
import Alpha from './image/images2.png'
import peter from './image/images3.jpeg'
import lois from './image/images4.jpeg'
import quag from './image/images5.jpeg'
import Nav from './Nav'
import PropsSample from './PropsSample'
import MyApi from './MyApi';
import Counter from './Counter';

function Home(){
    return(
        <>
        <Nav/>
        <h1 style={{color:'red'}}><marquee>FAMILY GUY</marquee></h1>
      <img src={alpha} ></img>    
      <img src={Alpha}></img> 
      <img src={peter}></img>
      <img src={lois}></img>
      <img src={quag}></img>
      <PropsSample/>
      <MyApi/>
      <Counter/>
      </>
    )
}
export default Home;