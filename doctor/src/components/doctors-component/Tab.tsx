import React from "react";

const Tab = (props: any) => {
  const { setState, state } = props;
  return (
    <div className="mt-4 flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap ">
      <p
        onClick={() => setState("about")}
        className={
          state === "about"
            ? "flex items-center flex-shrink-0 cursor-pointer px-5 py-3 border-[#dd2853] space-x-2 border border-b-0 rounded-t-lg"
            : "flex items-center flex-shrink-0 cursor-pointer px-5 py-3 space-x-2 border-b border-[#dd2853]"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>ABOUT</span>
      </p>
      <p
        onClick={() => setState("address")}
        className={
          state === "address"
            ? "flex items-center flex-shrink-0 cursor-pointer px-5 py-3 border-[#dd2853] space-x-2 border border-b-0 rounded-t-lg"
            : "flex items-center flex-shrink-0 cursor-pointer px-5 py-3 space-x-2 border-b border-[#dd2853]"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
        <span>ADDRESS</span>
      </p>
      <p
        onClick={() => setState("reviews")}
        className={
          state === "reviews"
            ? "flex items-center flex-shrink-0 cursor-pointer px-5 py-3 border-[#dd2853] space-x-2 border border-b-0 rounded-t-lg"
            : "flex items-center flex-shrink-0 cursor-pointer px-5 py-3 space-x-2 border-b border-[#dd2853]"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>

        <span>REVIEWS</span>
      </p>
    </div>
  );
};

export default Tab;
