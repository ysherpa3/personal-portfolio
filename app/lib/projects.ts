export type Project = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live: string;
};

export const projects: Project[] = [
  {
    name: "Sherpa Home Improvement",
    description:
      "A website built for a small business using Next.js and TypeScript, styled with Tailwind CSS and animations using Framer Motion.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Frame Motion"],
    live: "https://sherpahomeimprovement.com/",
  },
  {
    name: "Trivia App",
    description:
      "A trivia app built with React, TypeScript, and Chakra UI. It integrates the Open Trivia DB API to serve randomized questions with category and difficulty filtering.",
    tags: ["React", "TypeScript", "Chakra UI", "Open Trivia API"],
    github: "https://github.com/ysherpa3/trivia-app/",
    live: "https://ys-react-trivia.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "A weather app built with React, JavaScript, and Chakra UI. It features location search powered by Algolia and real-time forecasts from the OpenWeatherMap API.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/ysherpa3/weather-app/",
    live: "https://ys-weather-app.netlify.app/",
  },
];
