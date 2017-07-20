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
		case "NOW_PLAY":
			return Object.assign({}, state, {
				now_play: action.now_play
			})
		case "COME_PLAY":
			return Object.assign({}, state, {
				come_play: action.come_play
			})
		case "DETAIL":
			return Object.assign({}, state, {
				get_detail: action.get_detail
			})
		case "GET_CINEMAS":
			return Object.assign({}, state, {
				list_cinemas: action.list_cinemas
			})
		case "SCROLL_TOP":
			return Object.assign({}, state, {
				scrolltop: action.scrolltop,
				linkStyle: action.linkStyle
			})
		default:
			return state;
	}
}

export default reducer;