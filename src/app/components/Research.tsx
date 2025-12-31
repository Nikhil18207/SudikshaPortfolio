"use client";
import React from "react";

interface ResearchProps {
  title: string;
  link: string;
  description: string;
}

const ResearchItem: React.FC<ResearchProps> = ({
  title,
  link,
  description,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-start">
        <div className="w-2 h-2 mr-4 mt-2 flex-shrink-0 rounded-full bg-[var(--muted-foreground)]"></div>

        <div>
          <a
            href={link}
            className="text-base text-[var(--foreground)] decoration-[1px] underline underline-offset-3 decoration-[var(--muted-foreground)] cursor-pointer group flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
            <svg
              className="w-4 h-4 ml-0.5 inline-block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const researchProjects = [
  {
    title: "Glaucoma Detection using CNN",
    link: "https://github.com/ss5613",
    description: "CNN-based architecture with ensemble methods for ophthalmic diagnostic classification.",
  },
  {
    title: "CAD Detection with GNNs",
    link: "https://github.com/ss5613",
    description: "Spatiotemporal graph-based approach to detect coronary artery disease from ICA video frames.",
  },
];

const Research: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
        research
      </h1>
      <div className="max-w-2xl">
        {researchProjects.map((project, index) => (
          <ResearchItem
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Research;
