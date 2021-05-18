// import { getColorName } from '../apis/colorName'

export const CHANGE_COLOR = 'CHANGE_COLOR'

// An action is an event that describes something that happened in the app
// It has a type that describes the action
// It has a payload which has additional information about what happened
export function changeColor (color) {
  return {
    type: CHANGE_COLOR,
    color
  }
}

// export function sendNewColor () {
//   return dispatch => {
//     return changeColor()
//       .then(color => {
//         dispatch(sendNewColor(color))
//         return null
//       })
//   }
// }
