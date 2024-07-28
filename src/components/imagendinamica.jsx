import React, { useEffect, useState } from 'react';

const RandomImage = () => {
  const [randomNumber, setRandomNumber] = useState(1);

  useEffect(() => {
    const number = Math.floor(Math.random() * 3) + 1;
    setRandomNumber(number);
  }, []);



  const getImageSrc = (num) => {

    return require(`../images/DInamicImage${num}.png`);
  };

  return (
    
      <img
        src={getImageSrc(randomNumber)}
        className={`ImageMenu${randomNumber}`}
        alt={`Random ${randomNumber}`}
      />

  );
};

export default RandomImage;
