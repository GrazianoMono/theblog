import { useReducer } from 'react';
import posts from '../posts.json';

const initialState = {
	post: undefined,
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'success':
			return {
				post: action.data,
			};
		case 'error':
			return {
				error: action.error,
			};
		default:
			return state;
	}
};

function useGetPost() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getPost = (index) => {
		dispatch({ type: 'loading' });
		try {
			dispatch({ type: 'success', data: posts[index] });
		} catch (e) {
			dispatch({ type: 'error', error: e });
		}
	};

	return { state, getPost };
}

export default useGetPost;
