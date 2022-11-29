import React, { useState } from "react";
// import LegendInformation from "./LegendInformation";


function LegendCard({ legend }) {

  const { image, name, legendType,likes,id } = legend;
  const [legendLikes, setLegendLikes] = useState(likes); 
  // const [showComponent, setShowComponent] = useState(false);
  

  function handleClick(e){

    //onClick sends back the event via callback function
    //key value pairs ; json stringify takes information to pass as a string
    fetch(`http://localhost:3006/legends/${id}`,{
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      
    body:JSON.stringify({likes: legend.likes +1}),
    })
    .then(res => res.json())
    .then(function(updatedLikesObj){
          legend.likes = updatedLikesObj.likes
          console.log(updatedLikesObj)
    })
  
    setLegendLikes(legendLikes + 1)
  };

//  function handleThisClick(){
//   console.log('hello')
//  }


  return (
    <li className="card">
    <img src={image} alt={"legendimg"} />
      <h4>{name}</h4>
      <p>Legend Type: {legendType}</p> 
        <button onClick={handleClick}>Number of Likes: {legendLikes} </button>
        {/* <p>
        <button onClick={handleThisClick} >View Legend</button>
        
        </p> */}
    </li>
  );
}

export default LegendCard;

// <HogDetails 
//           specialty={specialty} 
//           weight={weight} 
//           greased={greased} 
//           medal={medal}
//         />