import React from 'react';
import Card from '../components/Card';

export default function page() {
	const projects = [
		{
			imageSrc: require('/public/images/sample.jpg').default,
			title: 'Todolist',
			desc: 'Provide the essitial tasks todo things and record on the spot and friendly user',
			githubLink: 'https://github.com/haroldm2598/Project-todolist',
			livePreviewLink: 'https://haroldm2598.github.io/Project-todolist/'
		},
		{
			imageSrc: require('/public/images/sample.jpg').default,
			title: 'Todolist',
			desc: 'Provide the essitial tasks todo things and record on the spot and friendly user',
			githubLink: 'https://github.com/haroldm2598/Project-todolist',
			livePreviewLink: 'https://haroldm2598.github.io/Project-todolist/'
		},
		{
			imageSrc: require('/public/images/sample.jpg').default,
			title: 'Todolist',
			desc: 'Provide the essitial tasks todo things and record on the spot and friendly user',
			githubLink: 'https://github.com/haroldm2598/Project-todolist',
			livePreviewLink: 'https://haroldm2598.github.io/Project-todolist/'
		},
		{
			imageSrc: require('/public/images/sample.jpg').default,
			title: 'Todolist',
			desc: 'Provide the essitial tasks todo things and record on the spot and friendly user',
			githubLink: 'https://github.com/haroldm2598/Project-todolist',
			livePreviewLink: 'https://haroldm2598.github.io/Project-todolist/'
		},
		{
			imageSrc: require('/public/images/sample.jpg').default,
			title: 'Todolist',
			desc: 'Provide the essitial tasks todo things and record on the spot and friendly user',
			githubLink: 'https://github.com/haroldm2598/Project-todolist',
			livePreviewLink: 'https://haroldm2598.github.io/Project-todolist/'
		}
	];
	return (
		<div className='p-10 bg-slate-300 min-h-screen dark:bg-slate-600'>
			<Card data={projects} />
		</div>
	);
}
