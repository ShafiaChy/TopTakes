import React,{useState, useEffect} from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import './Gallery.css'
import SinglePicture from './SinglePicture';

const Gallery = () => {
	const [pictures, setPictures] = useState([]);

	useEffect(() =>{
		fetch('http://localhost:5000/gallery')
		.then(res => res.json())
		.then (data => setPictures(data))
	},[])
	
    return (
        <div>
            
	<Navigation></Navigation>
	<h1 className="text-center text-white py-5">Gallery</h1>
	

<div className="section">
	<div className="container flex_div ">
		{
			pictures.map(picture => <SinglePicture
				key = {picture.key}
				picture={picture}></SinglePicture>)
		}
		
		{/* <div className="half">
			<figure>
				<img src="https://assets.codepen.io/t-1/freddy-g-lhy1lY3CyLI-unsplash.jpg" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
				<figcaption>Photo by Freddy G</figcaption>
			</figure>
			
			<div className="spacer"></div>
            <figure><img src="https://assets.codepen.io/t-1/cassidy-james-blaede-1lzJt360gkE-unsplash.jpg" alt="two people playing Guitar Hero Arcade. " />
				<figcaption>Photo by Cassidy James Blaede</figcaption>
			</figure>
			<div className="spacer"></div>
		
			<div className="spacer"></div>
            <figure><img src="https://assets.codepen.io/t-1/cassidy-james-blaede-1lzJt360gkE-unsplash.jpg" alt="two people playing Guitar Hero Arcade. " />
				<figcaption>Photo by Cassidy James Blaede</figcaption>
			</figure>
			<div className="spacer"></div>
			<figure><img src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " />
				<figcaption>Photo by Element5 Digital</figcaption>
			</figure>
            
			
		</div> */}
		{/* <div className="one_fourth">
			<figure>
				<img src="https://assets.codepen.io/t-1/nick-jones-QTk3Llc-oKU-unsplash.jpg" alt="a person wearing a bucket hat, sitting on a skee ball machine lane. " />
				<figcaption>Photo by Nick Jones</figcaption>
			</figure>
		
			<div className="spacer"></div>
			<figure>
				<img src="https://assets.codepen.io/t-1/nick-jones-g7jhzbd9WFQ-unsplash.jpg" alt="a person in a white t-shirt sitting on a wheel of fortune arcade game. " />
				<figcaption>Photo by Nick Jones</figcaption>
			</figure>
            <div className="spacer"></div>
			<figure><img src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " />
				<figcaption>Photo by Element5 Digital</figcaption>
			</figure>
            <div className="spacer"></div>
			<figure><img src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " />
				<figcaption>Photo by Element5 Digital</figcaption>
			</figure>
            <div className="spacer"></div>
			<figure><img src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " />
				<figcaption>Photo by Element5 Digital</figcaption>
			</figure>
			
		</div> */}
				</div>
			</div>
        </div>
    );
};

export default Gallery;