function customFontsReducer(state, action) {
  switch (action.type) {
    case "set_font":
      let update = { ...state }
      update.article[action.selectedField] = action.fontUpdate
      return update
    case "set_selectedField":
      return {
        ...state,
        selectedField: action.selectedField
      }
    case "reset":
      return action.payload
    default:
      return state;
  }
}

export default customFontsReducer;