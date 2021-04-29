import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const CHANGE_COLOR = 'CHANGE_COLOR'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

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
