import style from './contact.module.css'
import { Fade } from "react-awesome-reveal";
import ig from '../../img/ig.png'
import linkedin from '../../img/linkedin.png'
import gmail from '../../img/gmail.png'
import github from '../../img/github.png'
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className={style.container} name='contact'>
            <Fade triggerOnce='true' cascade={true} damping={0.2} duration='1000' delay={500}>
                <div>
                    <h2 className={style.subtext}>Contact</h2>
                    <hr className={style.h} />
                </div>
                <div>
                    <h3 className={style.subtext1}>I am always looking for new opportunities to collaborate with dynamic teams and projects. If you are looking for a passionate and committed web designer, I would be happy to connect with you and explore how I can contribute to your organization.</h3>
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
                    <Link to={`mailto:${gmail}`} target="_blank">
                        <img src={gmail} alt="social" className={style.icon} />
                    </Link>
                </div>
                <footer className={style.copyCont}>
                    Copyright © 2023 Santiago Paz Portfolio | All rights reserved.
                </footer>
            </Fade>
        </div>
    )
}