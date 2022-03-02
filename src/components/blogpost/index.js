import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import placeHolder from '../../assets/image/placeHolder.png';

function BlogPost({ img, title, description, link }) {
	return (
		<Card style={{ marginBottom: '2rem' }}>
			<Card.Img variant="top" src={img || placeHolder} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Link to={link}>Read more...</Link>
			</Card.Body>
		</Card>
	);
}

export default BlogPost;
