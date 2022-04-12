import React from 'react';
interface CardProps {
  name: string;
  tokenSymbol: string;
  tokenDecimals: string;
  status: boolean;
  icon: string;
}
const Card = ({ name,icon, tokenDecimals, tokenSymbol, status }: CardProps) => {
  return (
    <div className="w-42 h-56 p-2 drop-shadow-xl bg-white flex flex-col justify-evenly items-center my-1">
      <span className="h-full flex flex-col justify-start items-center text-xl sm:font-normal md:font-semibold text-gray-700">
        <img
          width="90"
          height="90"
          src={`https://sub.id/images/${icon}`}
          alt="icon"
        />
       <h5 className='ml-4'>
          { name}
       </h5>
      </span>
      <span className="w-auto h-full flex flex-row justify-start items-center  text-center text-xl sm:font-normal md:font-semibold text-gray-700">
       <h5 className='mx-2 flex-1 text-center'>Connected</h5>
        <button
          className={`w-4 h-4 ${
            status ? 'bg-green-200 ' : 'bg-red-500 '
          }`}
        >
        </button>
      </span>
    </div>
  );
};

export default React.memo(Card);
