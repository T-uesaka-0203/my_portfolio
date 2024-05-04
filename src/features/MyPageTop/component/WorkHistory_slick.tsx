import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkListIcon from '@mui/icons-material/Checklist';
import my_image from 'assets/images/my_image.jpeg';
import './WorkHistory.css'

const WorkHistory: React.FC = () => {
  const settings = {
    // arrows:true,
    dots: true,
    centerMode:true,
    centerPadding:'0px',
    LazyLoadTypes:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow: <div className="slick-prev" />,
    // nextArrow: <button className="custom-next-arrow" style={buttonStyle}>Next</button>,
  };

  return (
    <div id="works">
      <div className="my-profile" style={{ display: 'block', justifyContent: 'center' , marginTop: '100px'}}>
        <div className="section-title-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <WorkListIcon style={{ width: '50px', height: '50px' }} />
          <h2 className="section-title" style={{ fontSize:'40px' }} >WORKS</h2>
        </div>
      </div>
      <div style={{ width:'80%', margin:'auto', justifyContent: 'center', marginTop: '100px'}}>
          <Slider {...settings} >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div className='slide-tile' key={index} style={{ display: 'flex', justifyContent: 'center'}}>
                <img src={my_image} alt="" width='100%'/>
                <h3>{item}</h3>
              </div>
            ))}
          </Slider>
      </div>
    </div>
  );
}

export default WorkHistory;
