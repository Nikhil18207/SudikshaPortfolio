"use client";
import React from "react";

interface ProjectProps {
  title: string;
  link: string;
  description: string;
}

const ProjectItem: React.FC<ProjectProps> = ({
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

const projects = [
  {
    title: "Sentiment Analysis - Alexa Reviews",
    link: "https://github.com/ss5613/Sentiment-Analysis",
    description: "NLP-based sentiment analysis on Alexa Echo Dot reviews using Python, Pandas, and WordCloud.",
  },
  {
    title: "Financial Data Analysis (2006-2016)",
    link: "https://github.com/ss5613/Finance-Data-Analysis",
    description: "Stock analysis of major banks pre and post 2008 crisis using Pandas, Seaborn, and Plotly.",
  },
  {
    title: "Gold Price Forecasting (1950-2020)",
    link: "https://github.com/ss5613/Sales_Forecasting",
    description: "Time series analysis of gold prices using EDA, Exponential Smoothing, and Linear Regression.",
  },
  {
    title: "Hospital Database Analysis",
    link: "https://github.com/ss5613/Hospital-Database-Analysis",
    description: "Power BI dashboard for patient demographics, doctor performance, and hospital financial insights.",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
        projects
      </h1>
      <div className="max-w-2xl">
        {projects.map((project, index) => (
          <ProjectItem
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

export default Projects;
