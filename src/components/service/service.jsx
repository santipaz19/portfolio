import js from '../../img/javascript.svg'
import css from '../../img/css.svg'
import html from '../../img/html.svg'
import react from '../../img/react.svg'
import redux from '../../img/redux.svg'
import Carrousel from '../carrousel/carrousel'
import style from './service.module.css'

export default function Service() {
    return (
        <div name='service' className={style.container3}>
            <section>
                <h2 className={style.subtext2}>Some projects</h2>
                <hr className={style.h} />
                <Carrousel />
            </section>
            <div className={style.skills}>
                <div>
                    <img src={react} alt='react' className={style.icons} />
                    <img src={js} alt='javascript' className={style.icons} />
                    <img src={html} alt='html' className={style.icons} />
                    <img src={css} alt='css' className={style.icons} />
                    <img src={redux} alt='redux' className={style.icons} />
                </div>
            </div>
        </div>
    )
}