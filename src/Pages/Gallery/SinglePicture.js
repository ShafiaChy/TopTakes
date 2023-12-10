import React from "react";

const SinglePicture = (props) => {
  const { key, image, name, description } = props.picture;

  return (
    <>
      {key !== 102 && key !== 105 && key !== 108 && key !== 111 ? (
        <div className="one_fourth animate__animated animate__flip">
          <figure>
            <img className="img-half" src={image} alt="" />
            <figcaption>{name}</figcaption>
          </figure>
          <div className="mag_content">
            <p>{description}</p>
          </div>

          <div className="spacer"></div>
        </div>
      ) : (
        <div className="half animate__animated animate__flip">
          <figure>
            <img
              src={image}
              alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. "
            />
            <figcaption>{name}</figcaption>
          </figure>
          <div className="mag_content">
            <p>{description}</p>
          </div>
          <div className="spacer"></div>
        </div>
      )}
    </>
  );
};

export default SinglePicture;
