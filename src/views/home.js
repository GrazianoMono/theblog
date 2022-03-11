import BlogPost from '../components/blogpost';
import { Container } from 'react-bootstrap';
import useGetPosts from '../hooks/useGetPosts';
import { useEffect } from 'react';

function Home() {
	const { state, getPosts } = useGetPosts();

	useEffect(() => {
		getPosts();
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
			{state.posts &&
				state.posts.map((post, index) => {
					const title = decodeHTMLEntities(post.title);
					const description = decodeHTMLEntities(post.excerpt);

					return (
						<BlogPost
							key={post.slug}
							title={title}
							description={description}
							link={`/post/${index}`}></BlogPost>
					);
				})}
		</Container>
	);
}

export default Home;
