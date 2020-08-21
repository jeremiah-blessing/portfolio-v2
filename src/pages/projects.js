import React from "react";
import "../stylesheets/projects-page.scss";
import Projects from "../components/projects/projects";
import Head from "next/head";
export default function ProjectsPage({ projects }) {
  return (
    <div className="container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div style={{ margin: "30px 0px" }}></div>

      <Projects projects={projects} />
      <div style={{ margin: "50px 0px" }}></div>
    </div>
  );
}
export async function getStaticProps(context) {
  const response = await fetch(
    "https://jeremiah-blog-v1.herokuapp.com/projects"
  );
  const projects = await response.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
