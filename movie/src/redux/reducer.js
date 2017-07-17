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
		case "LIST_LUNBO":
			return Object.assign({}, state, {
				list_lunbo: action.list_lunbo
			})
		case "LIST_NOW":
			return Object.assign({}, state, {
				list_now: action.list_now
			})
		case "LIST_FUTURE":
			return Object.assign({}, state, {
				list_future: action.list_future
			})
		default:
			return state;
	}
}

export default reducer;