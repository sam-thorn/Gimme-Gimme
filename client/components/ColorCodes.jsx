import React, { useState, useEffect } from 'react'
import { getColorCodes } from '../apis/codes'

function ColorCodes () {
  const [codes, setCodes] = useState('')
  useEffect(() => {
    getColorCodes()
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
            <td>{codes}</td>
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
            <td>XYZ</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ColorCodes
