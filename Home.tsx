import React, { FunctionComponent } from 'react'
import { useLoggedInUser } from 'hooks/useLoggedInUser'

const Home: FunctionComponent = () => {
  const { loggedInUser, setLoggedInUser } = useLoggedInUser()

  const simulateLogin = () => {
    setLoggedInUser({
      firstName: 'Pascal',
      lastName: 'Siakim'
    })
  }

  return (
    <>
      {loggedInUser && (
        <div style={{ padding: '20px' }}>
          Currently logged in as: {loggedInUser.firstName}&nbsp;{loggedInUser.lastName}
        </div>
      )}
      {!loggedInUser && (
        <div style={{ padding: '20px' }}>Click the button to simulate the result of a succesful login</div>
      )}
      <div style={{ padding: '20px' }}>
        <button onClick={simulateLogin}>Simulate Log In</button>
      </div>
    </>
  )
}

export default Home
