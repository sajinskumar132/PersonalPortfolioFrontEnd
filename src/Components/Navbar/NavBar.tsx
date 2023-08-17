import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground)
  const ButtonToggle = () => {
    try {
      let MenuIcon = document.getElementById("MenuIcon") as HTMLElement
      let MenuClose = document.getElementById("MenuClose") as HTMLElement
      let NavMenus = document.getElementById("NavMenus") as HTMLElement
      if (MenuIcon.style.display === "block") {
        MenuClose.style.display = "block"
        NavMenus.style.display = "block"
        MenuIcon.style.display = "none"
      } else {
        MenuClose.style.display = "none"
        NavMenus.style.display = "none"
        MenuIcon.style.display = "block"
      }

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <nav className={` ${navbar ? 'shadow bg-white':'shadow-none'} pl-3 pr-3 h-[60px] lg:pl-52 lg:pr-52 mb-2 flex justify-between items-center sticky top-0 rounded-b-lg w-full z-[9999] `}>
      <div className=' flex items-center justify-between'>
        <h6 className=' font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-sky-400 bg-clip-text text-transparent'>Portfolio</h6>
      </div>
      <div className='lg:hidden'>
        <div id="MenuIcon" className=' block' onClick={ButtonToggle}>
          <MenuIcon />
        </div>
        <div id="MenuClose" className=' hidden' onClick={ButtonToggle}>
          <CloseIcon />
        </div>
      </div>
      <div className='hidden lg:block space-x-6 text-[#666666] font-semibold' >
        <a href="#about" >About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Project</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div className=' hidden left-0 absolute rounded-b-lg top-10 z-50 w-full p-5 shadow-[0px_2px_0px_0px_#00000024] bg-white' id="NavMenus">
        <div className='  flex flex-col gap-4'  >
        <a href="#about" onClick={ButtonToggle}>About</a>
        <a href="#skills" onClick={ButtonToggle}>Skills</a>
        <a href="#projects" onClick={ButtonToggle}>Project</a>
        <a href="#experience" onClick={ButtonToggle}>Experience</a>
        <a href="#contact" onClick={ButtonToggle}>Contact</a>
        </div>
      </div>
    </nav>

  )
}

export default NavBar
