import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black p-16 text-[#c3d740]">
      <div className="flex animate-scroll">
        <span className="text-6xl px-8">
          - LET&apos;S TALK - &nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp;GET IN TOUCH&nbsp;  - LET&apos;S TALK - &nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp;GET IN TOUCH&nbsp;  - LET&apos;S TALK - &nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp;GET IN TOUCH&nbsp;  - LET&apos;S TALK - &nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp;GET IN TOUCH&nbsp;  - LET&apos;S TALK - &nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp;GET IN TOUCH&nbsp;  - LET&apos;S TALK - &nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp; - GET IN TOUCH - &nbsp; - LET&apos;S TALK&nbsp;GET IN TOUCH&nbsp;
        </span>
      </div>
    </div>
  );
};

export default Marquee;
