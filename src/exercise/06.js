import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.userNameInput.value;
    onSubmitUsername(value);
  }

  function handleChange(event) {
    const {value} = event.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : 'Username must be lowercas.')
  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input id="userNameInput" type="text" onChange={handleChange} />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
