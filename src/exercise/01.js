// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function Greeting({initialName = 'Xmas'}) {
  const [name, setName] = React.useState(initialName)
  const handleChange = event => setName(event.target.value)
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Enter your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
