"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a description for project 1",
    imgUrl: "/images/projects/1.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "NLP - Based Resume Screening Tool",
    description: "This is a description for project 2",
    imgUrl: "/images/projects/2.png",
    tag: ["All", "Data Science"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Africa's Fastest Growing Companies 2022-2024",
    description: "This is a description for project 3",
    imgUrl: "/images/projects/3.png",
    tag: ["All", "Data Science"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="flex flex-row justify-center items-center gap-3 text-white my-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Analysis"
          isSelected={tag === "Data Analysis"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            tags={project.tags}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
