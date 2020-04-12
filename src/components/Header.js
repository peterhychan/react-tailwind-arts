import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" class="font-semibold text-xl tracking-tight">
            React-Tailwind-Arts
          </a>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="https://reactjs.org/"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              React
            </a>
            <a
              href="https://tailwindcss.com/docs/height/"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Tailwind
            </a>
            <a
              href="https://pixabay.com/api/docs/"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Pixabay Image API
            </a>
          </div>
          <div>
            <a
              href="https://github.com/peterhychan/react-tailwind-arts"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Source Code
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
