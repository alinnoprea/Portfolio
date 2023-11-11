import React, { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className=" bg-primary h-screen w-screen flex items-center justify-center snap-center">
        <h1 className="text-secondary border-black w-5/6 text-4xl flex flex-wrap text-center animate-fade-right animate-once animate-ease-in-out">
          PROJECTS LIST
        </h1>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
