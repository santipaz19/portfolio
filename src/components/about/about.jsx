import style from './about.module.css'
import img from '../../img/about.jpg'

export default function About() {
    return (
        <div className={style.container2} name='about'>
            <img src={img} alt="Me" className={style.img} />
            <div className={style.text2} >
                <h2 className={style.subtext1}>About me</h2>
                <hr className={style.h} />
                <h3 className={style.subtext}>Hi! I'm Santi, and I'm in the process of completing my training as a Full Stack Developer at SoyHenry, where I have acquired skills in web technologies and embraced agile methodologies. <br /> <br />My journey as a developer began with certified courses from Google. I took my first steps with FreeCodeCamp, and now I am pursuing further education at SoyHenry, where I decided to consolidate all my knowledge to excel as a Full Stack developer.<br /> <br /> Actually, I am committed to continuing my path as a self-learner, constantly seeking to acquire new knowledge, exploring cutting-edge technologies, and expanding my IT skills.</h3>
            </div>
        </div>
    )
}