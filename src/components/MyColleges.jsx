import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Colleges } from '@/models';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyCollege from './MyCollege';

const MyColleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        const fetchColleges = async () => {
            const models = await DataStore.query(Colleges);
            setColleges(models);
        };
        fetchColleges();
    }, []);

    const settings = {
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div className='bg-blue-500 ' style={{maxWidth: '80%'}} >
            <Slider {...settings}>
                {colleges.map((college) => (
                    <div key={college.id}>
                        <MyCollege colleges={college} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MyColleges;
