import { useReducer } from 'react';
import posts from '../posts.json';

const initialState = {
	posts: undefined,
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'success':
			return {
				posts: action.data,
			};
		case 'error':
			return {
				error: action.error,
			};
		default:
			return state;
	}
};

function useGetPosts() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getPosts = () => {
		dispatch({ type: 'loading' });
		try {
			dispatch({ type: 'success', data: posts });
		} catch (e) {
			dispatch({ type: 'error', error: e });
		}
	};

	return { state, getPosts };
}

export default useGetPosts;
