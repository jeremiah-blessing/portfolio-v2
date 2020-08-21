import React from "react";
import Item from "../item/item";
import "./projects.scss";

export default function Projects({ projects }) {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-items">
        {projects.map((pro) => (
          <Item key={pro.id} {...pro} />
        ))}
      </div>
      <h1 className="amm">and much more..</h1>
    </div>
  );
}
