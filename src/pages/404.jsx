import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout404';
import SEO from '../components/seo';

const classes = {
  header: 'text-6xl font-bold text-gray-600',
  title: 'text-3xl text-gray-600',
  body: 'text-gray-600',
  button: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded',
};

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <h1 className={classes.header}>404</h1>
    <h1 className={classes.title}>UH-OH! You're lost.</h1>
    <p className={classes.body}>The page you're looking for doesn't seem to exist. How you got here is a real mystery🕵🏽.</p>
    <br/>
    <p>      
      <Link className={classes.button} to="/">      
        Back to safety
      </Link>
      .
    </p>
  </Layout>
);

export default NotFoundPage;
