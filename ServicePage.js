import React from 'react';
import './Services.css';
import mainImage from './concert-2566002_1280.jpg';
import CampainImage1 from './Artist.jpg'; 
import CampainImage2 from "./Spotify.jpg";
import CampainImage3 from "./Youtube.webp";   
import ArtistImage1 from "./AritstDev.webp";   
import ArtistImage2 from "./YT.jpg";   
import ArtistImage3 from "./Instagram.jpg";   
export const Services = () => {
  // Dummy data for campaigns
  const campaignsData = [
    { title: 'SOUND CLOUD', imageUrl: CampainImage1 },
    { title: 'SPOTIFY BOOST', imageUrl: CampainImage2 },
    { title: 'APPLE MUSIC', imageUrl: CampainImage3 },
  ]; 

  const ArtistDev = [
    { title: 'ARTIST DEVELOPMENT', imageUrl: ArtistImage1},
    { title: 'YOUTUBE MONITIZATION', imageUrl: ArtistImage2},
    { title: 'SOCIAL MEDIA MANAGEMENT', imageUrl: ArtistImage3},
  ]; 
  
  return (
    <>
      <div className='Heading'>
        our services
      </div>
      <div className='Main-Sec'>
        <div className="image-container">
          <img src={mainImage} alt="Your Image" />
        </div>
        <p>Guaranteed Music Charting on Billboard or iTunes</p>
        <h1>Chart Your Music</h1>
      </div>
      <div className='Heading'>launch your campaign</div>
      <section className='Campaigns'>  
        {campaignsData.map((campaign, index) => (  
          <div key={index} className="service"> 
            <div className='image-container'>
            <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />  
            <button className='btn'>{campaign.title}</button>
            </div> 
          </div> 
        ))} 
      </section>    
      <div className='Heading'>artist development</div>
      <section className='Campaigns'>  
        {ArtistDev.map((campaign, index) => (  
          <div key={index} className="service"> 
            <div className='image-container'>
            <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />  
            <button className='btn'>{campaign.title}</button>
            </div>
          </div>
        ))}
      </section>  
      <div className='btn-talk'> 
      <button id='btn' className='btn'> GOT IT, LET'S TALK</button> 
      </div>
    </>
  );
};
