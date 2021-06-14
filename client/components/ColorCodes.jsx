import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { getColorName } from '../apis/colorName'
import { colord } from 'colord'

const useStyles = makeStyles({
  root: {
    padding: '0 0 4px'
  }
})

function ColorCodes () {
  const [codes, setCodes] = useState('')
  useEffect(() => {
    getColorName()
      .then(code => {
        setCodes(code)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const classes = useStyles()

  return (
    <>
      <div>
        <table className='ctable'>
          <tbody className='ctable-body'>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>RGB</td>
              <td>
                <span className='ctable-code-value'>Test 1</span>
              </td>
            </tr>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>CMYK</td>
              <td>
                <span className='ctable-code-value'>Test 2</span>
              </td>
            </tr>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>HSL</td>
              <td>
                <span className='ctable-code-value'>Test 3</span>
              </td>
            </tr>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>HSV</td>
              <td>
                <span className='ctable-code-value'>Test 4</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='clipboard-button-container'>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
          gimme that code
          </Button>
        </div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
          gimme that code
          </Button>
        </div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
          gimme that code
          </Button>
        </div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
          gimme that code
          </Button>
        </div>
      </div>
    </>
  )
}

export default ColorCodes
