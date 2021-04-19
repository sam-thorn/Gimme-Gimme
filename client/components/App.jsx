import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

import Header from './Header'
import ColorPicker from './ColorPicker'
import Footer from './Footer'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className='app'>
        <Header />

        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <ColorPicker />
        <Footer />
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
