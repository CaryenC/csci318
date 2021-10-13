import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div
  style={{
    alignItems: "center",
    paddingTop: "100px",
    flexDirection: "row",
    justifyContent:"center",
    flexWrap: "wrap"

  }}
  >
    <h1>Error 404: Page Not Found</h1>
    <Link to="/">
      Return Home
    </Link>
  </div>
);

export default NotFound;
