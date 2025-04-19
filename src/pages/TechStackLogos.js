import React from 'react';

const techLogos = [
  {
    name: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    bg: 'bg-cyan-100',
  },
  {
    name: 'Flask',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    bg: 'bg-gray-100',
  },
  {
    name: 'Tailwind CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    bg: 'bg-sky-100',
  },
  {
    name: 'Python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    bg: 'bg-yellow-100',
  },
  {
    name: 'HTML5',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    bg: 'bg-orange-100',
  },
  {
    name: 'PostgreSQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    bg: 'bg-blue-100',
  },
  {
    name: 'MySQL (SQL)',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    bg: 'bg-blue-50',
  },
  {
    name: 'Git',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    bg: 'bg-red-100',
  },
  {
    name: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    bg: 'bg-yellow-200',
  },
];

const TechStackLogos = () => {
  return (
    <section className="py-1 px-2 bg-transparent text-center">
      {/* <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Tech Stack</h2> */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {techLogos.map((tech) => (
          <div
            key={tech.name}
            className={`w-20 h-20 p-3 rounded-xl shadow-md flex items-center justify-center transition-transform hover:scale-105 ${tech.bg}`}
            title={tech.name}
          >
            <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackLogos;
