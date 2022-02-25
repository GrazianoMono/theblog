import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogPost({ img, title, description, link }) {
	return (
		<Card style={{ marginBottom: '2rem' }}>
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Link to={link}>Read more...</Link>
			</Card.Body>
		</Card>
	);
}

export default BlogPost;
