import { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useGetArticle from '../hooks/useGetArticle';
import ImagePlaceHolder from '../assets/image/placeHolder.png';
import BlogAuthor from '../components/blogAutor';
import useGetAuthor from '../hooks/useGetAuthor';

function Article() {
	const { state, getArticle } = useGetArticle();
	const params = useParams();
	const { authorState, getAuthor } = useGetAuthor();

	useEffect(() => {
		getArticle(params.articleId);
	}, []);

	useEffect(() => {
		if (state.article) {
			getAuthor(state.article.author - 1);
		}
	}, [state.article]);

	return (
		<Container fluid>
			{state.article && (
				<>
					<Image
						fluid
						src={
							state.article.thumbnail || ImagePlaceHolder
						}></Image>
					<Container>
						{authorState.author && (
							<BlogAuthor
								img={authorState.author.thumbnail}
								author={authorState.author.fullName}
								dateCreated={state.article.date}
							/>
						)}
						<h2>{state.article.title}</h2>
						<div
							dangerouslySetInnerHTML={{
								__html: state.article.body,
							}}
						/>
					</Container>
				</>
			)}
		</Container>
	);
}

export default Article;
