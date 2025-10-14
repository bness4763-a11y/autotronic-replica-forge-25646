
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
  { label: "ACCUEIL", link: "#" },
  { label: "PROGRAMMATION", link: "#programmation", dropdown: ["Reprogrammation Moteur", "Stage 1 & Stage 2", "Conversion E85", "Gestion Moteur"] },
  { label: "RÉPARATION", link: "#reparation", dropdown: ["Réparation Moteur", "Réparation Calculateur", "Solution FAP/EGR", "Diagnostic Auto"] },
  { label: "LOCALISATION", link: "#contact" }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primaryRed shadow-xl">
      <nav className="container flex items-center justify-between py-4 lg:py-6">
        <Logo />
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-white text-sm font-black tracking-wider uppercase">
          {menuItems.map((item, i) =>
            item.dropdown ? (
              <li className="relative group" key={item.label}>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded transition-all duration-200">
                  {item.label}
                  <ChevronDown size={16} />
                </button>
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-primaryRed font-bold rounded-lg shadow-2xl z-40 min-w-[240px] border-t-4 border-primaryRed">
                  {item.dropdown.map((sub: string) => (
                    <li key={sub}>
                      <a href={item.link} className="block px-6 py-3 hover:bg-gray-100 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg">{sub}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <a href={item.link} className="px-4 py-2 hover:bg-white/10 rounded transition-all duration-200">{item.label}</a>
              </li>
            )
          )}
        </ul>
        
        {/* Phone Number & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="tel:0629631976"
            className="bg-white text-primaryRed px-6 py-3 rounded-lg font-black hover:bg-gray-100 transition-colors duration-200"
          >
            📞 06 29 63 19 76
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primaryRed border-t border-white/20">
          <div className="container py-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="block text-white py-3 px-4 hover:bg-white/10 rounded transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((sub: string) => (
                        <li key={sub}>
                          <a
                            href={item.link}
                            className="block text-white/80 py-2 px-4 text-sm hover:bg-white/10 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="tel:0629631976"
                  className="block bg-white text-primaryRed py-3 px-4 rounded-lg font-bold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📞 06 29 63 19 76
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
