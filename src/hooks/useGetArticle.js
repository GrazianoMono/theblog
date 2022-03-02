import { useReducer } from 'react';
import articles from '../articles.json';

const initialState = {
	article: '',
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'success':
			return {
				article: action.data,
			};
		case 'error':
			return {
				error: action.error,
			};
		default:
			return state;
	}
};

function useGetArticle() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getArticle = (index) => {
		dispatch({ type: 'loading' });
		try {
			dispatch({ type: 'success', data: articles[index] });
		} catch (e) {
			dispatch({ type: 'error', error: e });
		}
	};

	return { state, getArticle };
}

export default useGetArticle;
