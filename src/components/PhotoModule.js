import React from 'react';

const PhotoModule = (props) => {
  const { imgUrl, imgAlt } = props;

  return (
    // TODO: JSX component for photo module
    <div className="photo-module-container">Photo Module Container
      <img src={imgUrl} alt={imgAlt} ></img>
    </div>
  );
};

export default PhotoModule;
