import React from 'react'

function Home({user}) {
  return (
    <div>

      {user? <p>Hey {user.name}!</p> : null}

      This is the home page
    </div>
  )
}

export default Home