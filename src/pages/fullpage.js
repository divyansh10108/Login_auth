import React from 'react'
import Login from './login'
const fullpage = () => {
  return (
    <div>
        <Login/>
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>

    </div>
  )
}

export default fullpage