import React from 'react'
import { connect } from 'react-redux'

// import { sendNewColor } from '../actions'

import Logo from './Logo'
import ColorPicker from './ColorPicker'
import Footer from './Footer'
// import ColorCodes from './ColorCodes'

function App (props) {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // }, [])

  // useEffect(() => {
  //   props.dispatch(sendNewColor())
  // }, [])

  // A variable that allows another variable to be passed in to style an element in-line.
  const appBgColor = {
    backgroundColor: props.color
  }

  return (
    <>
      <div style={appBgColor}>
        <div className='header'>
          <ColorPicker />
          <Logo />
        </div>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>

        <Footer />
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits,
    color: globalState.bgcolor
  }
}

export default connect(mapStateToProps)(App)
