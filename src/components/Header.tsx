import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "원조지방분해주사 MPL", href: "#mpl" },
  { label: "프로그램", href: "#programs", hasDropdown: true },
  { label: "실뻬보고서", href: "#results", badge: "성공사례" },
  { label: "예약·상담", href: "#reservation" },
  { label: "병원소개", href: "#about" },
  { label: "제증명·비급여", href: "#certificates" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="hidden lg:block bg-muted/50 py-1.5">
        <div className="container flex justify-end items-center gap-6 text-sm text-muted-foreground">
          <span>로그인</span>
          <span>무지는 것</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="상상의원" className="h-8 lg:h-10" />
            <span className="font-bold text-lg lg:text-xl text-foreground">상상의원</span>
          </a>

          {/* Branch selector (desktop) */}
          <div className="hidden lg:flex items-center gap-2 ml-4 px-3 py-1.5 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors">
            <span className="text-sm text-muted-foreground">신사본점</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link flex items-center gap-1"
              >
                {item.label}
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-medium bg-secondary text-secondary-foreground rounded">
                    {item.badge}
                  </span>
                )}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ))}
          </nav>

          {/* Phone & Kakao (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">무료전화상담</span>
              <a href="tel:1666-2727" className="font-bold text-lg text-foreground">1666.2727</a>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAE100] text-[#3C1E1E] font-medium text-sm hover:bg-[#F5D900] transition-colors">
              카카오톡상담
              <span className="text-lg">💬</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-medium bg-secondary text-secondary-foreground rounded">
                      {item.badge}
                    </span>
                  )}
                </span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:1666-2727" className="font-bold text-lg">1666.2727</a>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#FAE100] text-[#3C1E1E] font-medium">
                카카오톡상담
                <span className="text-lg">💬</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
