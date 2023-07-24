import React, { children } from "react";
import { CSSTransition } from 'react-transition-group';
import { useLocation } from "react-router-dom";
import '../styles/FadeTransition.css';

function FadeTransition({ children }) {
  // Access the location prop using useLocation hook
  const location = useLocation();

  return (
    <CSSTransition
      key={location.key}
      classNames={"fade"}
      timeout={{ enter: 500, exit: 300 }}
    >
      <div>{children}</div>
    </CSSTransition>
  );
}

export default FadeTransition;
