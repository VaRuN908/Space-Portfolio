# Gemini Code Companion Report

## Project: Space Portfolio

This report provides a detailed overview of the Space Portfolio project, a personal portfolio website built with Next.js.

## Project Structure

The project is organized into the following directories:

- **app:** Contains the main application logic, including the layout and page components.
- **components:** Contains the reusable React components used throughout the application.
- **constants:** Contains the constants used in the application, such as the social media links and skills data.
- **public:** Contains the static assets used in the application, such as images and videos.
- **utils:** Contains utility functions, such as the motion variants for Framer Motion.

### `app` Directory

- **`layout.tsx`:** The main layout of the application. It includes the `StarCanvas` for a background, the `Navbar`, the main content (`children`), and the `Footer`.
- **`page.tsx`:** The main page of the application. It imports and renders the `Hero`, `Skills`, an `Encryption` component, and `Projects` components.
- **`globals.css`:** Contains the global CSS styles for the application.

### `components` Directory

The `components` directory is further divided into two subdirectories: `main` and `sub`.

#### `main` Directory

- **`Navbar.tsx`:** A responsive navigation bar with links to "About me", "Skills", and "Projects" sections. It also includes social media icons.
- **`Hero.tsx`:** A container for the `HeroContent` component and a background video.
- **`Skills.tsx`:** Displays a list of skills using the `SkillDataProvider` component.
- **`Encryption.tsx`:** A visually-focused component that highlights the project's performance and security aspects.
- **`Projects.tsx`:** Displays a list of projects using the `ProjectCard` component.
- **`Footer.tsx`:** The footer of the page, containing social media links, community links, and some information about the author.
- **`StarBackground.tsx`:** A 3D star background created with Three.js and React Three Fiber.

#### `sub` Directory

- **`HeroContent.tsx`:** Contains the main title, a short bio, and a "Learn More!" button. It also has an image.
- **`SkillDataProvider.tsx`:** A component that renders a skill with an image and a name.
- **`SkillText.tsx`:** A presentational component with some text and animations.
- **`ProjectCard.tsx`:** A card component that displays a project with an image, a title, and a description.

### `constants` Directory

- **`index.ts`:** Contains the constants used in the application, such as the social media links and skills data.

### `public` Directory

This directory contains all the static assets like images, videos, and icons.

### `utils` Directory

- **`motion.ts`:** Contains the motion variants for Framer Motion.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered and statically generated web applications.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Framer Motion:** A React library for creating animations.
- **Three.js:** A 3D graphics library for creating and displaying animated 3D computer graphics in a web browser.
- **React Three Fiber:** A React renderer for Three.js.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **ESLint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Husky:** A tool that makes it easy to use Git hooks.
- **Lint-staged:** A tool that runs linters on staged files in Git.
- **Prettier:** An opinionated code formatter.
