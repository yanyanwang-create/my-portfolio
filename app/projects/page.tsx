'use client';
import { useState } from 'react';


const projects = [
  {
    id: 1,
    title: 'Lab Week 1 Portfolio',
    description: 'My first portfolio website built with basic HTML and CSS',
    tech: ['HTML', 'CSS'],
    link: 'https://github.com/yanyanwang-create/lab-wk1-portfolio'
  },
  {
    id: 2,
    title: 'Week 02 JS Practice',
    description: 'JavaScript practice exercises including loops, functions, and DOM manipulation',
    tech: ['JavaScript', 'HTML'],
    link: 'https://github.com/yanyanwang-create/week-02-js-practice'
  },
  {
    id: 3,
    title: 'Next.js Portfolio Website',
    description: 'This personal portfolio built with Next.js and Tailwind CSS',
    tech: ['Next.js', 'Tailwind CSS'],
    link: 'https://github.com/yanyanwang-create/my-portfolio'
  }
];


export default function Projects() {
  const [filter, setFilter] = useState('All');


  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));


  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>


      <div className="flex gap-3 justify-center mb-8">
        <button onClick={() => setFilter('All')} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">All</button>
        <button onClick={() => setFilter('Next.js')} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Next.js</button>
        <button onClick={() => setFilter('JavaScript')} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">JavaScript</button>
        <button onClick={() => setFilter('HTML')} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">HTML</button>
      </div>


      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map(project => (
          <div key={project.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex gap-2 mb-3">
              {project.tech.map(tag => (
                <span key={tag} className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="text-blue-600 hover:underline">View on GitHub →</a>
          </div>
        ))}
      </div>
    </main>
  );
}