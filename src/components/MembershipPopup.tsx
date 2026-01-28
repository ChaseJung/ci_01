import { X, Gift, Crown, Cake, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface MembershipPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const benefits = [
  { 
    id: 1, 
    label: "혜택 01", 
    title: "무조건 할인", 
    value: "10%", 
    subtitle: "COUPON",
    icon: null 
  },
  { 
    id: 2, 
    label: "혜택 02", 
    title: "처방전 FREE", 
    value: "FREE", 
    subtitle: "+",
    icon: Plus 
  },
  { 
    id: 3, 
    label: "혜택 03", 
    title: "생일 쿠폰", 
    value: null, 
    subtitle: null,
    icon: Cake 
  },
  { 
    id: 4, 
    label: "혜택 04", 
    title: "멤버스 시술권", 
    value: null, 
    subtitle: null,
    icon: Crown 
  },
];

export default function MembershipPopup({ isOpen, onClose }: MembershipPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-[101] bg-gradient-to-b from-white to-accent rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/30">
              <div className="flex items-center gap-2">
                <img src={logo} alt="상상의원" className="h-6" />
                <span className="font-semibold text-foreground">상상의원</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">기간 : ~26.01.31 | 대상 : 상상의원 고객</span>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 text-center">
              {/* Badge */}
              <div className="inline-block px-6 py-2 mb-6 rounded-full bg-foreground text-background font-medium">
                2026 SANGSANG MEMBERS
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-4">
                상상멤버스
              </h2>

              {/* Subtitle */}
              <div className="inline-block px-4 py-2 mb-4 rounded-full bg-secondary text-secondary-foreground font-medium">
                멤버십 혜택가: 30만원
              </div>

              {/* Main value */}
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                최대 <span className="text-4xl md:text-5xl text-primary">170</span>만원의 혜택!
              </p>

              {/* Benefits grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={benefit.id} className="relative">
                    {/* Label */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-full whitespace-nowrap z-10">
                      {benefit.label}
                    </div>
                    
                    {/* Card */}
                    <div className="pt-4 pb-4 px-4 bg-primary rounded-2xl text-primary-foreground">
                      <div className="h-20 flex items-center justify-center">
                        {benefit.value ? (
                          <div className="text-center">
                            <span className="text-3xl font-black">{benefit.value}</span>
                            {benefit.subtitle && (
                              <span className="block text-xs mt-1">{benefit.subtitle}</span>
                            )}
                          </div>
                        ) : benefit.icon === Cake ? (
                          <span className="text-5xl">🎂</span>
                        ) : benefit.icon === Crown ? (
                          <span className="text-5xl">👑</span>
                        ) : (
                          <Plus className="w-10 h-10" />
                        )}
                      </div>
                      <p className="font-semibold mt-2">{benefit.title}</p>
                    </div>

                    {/* Plus connector */}
                    {index < benefits.length - 1 && (
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                        <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-bold">
                          +
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={onClose}
                className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                자세히 보기
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
