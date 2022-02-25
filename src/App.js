import './App.css';
import Home from './views/home';
import articles from './articles.json';

function App() {
	return <Home articles={articles} />;
}

export default App;
