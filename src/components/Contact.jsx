import React from 'react';

const socialLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    icon: 'src/assets/socials/linkedin.svg', // Replace with actual path
    url: 'https://www.linkedin.com/in/manojkumarbonala/',
  },
  {
    id: 2,
    name: 'Twitter',
    icon: 'src/assets/socials/twitter.svg', // Replace with actual path
    url: 'https://twitter.com/the_manoz',
  },
  {
    id: 3,
    name: 'GitHub',
    icon: 'src/assets/socials/github.svg', // Replace with actual path
    url: 'https://github.com/themanoz',
  },
  {
    id: 4,
    name: 'Instagram',
    icon: 'src/assets/socials/instagram.svg', // Replace with actual path
    url: 'https://www.instagram.com/the.manoz',
  },
  
];

function Contact() {
  return (
    <div className="flex justify-center items-center mt-10 gap-10">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="m-4 transition-transform transform-gpu hover:scale-110"
        >
          <img
            src={link.icon}
            alt={link.name}
            className="w-20 h-20"
          />
        </a>
      ))}
    </div>
  );
}

export default Contact;
