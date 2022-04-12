import React from 'react';
const Header = () => {
  return (
    <div className="w-full h-full flex justify-start p-2  items-center">
      <span className="w-3/12 px-6 text-xl sm:font-normal md:font-semibold text-gray-700">
        Name
      </span>
      <span className="w-3/12 text-center  text-xl sm:font-normal md:font-semibold text-gray-700">
        Token Symbol
      </span>
      <span className="w-3/12 text-center  text-xl sm:font-normal md:font-semibold text-gray-700">
        Token Decimal
      </span>
      <span className="w-3/12 text-center text-xl sm:font-normal md:font-semibold text-gray-700">
        status
      </span>
    </div>
  );
};

export default Header;
