import { useEffect, useState } from "react";
import { HelpCircle, Home, Info, Users } from "lucide-react";
import { NavLink } from "./ui/NavLink";

const menuItems = [
  { label: "Beranda", href: "#hero", icon: <Home size={18} /> },
  { label: "Tentang", href: "#about", icon: <Info size={18} /> },
  { label: "Narasumber", href: "#speakers", icon: <Users size={18} /> },
  { label: "FAQ", href: "#faq", icon: <HelpCircle size={18} /> },
];

export const Header = () => {
  const [currentPath, setCurrentPath] = useState("#hero");

  useEffect(() => {
    const updateCurrentPath = () => {
      setCurrentPath(window.location.hash || "#hero");
    };

    updateCurrentPath();
    window.addEventListener("hashchange", updateCurrentPath);

    return () => {
      window.removeEventListener("hashchange", updateCurrentPath);
    };
  }, []);

  return (
    <header className="bg-white px-6 py-2 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="Logo Invofest"
            className="h-16"
          />
        </div>
        <div className="nav flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
              isActive={item.href === currentPath}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
