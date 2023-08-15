import style from './carrousel.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
import lpvans from '../../img/carrousel1.png'
import rick from '../../img/carrousel2.png'
import ecommers from '../../img/ecommers.jpg'
import carrousel4 from '../../img/carrousel4.png'
import { Link } from 'react-router-dom'

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
                        <Link to={'https://lpvanstravel.vercel.app/'} target="_blank">
                            <img src={lpvans} alt="" className={style.img} />
                            <div className={style.text}>Corporate web</div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.card}>
                        <Link to={'https://rick-morty-santipaz19.vercel.app/'} target="_blank">
                            <img src={rick} alt="" className={style.img} />
                            <div className={style.text}>Rick & Morty APP</div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.card}>
                        <img src={ecommers} alt="" className={style.img} />
                        <div className={style.text}>E-Commers Cooming soon</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.card}>
                        <Link to={'https://portfolio-santipaz19.vercel.app/'}>
                            <img src={carrousel4} alt="" className={style.img} />
                            <div className={style.text}>Portfolio personal</div>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}