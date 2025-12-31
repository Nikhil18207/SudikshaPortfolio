"use client";
import React, { useState, useRef, useEffect } from "react";

interface LinkWithTooltipProps {
  href?: string;
  text: string;
  description: React.ReactNode;
  imageUrl?: string;
  tooltipPosition?: "left" | "right";
}

// Component for linky words with hover descriptions
const LinkWithTooltip: React.FC<LinkWithTooltipProps> = ({
  href,
  text,
  description,
  imageUrl,
  tooltipPosition = "left",
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse events for hover
  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsTooltipVisible(true);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 100);
  };

  // Handle clicks for mobile
  const handleClick = (e: React.MouseEvent) => {
    if (!href && window.innerWidth < 768) {
      e.preventDefault();
      setIsTooltipVisible(!isTooltipVisible);
    }
  };

  // Handle clicks outside to close tooltip on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsTooltipVisible(false);
      }
    };

    // Add event listener only when tooltip is visible
    if (isTooltipVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Clear any lingering timeouts when component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTooltipVisible]);

  return (
    <span ref={containerRef} className="relative inline-block">
      <a
        ref={linkRef}
        href={href}
        target={href ? "_blank" : undefined}
        className="text-[var(--muted-foreground)] text-[15px] decoration-[1px] underline underline-offset-3 decoration-[var(--muted-foreground)] cursor-pointer group inline-flex items-center"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onClick={handleClick}
      >
        {text}
        {href && (
          <svg
            className="w-3 h-3 ml-0.5 inline-block"
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
        )}
      </a>

      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-10 w-64 p-3 shadow-lg bg-[var(--tooltip)] border border-[var(--tooltip-border)] rounded text-sm text-[var(--tooltip-foreground)] ${
            tooltipPosition === "right" ? "right-0 bottom-8" : "left-0 top-8"
          }`}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          {imageUrl && (
            <div className="w-full h-40 overflow-hidden rounded mb-2">
              <img
                src={imageUrl}
                alt="tooltip illustration"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="space-y-1">{description}</div>
          <span className={`absolute w-4 h-4 bg-[var(--tooltip)] transform rotate-45 ${
            tooltipPosition === "right"
              ? "right-3 -bottom-2 border-b border-r border-[var(--tooltip-border)]"
              : "left-3 -top-2 border-t border-l border-[var(--tooltip-border)]"
          }`}></span>
        </div>
      )}
    </span>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-[var(--link)] text-sm hover:underline flex items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <svg
        className="w-3 h-3 ml-0.5"
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
  );
};

const Hero: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
        hi, i&apos;m sudiksha.
      </h1>
      <div className="max-w-2xl">
        <p className="mb-4 text-base text-[var(--foreground)]">
          i turn data into insights.
        </p>

        <p className="mb-8 text-base text-[var(--foreground)]">
          <LinkWithTooltip
            text="data analytics"
            description="SQL, Python (Pandas, NumPy, Matplotlib), Power BI, Excel"
          />
          ,{" "}
          <LinkWithTooltip
            text="machine learning"
            description="Supervised Learning, Unsupervised Learning, CNN, Ensemble Methods"
          />
          ,{" "}
          <LinkWithTooltip
            text="electronics"
            description="Arduino, Microcontrollers, PCB Design, Circuit Analysis, Signal Processing"
          />
          {" "}— whatever extracts the story from the numbers.
        </p>

        <p className="mb-4 text-base text-[var(--foreground)]">
          was a{" "}
          <LinkWithTooltip
            text="business analytics intern"
            description="Analyzed ERP datasets, built Power BI dashboards, delivered insights for planning decisions"
          />
          {" "}at Unikul Solutions. also interned at{" "}
          <LinkWithTooltip
            text="UPAY NGO"
            description="Streamlined database of 2,000+ student records, designed internal dashboards"
          />
          . <br />
          built dashboards. cleaned data. drove decisions.
        </p>

        <p className="mb-4 text-base text-[var(--foreground)]">
          led a team of 20+ as{" "}
          <LinkWithTooltip
            text="committee head at Aaruush"
            description={
              <div className="space-y-2">
                <p>
                  SRM University&apos;s technical fest - organized 10+ events and 3 national-level hackathons.
                </p>
                <div className="mt-2 pt-2 border-t border-[var(--tooltip-border)]">
                  <div className="font-medium mb-1">Highlights:</div>
                  <p className="text-xs">• 500+ participants across 15+ colleges</p>
                  <p className="text-xs">• 75%+ boost in student engagement</p>
                  <p className="text-xs">• Collaborated with 8+ industry mentors</p>
                </div>
              </div>
            }
          />
          .
        </p>

        <div className="my-8">
          <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
            SPECIALIZE IN:
          </div>
          <p className="text-base text-[var(--foreground)]">
            data visualization, EDA, feature engineering.
            <br />
            Power BI dashboards, sentiment analysis, time series forecasting.
            <br />
            technical writing & research papers.
          </p>
        </div>

        <p className="mb-8 text-base text-[var(--foreground)]">
          currently pursuing BTech in{" "}
          <LinkWithTooltip
            text="ECE at SRM University"
            description="Electronics and Communication Engineering | CGPA: 9.09"
          />
          . off-court, i analyze data. on-court, i play{" "}
          <LinkWithTooltip
            text="basketball"
            description="competitive player since school"
            imageUrl="/moments/Basketball.jpeg"
            tooltipPosition="right"
          />
          .
        </p>

      </div>
      <div className="flex gap-5 mt-8">
        <SocialLink href="https://github.com/ss5613" label="GitHub" />
        <SocialLink
          href="https://www.linkedin.com/in/sudiksha-samanta/"
          label="LinkedIn"
        />
        <SocialLink
          href="https://drive.google.com/file/d/1LgOndO6twPiasHPlNGfPgg1MjR6rOX2Y/view?usp=sharing"
          label="Resume"
        />
      </div>
    </div>
  );
};

export default Hero;
