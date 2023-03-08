import './introduction.scss'
import image from '/home/student/Development/code/phase4/portfolio/src/images/IMG_20230308_132836.jpg'

export default function Introduction() {
  return (
    <div className='introduction' id='introduction'>
      <div className='home-content'>
        <h3>Hello, It's Me</h3>
        <h1>Evalyne Wambui</h1>
        <h3>And I'm a <span>Software Developer</span></h3>
        <p>My strong sides ; i have experience working as a team, i am a friendly person with eagerness to learn from others and take responsibility. Ability to learn new technology quickly and experiment different ways of handling tasks.</p>
      <div className='social-media'>
      <a href="https://github.com/Evalyne306?tab=repositories" target="_blank"> <i className="fa fa-github" id="icon" aria-hidden="true"></i></a>
      </div>
      <a href="#" className='btn'>Download CV</a>
      </div>
      <div className='home-img'>
        <img className= "img " src={image} alt="image"/>
      </div>
    </div>
  )
}
