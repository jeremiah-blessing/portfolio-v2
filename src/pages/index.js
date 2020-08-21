import React from "react";
import "../stylesheets/index.scss";
import Head from "next/head";
export default function Index() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <h1>Hello there!</h1>
      <a href="/projects">Go to Projects page.</a>
    </div>
  );
}
