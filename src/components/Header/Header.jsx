import React from 'react'
import {Container,Logo,LogoutBtn} from "../index.js"
import {  useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'



const Header = () => {
  const authStatus = useSelector((state)=>state.status)
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
 
  return (
    
      <header className='py-3 shadow text-white bg-slate-950 px-8'>
      
          <nav className='flex items-center'>
            <div className=''>
              <Link to='/'>
                <Logo width='70px'   />
  
                </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className=' font-bold inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-lg hover:text-black'
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
          
      </header>
    )
}

export default Header