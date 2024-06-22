# Blog Application - Frontend Internship Task

## Overview

This project is a blog application where users can view a list of blog posts, read individual posts, and submit new posts. The application uses Next.js for server-side rendering and React.js for building UI components.

## Features

1. Home Page: Displays a list of blog posts.
2. Post Detail Page: Shows the details of a single blog post.
3. Create Post Page: A form to create a new blog post.
4. Navigation: Simple navigation between pages.
5. Styling: Basic styling using CSS-in-JS (styled-components or any CSS framework).

### Installation

Clone the repository

```
git clone <repository-url>
cd <repository-name>
```

### Install dependencies

```
npm install
```

### Run the development server

```
npm run dev
```

### Open the application

Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

- pages/: Contains the Next.js pages for home, post detail, and create post.
  -- index.js: Home page displaying a list of blog posts.
  -- [id].js: Post detail page showing the details of a single post.
  -- create.js: Create post page with a form to submit a new blog post.
- components/: Contains reusable React components.
- styles/: Contains styled-components for styling the application.

## API Integration

This project uses the JSONPlaceholder API to fetch blog posts data. The API endpoint used is https://jsonplaceholder.typicode.com/posts.

## State Management

React's built-in state management is used to handle form inputs and API data fetching.

## Styling

Styled-components is used for CSS-in-JS styling. It ensures the application is responsive and visually appealing.
