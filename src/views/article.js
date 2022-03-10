import { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useGetArticle from '../hooks/useGetArticle';
import ImagePlaceHolder from '../assets/image/placeHolder.png';
import BlogAuthor from '../components/blogAutor';

function Article() {
	const { state, getArticle } = useGetArticle();
	const params = useParams();

	useEffect(() => {
		getArticle(params.articleId);
	}, []);

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
						<BlogAuthor />
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
