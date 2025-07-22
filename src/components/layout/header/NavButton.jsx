const NavButton = ({ to, icon, text }) => (
    <Link 
      to={to} 
      className="relative h-8 px-3 sm:px-4 flex items-center justify-center border border-red-500 bg-transparent rounded-full text-xs font-medium tracking-wider cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 bg-red-500 top-full group-hover:top-0 transition-all duration-300 rounded-full"></div>
      <span className="font-gothic relative z-10 text-red-300 group-hover:text-black transition-colors duration-300 flex items-center">
        {icon}
        {text}
      </span>
    </Link>
  );

export default NavButton