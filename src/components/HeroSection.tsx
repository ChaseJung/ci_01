import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  { id: "members", label: "2026 상상멤버스 구독 혜택", active: true },
  { id: "lottery", label: "2026 새해 행운복권" },
  { id: "diet", label: "2026 새해 다이어트 다짐" },
  { id: "cellredm", label: "MPL X 셀르디엠" },
  { id: "mpl", label: "MPL" },
  { id: "ultrampl", label: "울트라mpl" },
  { id: "vmpl", label: "v-mpl" },
];

export default function HeroSection() {
  const [activeProgram, setActiveProgram] = useState("members");

  return (
    <section className="relative pt-24 lg:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />
      
      {/* Main content */}
      <div className="container relative z-10">
        {/* Hero text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 md:py-20"
        >
          <p className="text-muted-foreground mb-4 text-lg">
            다이어트 성공의 지름길! 상상의원에서 알려드리는 다이어트의 모든 것
          </p>
        </motion.div>

        {/* Program tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-1 p-1 bg-muted rounded-xl">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                  activeProgram === program.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                {program.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero banner */}
        <motion.div 
          key={activeProgram}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-gradient-to-br from-primary to-primary-dark"
        >
          {/* Banner content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground p-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
                지방분해 1타 병원
              </h2>
              <p className="text-lg md:text-2xl font-medium opacity-90 mb-6">
                25년 노하우의 MPL 지방분해주사
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-medium transition-colors">
                <Play className="w-5 h-5 fill-current" />
                자세히 보기
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

          {/* Navigation arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === 0 ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
