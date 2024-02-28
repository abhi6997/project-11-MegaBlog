import React from 'react'

const Logo = ({width = "100px"}) => {
  return (
    <div className='font-bold'><span className=" bg-red-950 px-2 rounded-l-sm py-2">BLOG</span><span className="bg-slate-600 text-black px-2 rounded-r-sm py-2">POST</span></div>
  )
}

export default Logo