const SocialIcon = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );

export default SocialIcon