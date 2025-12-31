"use client";
import React from "react";

interface WorkExperienceProps {
  company: string;
  position: string;
  description: React.ReactNode[];
  website?: string;
}

// Work experience item component
const WorkExperienceItem: React.FC<WorkExperienceProps> = ({
  company,
  position,
  description,
  website,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-start">
        <div className="w-2 h-2 mr-4 mt-2 flex-shrink-0 rounded-full bg-[var(--muted-foreground)]"></div>

        <div>
          <h3 className="text-base font-medium text-[var(--foreground)]">
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            {position}
          </p>
          <ul className="text-sm text-[var(--foreground)] list-disc pl-4 marker:text-[var(--muted-foreground)]">
            {description.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  // Work experience data structured in an array
  const workExperiences = [
    {
      company: "NielsenIQ",
      position: "Intern Trainee — 2026",
      website: "https://nielseniq.com/global/en/",
      description: [],
    },
    {
      company: "Unikul Solutions",
      position: "Business Analytics Intern — 2025",
      website: "https://unikul.com/",
      description: [
        <>
          Analyzed ERP datasets from 3 client accounts to identify operational inefficiencies, contributing to a 12% increase in process visibility.
        </>,
        <>
          Built 4 interactive Power BI dashboards used by 10+ stakeholders for real-time KPI tracking and business reviews.
        </>,
        <>Delivered insights that influenced planning decisions for two quarterly sales initiatives.</>,
      ],
    },
    {
      company: "UPAY (NGO)",
      position: "Data Management Intern — 2024",
      website: "https://upayngo.org/",
      description: [
        <>
          Streamlined a database of 2,000+ student records, reducing data entry time by 30% through automation and schema alignment.
        </>,
        <>
          Designed an internal dashboard to track project outcomes, used by 5 regional coordinators weekly.
        </>,
        <>Improved data accuracy by 25% through systematic validation and cleanup.</>,
      ],
    },
    {
      company: "Aaruush, SRM University",
      position: "Committee Head — 2022-2025",
      website: "https://www.aaruush.org/",
      description: [
        <>
          Led a team of 20+ members to organize 10+ technical and analytics-focused events, boosting student engagement by over 75%.
        </>,
        <>
          Designed and executed 3 national-level data-centric hackathons, attracting 500+ participants across 15+ colleges.
        </>,
        <>Collaborated with 8+ industry mentors to develop real-world data challenges.</>,
      ],
    },
  ];

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">experience</h1>
      <div className="max-w-2xl">
        {workExperiences.map((work, index) => (
          <WorkExperienceItem
            key={index}
            company={work.company}
            position={work.position}
            website={work.website}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
