export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "CRWN Clothing",
    techs: ["ReactJS (NextJS)", "Redux", "Firebase", "SASS"],
    link: "https://github.com/rbbalestrin/crwn-clothing",
  },
  {
    title: "Chirp",
    techs: ["Next.js", "Prisma", "tRpc", "Tailwind CSS"],
    link: "https://github.com/rbbalestrin/chirp",
  },
  {
    title: "This website!",
    techs: ["Astro", "React", "Vercel", "Tailwind CSS"],
    link: "https://github.com/rbbalestrin/astro-portfolio",
  },
  {
    title: "Falconia Design",
    techs: ["Next.js", "Three.js", "GLTF"],
    link: "https://github.com/rbbalestrin/falconia-design",
  },
];

export default projects;
