type Social = {
  label: string;
  link: string;
};

type Apresentacao = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Apresentacao = {
  mail: "renanbbez@gmail.com",
  title: "Olá, sou um desenvolvedor indie sediado no Brasil!",
  // perfil: "/perfil.webp",
  description:
    "Olá, sou **Renan Bez**, também conhecido como **themir**. Tenho 19 anos e sou estudante de graduação em Ciência da Computação. Gosto de **jogos de luta**, **ler livros** e **criar coisas**. Tenho interesse em **web design**, **desenvolvimento web** e praticamente vivo no terminal. Algumas das minhas tecnologias favoritas são **Rust**, **Svelte** e **Three.js**.",
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
