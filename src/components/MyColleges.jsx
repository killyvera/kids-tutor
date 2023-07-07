import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Colleges } from '@/models';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyCollege from './MyCollege';

const MyColleges = ({collegesList}) => {
    const [colleges, setColleges] = useState(collegesList);

    const settings = {
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div style={{maxWidth: '80%'}} className='m-4' >
            <Slider {...settings}>
                {colleges? colleges.map((college) => (
                    <div key={college.id}>
                        <MyCollege colleges={college} />
                    </div>
                )): <p>Loading...</p>}
            </Slider>
        </div>
    );
};

export default MyColleges;
