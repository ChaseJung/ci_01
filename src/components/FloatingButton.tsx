import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <a
      href="#"
      className="floating-btn"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-bold">카카오톡 상담</span>
    </a>
  );
}
