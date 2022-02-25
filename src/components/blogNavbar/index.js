import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogNavbar() {
	return (
		<Navbar>
			<Container>
				<Link
					to={'/'}
					style={{ textDecoration: 'none', color: 'black' }}>
					<h1>The Blog.</h1>
				</Link>
			</Container>
		</Navbar>
	);
}

export default BlogNavbar;
