import React from 'react';

const skills = [
  {
    id: 1,
    name: 'Java',
    logo: 'src/assets/java.svg',
  },
  {
    id: 2,
    name: 'HTML',
    logo: 'src/assets/html.svg',
  },
  {
    id: 3,
    name: 'CSS',
    logo: 'src/assets/css.svg',
  },
  {
    id: 4,
    name: 'JavaScript',
    logo: 'src/assets/javascript.svg',
  },
  {
    id: 5,
    name: 'React',
    logo: 'src/assets/react.svg',
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    logo: 'src/assets/tailwind-css.svg',
  },
  {
    id: 7,
    name: 'MySQL',
    logo: 'src/assets/mysql.svg',
  },
  {
    id: 8,
    name: 'MongoDB',
    logo: 'src/assets/mongodb.svg',
  },
  {
    id: 9,
    name: 'Jenkins',
    logo: 'src/assets/jenkins.svg',
  },
  {
    id: 10,
    name: 'Docker',
    logo: 'src/assets/docker.svg',
  },
];

function SkillCard() {
  return (
    <div className="grid grid-cols-5 px-[7%] ml-12 justify-center gap-8">
      {skills.map((skill) => (
        <div key={skill.id} className="m-4 overflow">
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-20 h-20 transition-transform transform-gpu hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}

export default SkillCard;
