import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
   <a href= "#introduction" className='introductionclass'>Home</a>
   <a href= "#education" className='educationclass'>Education</a>
   <a href= "#portfolio" className='portfolioclass'>Resume</a>
   <a href= "#works" className='worksclass'>Work Experience</a>
   <a href= "#skills" className='skillsclass'>Skills</a>

            </div>
            <div className='right'>
            <a href= "#contact" className='contactclass'>Contact</a>
    <div className="itemcontainer">
    <i className="fa fa-mobile" id="icon" aria-hidden="true"></i>
   <span>0705057405</span>
    </div>
    <div className="itemcontainer">
    
    <i className="fa fa-envelope" id="icon"aria-hidden="true"></i>
   <span>wanjikueva306@gmail.com</span>
    </div>
    <div className="itemcontainer">
   
    <i className="fa fa-github" id="icon" aria-hidden="true"></i>
    <span>https://github.com/Evalyne306?tab=repositories</span>
    </div>
      
        
            </div>

        </div>
    
    </div>
  )
}
