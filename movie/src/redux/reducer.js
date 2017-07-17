function reducer(state, action) {
	switch (action.type) {
		case "CHANGE_TITLE":
			return Object.assign({}, state, {
				title: action.title
			})
		case "IS_SHOW":
			// var isshow = state.isshow;
			// isshow = !isshow
			return Object.assign({}, state, {
				isshow: !action.isshow,
			})
		default:
			return state;
	}
}

export default reducer;