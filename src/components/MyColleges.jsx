import { useState, useEffect } from 'react';


import { DataStore, Amplify, withSSRContext } from '@aws-amplify/datastore';
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
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div style={{maxWidth: '80%'}} >
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

async function getServerSideProps() {
    const { DataStore } = withSSRContext();
    const colleges = await DataStore.query(Colleges);
  
    return {
      props: {
        colleges: JSON.parse(JSON.stringify(colleges)),
      },
    };
  }

export default MyColleges;
