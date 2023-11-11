// Home.jsx
import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className=" bg-primary h-screen w-screen flex items-center justify-center snap-center">
        <div className="animate-fade-right animate-once animate-ease-in-out text-secondary text-9xl text-center  border-black w-5/6 ">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Home";

export default Contact;
