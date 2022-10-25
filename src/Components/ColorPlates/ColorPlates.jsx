import React from 'react';
import Banner1 from '../Banners/Banner1';
const ColorPlates = () => {
  const props = {
    img: 'https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    titleOne: "Not Ready ",
    titleTwo: "yet",
    titleThird: "  ",
    articles: "",
    suggestion: ""
  }

  return (
    <div>
      <Banner1 {...props} />
    </div>
  );
}

export default ColorPlates;
