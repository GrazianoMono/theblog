import { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useGetPost from '../hooks/useGetPost';
import ImagePlaceHolder from '../assets/image/placeHolder.png';
import BlogAuthor from '../components/blogAutor';
import useGetAuthor from '../hooks/useGetAuthor';

function Article() {
	const { state, getPost } = useGetPost();
	const params = useParams();
	const { authorState, getAuthor } = useGetAuthor();

	useEffect(() => {
		getPost(params.postId);
	}, []);

	useEffect(() => {
		if (state.post) {
			getAuthor(state.post.author - 1);
		}
	}, [state.post]);

	return (
		<Container fluid>
			{state.post && (
				<>
					<Image
						fluid
						src={state.post.thumbnail || ImagePlaceHolder}></Image>
					<Container>
						{authorState.author && (
							<BlogAuthor
								img={authorState.author.thumbnail}
								author={authorState.author.fullName}
								dateCreated={state.post.date}
							/>
						)}
						<h2>{state.post.title}</h2>
						<div
							dangerouslySetInnerHTML={{
								__html: state.post.body,
							}}
						/>
					</Container>
				</>
			)}
		</Container>
	);
}

export default Article;
