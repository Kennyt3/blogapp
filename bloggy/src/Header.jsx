import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import logo from './assets/gin.png'

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext)

  const username = userInfo?.username

  return (
    <header className=' bg-bgHF text-white'>
      <div className='containerm header'>
        <Link to='/' className='logo'>
          <img src={logo} alt='' className='w-[60px] h-[60px]' />
        </Link>
        <nav>
          {username && (
            <>
              <Link to='/create'>Create new post</Link>
              <a onClick={logout}>Logout ({username})</a>
            </>
          )}
          {!username && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
