import React from "react";
import "./component.scss";

const ComponentState = (props: {
  name: string | undefined;
  link: string | undefined;
}) => {
  return (
    <>
      <a className="componentLink" href={props.link}>
        {props.name}
      </a>
    </>
  );
};

export default ComponentState;
