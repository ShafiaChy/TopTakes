import { Rating } from '@mui/material';
import React from 'react';
import { Stack } from 'react-bootstrap';

const SingleReview = (props) => {
    const {name,image,review,rate} = props.review;
    console.log(image)
    return (
        <div className="card card-design">
      
        <div className="card__body ">
         

          <p>{review}</p>
        
        </div>
        <div   className='d-flex mx-auto w-50' >
                <Stack  spacing={1}>
                            
                            <Rating  name="half-rating-read" defaultValue={rate} precision={0.5} readOnly /> 
                 </Stack>
        </div>
        <div className="card__footer d-block">
     
          <div className="user">
            <img src={image} alt="user__image" className="user__image"/>
            <div className="user__info mt-3">
              <h5>{name}</h5>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleReview;