import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
   return (
      <div className="error404">
         <h1>Oops!</h1>
         <h2>Error 404 - PAGE NOT FOUND</h2>
         <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
         <Link to="/"><button>Go Back To Home Page</button></Link>
      </div>
   );
}

export default Error404;