import { Link } from 'react-scroll'
import style from './navbar.module.css'
import png from '../../img/png1.png'

export default function Nav() {
    return (
        <div className={style.items}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={1000} >
                <img src={png} alt='' className={style.logo} />
            </Link>
            {/* <Fade cascade damping={0.2} triggerOnce='false' duration='1500' > */}
            <div className={style.item}>
                <Link to="home" spy={true} smooth={true} offset={0} duration={1000} className={style.links}>
                    <p>Home</p>
                </Link>
                <Link to="about" spy={true} smooth={true} offset={0} duration={1500} className={style.links}>
                    <p>About</p>
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={0} duration={1500} className={style.links}>
                    <p>Skills</p>
                </Link>
                <Link to="service" spy={true} smooth={true} offset={0} duration={1500} className={style.links}>
                    <p>Proyects</p>
                </Link>
                <Link className={style.links}>
                    <p>Contact</p>
                </Link>
            </div>
            {/* </Fade> */}
        </div>
    )
}