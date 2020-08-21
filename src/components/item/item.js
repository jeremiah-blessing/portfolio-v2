import React from "react";
import "./item.scss";
import * as Icon from "react-feather";
export default function Item(props) {
  // Extract Props
  const { title, description, link, color_pr, color_bg, icon, tags } = props;

  // Create Icon
  const IconTag = Icon[icon];

  return (
    <div className="project-item" style={{ backgroundColor: color_bg }}>
      <h1 className="project-item-title" style={{ color: color_pr }}>
        {title}
      </h1>
      <p className="project-item-description" style={{ color: color_pr }}>
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        className="product-item-view"
        style={{ backgroundColor: color_pr, color: color_bg }}
      >
        View{" "}
        <Icon.ExternalLink
          size={18}
          style={{ verticalAlign: "middle", marginLeft: 5 }}
        />
      </a>

      <IconTag
        style={{
          marginTop: "auto",
          marginLeft: "auto",
          marginRight: 10,
          marginBottom: 10,
        }}
        color={color_pr}
      />
    </div>
  );
}
