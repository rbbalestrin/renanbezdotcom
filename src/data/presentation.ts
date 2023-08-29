type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "renanbbez@gmail.com",
  title: "Hello, I'm an indie app developer based in Brazil! 👋",
  // profile: "/profile.webp",
  description:
  "Hi there, I'm **Renan Bez** aka **themir**. I'm 19 y/o and I'm a CS undergrad student. I like **fighting games**, **reading books** and **building things**. I enjoy **language design**, **web development** and I live on the terminal. Some of my favorite techs are **Rust**, **Svelte**, **Threejs**.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/renan-bez-911525257/",
    },
    {
      label: "Github",
      link: "https://github.com/rbbalestrin",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/rb.balestrin",
    },
    {
      label: "Spotify",
      link: "https://open.spotify.com/user/4ipol6ipx5csg6hanjp6tclpk?si=e682e94875194d9d",
    },
  ],
};

export default presentation;
