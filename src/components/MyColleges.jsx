import { useState } from 'react';
import { Colleges } from '@/models';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyCollege from './MyCollege';
import Amplify from '@aws-amplify/core';
import config from '@/aws-exports';
Amplify.configure({ ...config, ssr: true });

const MyColleges = ({ colleges }) => {
    const [collegeList, setCollegeList] = useState(colleges);

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
                {collegeList.map((college) => (
                    <div key={college.id}>
                        <MyCollege colleges={college} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MyColleges;

export async function getServerSideProps() {
    const { DataStore } = require('@aws-amplify/datastore');
    const amplifyConfig = require('@/aws-exports').default;
    const config = amplifyConfig.default ? amplifyConfig.default : amplifyConfig;
    const models = await DataStore.query(Colleges);
    const colleges = JSON.parse(JSON.stringify(models));
    return {
        props: {
            colleges,
        },
    };
}
