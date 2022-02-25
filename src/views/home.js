import { Link } from 'react-router-dom';
import BlogPost from '../components/blogpost';
import { Container } from 'react-bootstrap';

function Home({ articles }) {
	return (
		<Container>
			{articles &&
				articles.map((article, index) => {
					return (
						<BlogPost
							key={article.id}
							title={article.title.rendered}
							description={article.excerpt.rendered}
							link={`/articles/${index}`}></BlogPost>
					);
				})}
		</Container>
	);
}

export default Home;
