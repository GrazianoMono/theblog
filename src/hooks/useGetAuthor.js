import { useReducer } from 'react';
import authors from '../authors.json';

const initialState = {
	author: undefined,
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'success':
			return {
				author: action.data,
			};
		case 'error':
			return {
				error: action.error,
			};
		default:
			return state;
	}
};

function useGetAuthor() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getAuthor = (index) => {
		console.log(authors);
		console.log(authors[index]);
		dispatch({ type: 'loading' });
		try {
			dispatch({ type: 'success', data: authors[index] });
		} catch (e) {
			dispatch({ type: 'error', error: e });
		}
	};

	return { authorState: state, getAuthor };
}

export default useGetAuthor;
