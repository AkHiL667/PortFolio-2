import React from 'react'

function Nav() {
  return (
    <div>
      <nav className="w-full h-10 ml-5 flex items-center gap-4">
              <div className="text-xs md:text-sm cursor-pointer">About</div>
              <div className="text-xs md:text-sm cursor-pointer">Projects</div>
              <a href="public/Akhil_FullStack.pdf" download className="text-xs md:text-sm cursor-pointer">Resume</a> 
              <div className="text-xs  text-red-600 md:text-sm  cursor-pointer">Click anywhere to see magic</div>
        </nav>

    </div>
  )
}

export default Nav
