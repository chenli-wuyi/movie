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

			var now_list = [];
			for (var i = 0, len = state.now_play.length; i < len; i++) {
				now_list.push(state.now_play[i])
			}
			//追加
			now_list.concat();
			return Object.assign({}, state, {
				now_play: action.now_play,

			})
		case "CHANGE_PAGE":
			return Object.assign({}, state, {
				page: action.page++,

			})
		case "COME_PLAY":
			return Object.assign({}, state, {
				come_play: action.come_play
			})
		case "DETAIL":
			return Object.assign({}, state, {
				get_detail: action.get_detail,
				title: action.title
			})
		case "GET_CINEMAS":
			return Object.assign({}, state, {
				list_cinemas: action.list_cinemas,

			})
		case "YANCHU":
			return Object.assign({}, state, {
				yanchu_list: action.yanchu_list,

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