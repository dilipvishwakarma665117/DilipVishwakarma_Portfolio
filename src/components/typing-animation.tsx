"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const TypingAnimation = () => {
  return (
    <div className="text-lg md:text-xl text-foreground/80 font-medium">
      <Typewriter
        options={{
          strings: [
            "Quality Engineer Analyst",
            "Software Tester",
            "Turning Bugs into Quality",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypingAnimation;
