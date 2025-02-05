import { FaGlobe, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  { href: "https://bethomazzi.github.io/portfolio/", icon: <FaGlobe /> },
  { href: "https://github.com/bethomazzi", icon: <FaGithub /> },
  { href: "https://www.instagram.com/bethomazzi/", icon: <AiFillInstagram /> },
  { href: "https://api.whatsapp.com/send?phone=5584996677053", icon: <IoLogoWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-general font-light md:text-left ">
          <a className="hover:underline  cursor-pointer" href="https://bethomazzi.github.io/portfolio/" target="_blank">©Bernardo Thomazzi</a> 2025. Todos os direitos reservados
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="font-general text-center text-sm font-light hover:underline md:text-right"
        >
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;