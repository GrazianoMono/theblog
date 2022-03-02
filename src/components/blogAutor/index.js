import ImagePlaceHolder from '../../assets/image/placeHolder.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogAuthor({ img, author, dateCreated }) {
	return (
		<div className="media" style={{ marginTop: '2rem' }}>
			<img
				className="mr-3"
				src={img || ImagePlaceHolder}
				style={{ maxWidth: '5rem' }}
				alt="Generic placeholder"
			/>
			<div className="media-body">
				<p>
					by {author || 'Anonymous'} on {dateCreated || 'Unkowkn'}
				</p>
			</div>
		</div>
	);
}

export default BlogAuthor;
