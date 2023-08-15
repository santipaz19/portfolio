import style from './home.module.css'
import ig from '../../img/ig.png'
import linkedin from '../../img/linkedin.png'
import gmail from '../../img/gmail.png'
import github from '../../img/github.png'
import Baffle from "baffle-react";
import { Link } from 'react-router-dom'



export default function Home() {
    const email = 'santipaz19.02@gmail.com'
    return (
        <div>
            <div name='home' className={style.container}>
                <h1 className={style.text}>Hi! I'm
                    <span className={style.textme}> Santiago</span>
                    <br />
                    <span className={style.textform}>Full Stack Developer</span>
                </h1>
                <div>

                </div>
                <div className={style.redes}>
                    <Link to={'https://www.instagram.com/santi.paz19/'} target="_blank">
                        <img src={ig} alt="social" className={style.icon} />
                    </Link>
                    <Link to={'https://www.linkedin.com/in/dev-santiagopaz/'} target="_blank">
                        <img src={linkedin} alt="social" className={style.icon} />
                    </Link>
                    <Link to={'https://github.com/santipaz19'} target="_blank">
                        <img src={github} alt="social" className={style.icon} />
                    </Link>
                    <Link to={`mailto:${email}`} target="_blank">
                        <img src={gmail} alt="social" className={style.icon} />
                    </Link>
                </div>
                <a href="./SantiCV.pdf" download>
                    <button className={style.btn}>
                        Download CV
                    </button>
                </a>
            </div>
        </div>

    )
}