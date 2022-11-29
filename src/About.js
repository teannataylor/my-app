import React from "react";

const image = 'https://preview.redd.it/s6pti85u9cy41.jpg?auto=webp&s=a42e884264bad86b77682b436c55331ad649b76e';
function About() {
  return (

    <div className="about-page">
     <img className= "about-image" src={image} alt={"full legends"} />
        <h1>Overview:</h1>
        <p>
        Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts. 
        Before the match, players form into two- or three-player squads, and select from pre-designed characters with distinctive abilities, known as "Legends". The game has two gameplay modes. In "Battle Royale", up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat. The available play area on the island shrinks over time, forcing players to keep moving or else find themselves outside the play area which can be fatal. The final team alive wins the round. In "Arenas", players form into three-player squads and fight against another squad in a 3v3 team deathmatch over a series of rounds to determine the winner of the match. Teams win when their team has at least 3 points and is 2 points ahead.
        </p>
   
    </div>
  );
}

export default About;
