<h1 align="center">
    <img
        src="public/logo/logo.png"
        alt="Pizzeria Bei Toni"
        style=
        "
            width: 250px;
            background: #fff9f0;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid rgba(0,0,0,0.33);
        "
    />
</h1>

<h3 align="center">
  (pizzeria-bei-toni.com)
</h3>

<p align="center">
    Thi is the restaurant's official website. It is built with the
    <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next JS</a>
    Framework and is deployed using an FTP solution.
</p>


# Tech Stack

This project was built with the following technologies:
- [React](https://reactjs.org)
- [Next JS](https://nextjs.org)
- [Material UI](https://mui.com)


# Project Structure

For maintainability reasons, this project is structured in a very clear
and intuitive manner:
- Components are stored each in their own directories under `/src/components`.
  This includes, but may not be limited to:
    - The component itself
    - Styles for the component
    - Framer-Motion animations
- Pages are stored under `/src/pages`, in accordance with the Next JS
  directory structure.
- More general styles and animations, as well as styles and animations for
  individual pages, are stored under `/src/styles`


# Installation

1. First, install all dependencies:

```shell
yarn install
```

2. Already, you can run this project on your local machine!

```shell
yarn dev
```

3. Alternatively, you can first build this project and then run the
   compiled code:

```shell
yarn build && yarn start
```

# Deployment

This website is deployed using an FTP solution. To deploy, follow these
steps:

1. Update credentials in `.env` to connect to the FTP server.

2. Execute the following command:

```shell
yarn deploy
```

If the credentials were correct, the website should be deployed successfully.