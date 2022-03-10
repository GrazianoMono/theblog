import { useReducer } from 'react';
import articles from '../posts.json';

const initialState = {
	articles: [],
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'success':
			return {
				articles: action.data,
			};
		case 'error':
			return {
				error: action.error,
			};
		default:
			return state;
	}
};

function useGetArticles() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getArticles = () => {
		dispatch({ type: 'loading' });
		try {
			dispatch({ type: 'success', data: articles });
		} catch (e) {
			dispatch({ type: 'error', error: e });
		}
	};

	return { state, getArticles };
}

export default useGetArticles;
