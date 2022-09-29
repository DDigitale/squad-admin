import React from 'react'

export function LogoutBtn() {
  const logoutHandler = () => {
    localStorage.clear()
  }

  return (
    <>
      <button className="logout-btn" onClick={logoutHandler}>
        Выйти
      </button>
    </>
  )
}
