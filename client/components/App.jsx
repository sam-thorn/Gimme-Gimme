import React, { useState } from 'react'
import { connect } from 'react-redux'

// import { sendNewColor } from '../actions'

import Logo from './Logo'
import ColorPicker from './ColorPicker'
import Footer from './Footer'
import ColorCodes from './ColorCodes'

function App (props) {
  const [color, setColor] = useState('#CC8899')
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
          <ColorPicker color={color} onChange={setColor}/>
          <Logo />
        </div>
        <div>
          <ColorCodes />
        </div>

        <Footer />
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    color: globalState.bgcolor
  }
}

export default connect(mapStateToProps)(App)
