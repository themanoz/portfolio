function ProjectCard() {
  const projects = [
    {
      id: 1,
      title: "Complaint Handling Management System",
      description:
        "Developed a fully functional e-commerce platform with user authentication and payment integration.",
      technologies: ["HTML", "CSS", "JavaScript", "PhP", "MySQL"],
      githubUrl: 'https://github.com/yourusername/e-commerce-repo',
    },
    {
      id: 2,
      title: "AWS Usage Tracker",
      description:
        "Built a task management application with features like task creation, completion tracking, and user authentication. Established & expertly managed Linux servers on Amazon, including EC2, EBS, ELB, Security Groups, RDS, & IAM  Created, & upgraded AMI/Snapshots/Volumes, & set up, and managed 4-5 VPC subnets, facilitated the creation of seamless connections between distinct zones  Leveraged a wide range of cutting-edge technologies, such as EC2, ELB, VPC, S3, RDS, Route 53, Cloud Watch, SNS & enabled the achievement of the desired outcom.Designed and implemented a personal portfolio website to showcase skills, projects, and achievements.",
      technologies: ["React", "Firebase"],
      githubUrl: 'https://github.com/yourusername/e-commerce-repo',
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Designed and implemented a personal portfolio website to showcase skills, projects, and achievements.Designed and implemented a personal portfolio website to showcase skills, projects, and achievements.Designed and implemented a personal portfolio website to showcase skills, projects, and achievements.Designed and implemented a personal portfolio website to showcase skills, projects, and achievements. Designed and implemented a personal portfolio website to showcase skills, projects, and achievements.Designed and implemented a personal portfolio website to showcase skills, projects, and achievements.",
      technologies: ["React", "CSS", "GitHub Pages"],
      githubUrl: 'https://github.com/yourusername/e-commerce-repo',
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Designed and implemented a personal portfolio website to showcase skills, projects, and achievements.",
      technologies: ["React", "CSS", "GitHub Pages"],
      githubUrl: 'https://github.com/yourusername/e-commerce-repo',
    },
  ];
  return (
    <div>
      {projects.map((project) => (
          <div key={project.id} className="flex-1 p-3 mt-2">
            <h3 className="text-xl font-montserrat font-semibold text-blue-400">
              {project.title}
            </h3>
            <div className="mt-2">
              <p className="font-montserrat mt-1">{project.description}</p>
            </div>
            <p className="mt-2 font-montserrat">
              <span className="font-montserrat font-semibold">Technologies: </span> 
              {project.technologies}
            </p>
            <div className="mt-2 font-montserrat hover:text-blue-300">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                {project.githubUrl}
                </a>
            </div>
          </div>
      ))}
    </div>
  );
}

export default ProjectCard;
