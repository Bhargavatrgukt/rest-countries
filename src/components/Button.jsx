import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Button = ({ content }) => {
  return (
    <button className="bg-white text-sm  text-very-dark-blue  my-3 mb-16 py-2 px-6 shadow-lg rounded dark:bg-darkBlue dark:text-white">
      <Link to="/" className="flex items-center">
        <ArrowLeft size={28} strokeWidth={1.25} className="mr-2" />
        <strong className="text-lg font-light">{content}</strong>
      </Link>
    </button>
  );
};



export default Button;
