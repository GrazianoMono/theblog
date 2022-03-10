#!/usr/bin/node

const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, '/content/posts/');

const dirAuthorsPath = path.join(__dirname, '/content/authors/');

const dirCategoriesPath = path.join(__dirname, '/content/categories/');

const getArticles = () => {
	fs.readdir(dirPath, (err, files) => {
		if (err) {
			return console.log('Failed to list contents of directory: ' + err);
		}
		let ilist = [];
		files.forEach((file, i) => {
			fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
				ilist.push(JSON.parse(contents));
				if (ilist.length === files.length) {
					let data = JSON.stringify(ilist);
					fs.writeFileSync('./src/posts.json', data);
				}
			});
		});
	});
	return;
};

const getAuthors = () => {
	fs.readdir(dirAuthorsPath, (err, files) => {
		if (err) {
			return console.log('Failed to list contents of directory: ' + err);
		}
		let ilist = [];
		files.forEach((file, i) => {
			fs.readFile(
				`${dirAuthorsPath}/${file}`,
				'utf8',
				(err, contents) => {
					ilist.push(JSON.parse(contents));
					if (ilist.length === files.length) {
						let data = JSON.stringify(ilist);
						fs.writeFileSync('./src/authors.json', data);
					}
				}
			);
		});
	});
	return;
};

const getCategories = () => {
	fs.readdir(dirCategoriesPath, (err, files) => {
		if (err) {
			return console.log('Failed to list contents of directory: ' + err);
		}
		let ilist = [];
		files.forEach((file, i) => {
			fs.readFile(
				`${dirCategoriesPath}/${file}`,
				'utf8',
				(err, contents) => {
					if (contents) {
						ilist.push(JSON.parse(contents));
						if (ilist.length === files.length) {
							let data = JSON.stringify(ilist);
							fs.writeFileSync('./src/categories.json', data);
						}
					}
				}
			);
		});
	});
	return;
};

getArticles();
getAuthors();
getCategories();
