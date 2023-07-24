import { shallowEqual } from 'react-redux'
import ProfileStatus from '../../components/Profile/ProfileInfo/ProfileStatus'
import ProfileReducer, { addPostActionCreator, setStatus, setUserProfile } from '../reducers/ProfileReducer'
import { render } from '@testing-library/react'
import { createElement } from 'react'
it("profule akjn", () => {
  let action = addPostActionCreator('aoksd')
  let action2 = setStatus('anything')
  let action3 = setUserProfile('anythinjj')
  let state = {
    Posts: [
      { id: 1, message: "owihf asdh erexaner" },
      { id: 2, message: "varam kereq kjsdhfjksd" },
      { id: 3, message: "akjfn jasjdjk axjikner" },
    ],

  }


  let newState = ProfileReducer(state, action)

  expect(newState.Posts.length).toBe(4)


})


