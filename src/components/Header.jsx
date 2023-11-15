import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-2 items-center box-border text-white fixed top-0 left-0 right-0 bg-black'>
        <a href="#" className='text-[2rem]'>TechNews</a>
        
        <nav className='flex gap-10'>
            <a href="#">News</a>
            <a href="#">Opinion</a>
            <a href="#">Technology</a>
            <a href="#">Our News</a>
            <a href="#">Health and Science</a>
        </nav>

        <form>
            <input type="text" placeholder='Type something ...' className='border border-t-0 border-l-0 border-r-0 bg-transparent border-b-1 px-[8px] py-[5px] focus:outline-none' />
            <button type='submit' className='border border-gray-300 rounded px-[8px] py-[5px]'>search</button>
        </form>
    </div>
  )
}

export default Header