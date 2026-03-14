import { FiArrowUpRight } from "react-icons/fi";

type TryItOutProps = {
  className?: string;
};

function TryItOut({ className }: TryItOutProps) {
  return (
    <button
      className={`flex justify-around items-center w-max h-max rounded-md bg-green-500 px-4 py-2 ${className && className}`}
    >
      <span className="block text-black mr-2">Essayer l&rsquo;application</span>
      <div className="bg-black/60 p-1.5 rounded-lg">
        <FiArrowUpRight />
      </div>
    </button>
  );
}

export default TryItOut;
