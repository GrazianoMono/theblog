import BlogPost from '../components/blogpost';
import { Container } from 'react-bootstrap';
import useGetArticles from '../hooks/useGetArticles';
import { useEffect } from 'react';

function Home() {
	const { state, getArticles } = useGetArticles();

	useEffect(() => {
		getArticles();
	}, []);

	const decodeHTMLEntities = (str) => {
		if (str && typeof str === 'string') {
			// strip script/html tags
			str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
		}

		return str;
	};

	return (
		<Container>
			{state.articles &&
				state.articles.map((article, index) => {
					const title = decodeHTMLEntities(article.title);
					const description = decodeHTMLEntities(article.excerpt);

					return (
						<BlogPost
							key={article.slug}
							title={title}
							description={description}
							link={`/article/${index}`}></BlogPost>
					);
				})}
		</Container>
	);
}

export default Home;
