import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './carrusel.css';
import './responsive.css';

const Carousel = () => {
    const colors = [
        'var(--dorado)',
        'var(--vinotinto)',
        'var(--gris)',
        'var(--doradoclaro)',
        'var(--azuloscuro)',
    ];

    return (
        <>
            <Swiper
                className="color-carousel"
                modules={[Pagination, Navigation, EffectCoverflow]}
                effect="coverflow"
                centeredSlides
                centeredSlidesBounds   
                grabCursor
                loop
                slidesPerView={3}    
                spaceBetween={40}
                watchSlidesProgress
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,          
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }}
                navigation
            >
                {colors.map((color, index) => (
                    <SwiperSlide key={index}> 
                        <div
                            className="color-box"
                            style={{ backgroundColor: color }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Carousel;
