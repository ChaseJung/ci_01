import logo from "@/assets/logo.png";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "온라인 상담", href: "#" },
  { label: "개인정보취급방침", href: "#" },
  { label: "이용약관", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="상상의원" className="h-8 brightness-0 invert" />
              <span className="font-bold text-xl">상상의원</span>
            </div>
            <div className="space-y-1 text-sm text-white/60">
              <p>주소 : 서울시 강남구 도산대로131, 2,3,4층</p>
              <p>사업자등록번호 199-28-01676 대표자 한용운</p>
              <p>Copyright(c) 2017 SANGSANG CLINIC. All rights reserved.</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#FAE100] text-[#3C1E1E] flex items-center justify-center hover:bg-[#F5D900] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
