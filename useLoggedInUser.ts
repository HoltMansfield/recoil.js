import { atom, useRecoilState } from 'recoil'

export const loggedInUserAtom = atom({
  key: 'loggedInUser', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
})

export const useLoggedInUser = () => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserAtom)

  return {
    loggedInUser,
    setLoggedInUser,
  }
}
