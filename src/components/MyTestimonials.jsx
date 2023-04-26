import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Testimonials } from '@/models';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyCollege from './MyCollege';
import Testimonial from '@/components/Testimonial';

const MyTestimonials = ({testimonialList}) => {
    const [testimonials, setTestimonials] = useState(testimonialList);

    const settings = {
        rtl: true,
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerPadding: '1'
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    centerPadding: '1',
                },
            },
        ],
    };

    return (
        <div className='m-8 py-10 ' style={{maxWidth: '90%'}} >
            <Slider{...settings}>
                {testimonialList?.map((testimonial) => (
                    <div key={testimonial.id}>
                        <Testimonial testimonial={testimonial} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MyTestimonials;
