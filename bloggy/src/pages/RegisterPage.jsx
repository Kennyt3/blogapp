import React, { useState } from 'react'

const RegisterPage = () => {
  const [username, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/test', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log(response)
    if (response.status !== 200) {
      alert('registration failed')
    } else {
      alert('registration successful')
    }
  }

  return (
    <form className='register'>
      <h1 className='header'>Register</h1>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className='inp'
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
        className='inp'
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  )
}

export default RegisterPage
