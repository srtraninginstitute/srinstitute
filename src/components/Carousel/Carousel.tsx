import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "25px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <div className="relative bg-white/80 hover:bg-white text-[#6B46C1] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "25px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <div className="relative bg-white/80 hover:bg-white text-[#6B46C1] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots slick-thumb",
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300" />
    ),
  };

  const slides = [
    {
      title: "Welcome to Our Institute",
      description: "Empowering students with quality education and practical skills",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Expert Training Programs",
      description: "Learn from industry experts and gain hands-on experience",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Placement Assistance",
      description: "We help you build a successful career with our placement support",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="relative">
      <style>
        {`
          .slick-arrow::before {
            display: none !important;
          }
          .slick-prev::before,
          .slick-next::before {
            display: none !important;
          }
          .slick-prev,
          .slick-next {
            width: auto !important;
            height: auto !important;
          }
          .slick-prev:hover,
          .slick-next:hover {
            background: transparent !important;
          }
        `}
      </style>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/80 to-[#D53F8C]/80" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  {slide.description}
                </p>
                <button className="bg-white text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel; 