import react,{useState} from 'react';
import './card.css';
const Card = () =>{
    const name = 'Prakash Shukla';
    const job = 'Developer';
    const about = "Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc., is a multinational technology conglomerate based in Menlo Park, California. The company is the parent organization of Facebook, Instagram, and WhatsApp, among other subsidiaries";
     


    return(
        <div className='Card'>
             <div className='upper-container'>
              <div className='image-container'>
              <img src='download.png' alt='' height="" width="" />
              </div>
             </div>
             <div className='lower-container'>
                        <h3>{name}</h3>
                        <h4>{job}</h4>
                        <p>{about}</p>
                        <button className='Button' >Visit Profile</button>
             </div>
        </div>
    )
}

export default Card;