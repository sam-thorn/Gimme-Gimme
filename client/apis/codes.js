import request from 'superagent'
// import { ColorPicker } from '../components/ColorPicker'

const colorCodesUrl = 'http://thecolorapi.com/id?hex=CC8899'
// const colorCodesUrl = `http://thecolorapi.com/id?hex=${color}`

export function getColorCodes () {
  return request.get(colorCodesUrl)
    .then(response => response.body)
}
