"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
     
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <ul className="list-disc pl-4">
          <li>Mechanical Engineering - MEng (Integrated Masters)</li>
        </ul>
        <p className="pl-4  font-semibold mb-4">Swansea University</p>
        <ul className="list-disc pl-4">
          <li>Data Science & Computing - MSc</li>
        </ul>
        <p className="pl-4  font-semibold mb-4">
          University of London, Birkbeck
        </p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 md:items-start gap-4 items-center py-20 px- xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/image2.jpg"
          alt="computer image"
          width={600}
          height={600}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col sm:pl-2 pr-2 h-full">
          <h2 className="text-3xl font-bold text-white mb-4 text-center ">About Me</h2>
          <p className="text-base lg:text-lg text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eligendi beatae nostrum voluptate, voluptates porro officiis debitis explicabo eum natus rerum fugiat praesentium perspiciatis necessitatibus odio. Excepturi ut neque fuga? Lorem 
          </p>
          <div className="flex flex-row mt-6 justify-center border border-l-transparent border-r-transparent border-[#2a2a2a] py-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-6 mx-6 flex flex-cols">
          
            <div>{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
