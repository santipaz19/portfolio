import style from './carrousel.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
import carrousel1 from '../../img/carrousel1.png'
import carrousel2 from '../../img/carrousel2.png'
import carrousel3 from '../../img/carrousel3.png'
import carrousel4 from '../../img/carrousel4.png'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

export default function Carrousel() {
    return (
        <div className={style.slider}>
            <Swiper effect={'coverflow'} centeredSlides={true} loop={true} slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[Navigation, Pagination, EffectCoverflow]}>
                <SwiperSlide>
                    <div className={style.card}>
                        <img src={carrousel1} alt="" className={style.img} />
                        <div className={style.text}>Rick & Morty APP</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carrousel2} alt="" className={style.img} />
                    <div className={style.text}>Corporate web</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carrousel3} alt="" className={style.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carrousel4} alt="" className={style.img} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}