export const signupReducer = (signupState, signupAction) => {
  switch (signupAction.type) {
    case 'USER_DETAIL':
      return { ...signupState, [signupAction.name]: signupAction.payload }
    case 'SUBMIT':
      return { ...signupState, isSubmit: true }
    default:
      return signupState
  }
}
