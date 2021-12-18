import React from 'react';
import { Link } from 'react-router-dom';

const SingleBookTwo = (props) => {
    const {name,price,card}=props.addon;
    
    return (
                <div class="card-big-shadow ">
                 
                       <div class="card card-just-text" data-background="color" data-color={card} data-radius="none">
                       <div  class="content bg-dark">
                           <h6 class="category text-center my-2">{name}</h6>
                           <h4 class="title text-decoration-underline text-center my-2">Tk {price}/-</h4>
                           <Link to='' className='text-decoration-underline d-flex justify-content-center mt-5'>ADD TO CART</Link>
                       </div>
                   </div> 
                    
                   
                </div>
    );
};

export default SingleBookTwo;