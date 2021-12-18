import React from 'react';
import { Link } from 'react-router-dom';

const SingleBooking = (props) => {
    const {name,price,photographer,duration,number,card}=props.photo;
    
    return (
                <div class="card-big-shadow">
                 
                       <div class="card card-just-text" data-background="color" data-color={card} data-radius="none">
                       <div  class="content bg-dark">
                           <h6 class="category text-center my-2">{name}</h6>
                           <h4 class="title text-decoration-underline text-center my-2">Tk {price}/-</h4>
                           <ul>
                               <li>
                                   Photographer: {photographer}
                               </li>
                               <li>
                                   Event duration: {duration} hours
                               </li>
                               <li>
                                   Number of pictures: {number}
                               </li>
                              
                           </ul>
                           <Link to='' className='text-decoration-underline d-flex justify-content-center my-3'>ADD TO CART</Link>
                       </div>
                   </div> 
                    
                   
                </div>
    );
};

export default SingleBooking;