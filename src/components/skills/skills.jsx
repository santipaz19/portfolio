import js from '../../img/javascript.svg'
import css from '../../img/css.svg'
import html from '../../img/html.svg'
import react from '../../img/react.svg'
import redux from '../../img/redux.svg'
import style from './skills.module.css'
import bootstraps from '../../img/bootstrap.png'
import { Fade } from "react-awesome-reveal";

export default function Skills() {
    return (
        <div name='skills' className={style.container3}>
            <Fade triggerOnce='true' cascade={true} damping={0.2} duration='1000' delay={500}>
                <section>
                    <h2 className={style.subtext2}>Skills</h2>
                </section>
                <hr className={style.h} />
            </Fade>
            <div className={style.skills}>
                <Fade triggerOnce='false' cascade={true} damping={0.5} duration='1500' delay={500} direction='up'>
                    <div className={style.subtext}>
                        <h3 className={style.alltext}><span className={style.text}>Frontend Development:</span> Extensive experience in creating dynamic and appealing web applications using technologies like   Next, TailwindCss, React Native, React, JavaScript, HTML, and CSS.<br /><br />
                            <span className={style.text}>Frameworks and Libraries:</span> Profound understanding of React, Redux, and React Hooks to craft interactive interfaces and reusable components.<br /><br />
                            <span className={style.text}>Responsive Design:</span> Ability to design and develop websites that seamlessly adapt to various devices and screen sizes, ensuring an optimal experience for users.<br /><br />
                            <span className={style.text}>API Integration:</span> Hands-on experience in handling APIs through the Axios library, enabling efficient retrieval and manipulation of external data.<br /><br />
                            <span className={style.text}>Attractive Design:</span> Dedication to crafting visually appealing and functional designs, blending usability and aesthetics for an exceptional user experience.</h3>
                    </div>
                </Fade>
                <Fade triggerOnce='false' cascade={true} damping={0.5} duration='1500' delay={500} direction='up'>
                    <div className={style.skills2}>
                        <div className={style.column}>
                            <img src={react} alt='react' className={style.icons} />
                            <img src={js} alt='javascript' className={style.icons} />
                            <img src={html} alt='html' className={style.icons} />
                        </div>
                        <div className={style.column}>
                            <img src={css} alt='css' className={style.icons} />
                            <img src={redux} alt='redux' className={style.icons} />
                            <img src={bootstraps} alt='bootstrap' className={style.icons} />
                        </div>
                    </div>
                </Fade>
            </div>
        </div >
    )
}