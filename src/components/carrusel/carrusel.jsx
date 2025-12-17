import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './carrusel.css';

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
                centeredSlidesBounds   // 🔥 MUY IMPORTANTE
                grabCursor
                loop
                slidesPerView={3}    // 🔥 NO entero
                spaceBetween={40}
                watchSlidesProgress
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,          // ❌ quitamos el negativo
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }}
                // pagination={{ clickable: true }}
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
