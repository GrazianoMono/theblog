import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './views/article';
import { Alert } from 'react-bootstrap';
import BlogNavbar from './components/blogNavbar';

ReactDOM.render(
	<BrowserRouter>
		<BlogNavbar />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="articles/:articleId" element={<Article />} />
			<Route
				path="*"
				element={<Alert variant="danger">No page found 404</Alert>}
			/>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
