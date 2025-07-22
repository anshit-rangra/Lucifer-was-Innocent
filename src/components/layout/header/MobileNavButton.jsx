import { Link } from "react-router-dom";

const MobileNavButton = ({ to, icon, text, onClick }) => (
    <Link 
      to={to} 
      onClick={onClick}
      className="relative h-10 w-full flex items-center justify-center border border-red-500 bg-transparent rounded-full text-sm font-medium tracking-wider px-4 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 bg-red-500 top-full group-hover:top-0 transition-all duration-300 rounded-full"></div>
      <span className="relative z-10 text-red-300 group-hover:text-black transition-colors duration-300 flex items-center">
        {icon}
        {text}
      </span>
    </Link>
  );

export default MobileNavButton