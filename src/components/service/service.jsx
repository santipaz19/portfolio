
import Carrousel from '../carrousel/carrousel'
import style from './service.module.css'

export default function Proyects() {
    return (
        <div name='service' className={style.container3}>
            <section>
                <h2 className={style.subtext2}>Some projects</h2>
                <hr className={style.h} />
                <Carrousel className={style.carrousel} />
            </section>
        </div>
    )
}