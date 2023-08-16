
import Carrousel from '../carrousel/carrousel'
import style from './service.module.css'
import { Fade } from "react-awesome-reveal";

export default function Proyects() {
    return (
        <div name='service' className={style.container3}>
            <Fade triggerOnce='false' cascade={true} damping={0.2} duration='1000' delay={500} direction='up'>
                <section>
                    <h2 className={style.subtext2}>Some projects</h2>
                    <hr className={style.h} />
                </section>
            </Fade>
            <Fade triggerOnce='false' cascade={true} damping={0.2} duration='1000' delay={500} direction='up'>
                <Carrousel className={style.carrousel} />
            </Fade>
        </div>
    )
}