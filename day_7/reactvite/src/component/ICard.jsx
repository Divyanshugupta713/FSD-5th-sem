import React from 'react'

function ICard() {
    let a=23;
  let name="Ram"
  return (
    <div>
        <h2 style={{backgroundColor:'brown',color:'white'}}>ABES ICard Component</h2>

      <h2 style={{color:'red'}}>Welcome to React using Vite</h2>
      <h2 style={{color:'red'}}>Value of a={a}</h2>
      <h2 style={{color:'red'}}>Name={name}</h2>

    </div>
  )
}

export default ICard