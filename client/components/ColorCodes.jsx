import React, { useState, useEffect } from 'react'
import { getColorName } from '../apis/colorName'
import { colord } from 'colord'

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

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>RGB</td>
            <td></td>
          </tr>
          <tr>
            <td>CMYK</td>
            <td></td>
          </tr>
          <tr>
            <td>HSL</td>
            <td></td>
          </tr>
          <tr>
            <td>HSV</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ColorCodes
