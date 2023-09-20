import React from 'react'
import CountiresItem from './CountiresItem.jsx';

const MainPage = () => {
  return (
    <div>
      <CountiresItem />
      <div>
        <input type="text" />
        <img src="https://cdn-icons-png.flaticon.com/128/711/711319.png" alt="search" />
      </div>
    </div>
  )
}

export default MainPage;