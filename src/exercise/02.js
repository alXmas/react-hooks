// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'

function Greeting() {
  // using useState
  const [name, setName] = React.useState(
    // we are getting the name from localStorage or default to empty string
    window.localStorage.getItem('name') || ''
  );

  // The Effect Hook lets you perform side effects in function components
  // Load every time the Greeting() is rendered
  React.useEffect(() => {
    // The read-only localStorage property allows you to access a Storage object for the
    // document's origin; the stored data is saved across browser sessions.
    window.localStorage.setItem('name', name);
  });

  const handleChange = event => setName(event.target.value);
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
