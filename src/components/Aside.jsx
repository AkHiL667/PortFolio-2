import React from 'react'

function Aside() {
  return (
    <div>
      <aside>
          <div className="w-full mt-10 h-30 md:top-3 md:h-[90vh] md:absolute md:right-20 md:w-[17vw] lg:top-3 lg:h-[85vh] lg:absolute lg:right-20 lg:w-[13vw]">  
            <h1 className="text-7xl text-[#E43626] font-bold pl-4 font-[Gloock] md:text-[140px] md:rotate-90 md:translate-x-[-2%] md:translate-y-[3%] md:whitespace-nowrap lg:text-[145px] lg:tracking-wide lg:rotate-90 lg:translate-x-[-2%] lg:translate-y-[3%] lg:whitespace-nowrap">
              Portfolio
            </h1>
          </div>
        </aside>
    </div>
  )
}

export default Aside
