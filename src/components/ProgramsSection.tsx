import { motion } from "framer-motion";
import { Syringe, Sparkles, Target, Zap } from "lucide-react";

const programs = [
  {
    id: "mpl",
    title: "MPL 지방분해주사",
    subtitle: "원조 지방분해 25년 노하우",
    description: "서울대 의료진이 직접 개발한 MPL 솔루션으로 부위별 맞춤 시술",
    icon: Syringe,
    color: "from-primary to-primary-dark",
    features: ["전신감량", "부위별감량", "체질별감량"],
  },
  {
    id: "ultra",
    title: "울트라 MPL",
    subtitle: "더 빠르고 강력한 효과",
    description: "고농축 MPL로 더 빠른 지방 분해와 탄력있는 바디라인 완성",
    icon: Zap,
    color: "from-secondary to-orange-600",
    features: ["고농축 포뮬러", "빠른 효과", "탄력 케어"],
  },
  {
    id: "vmpl",
    title: "V-MPL",
    subtitle: "얼굴 윤곽 전문",
    description: "얼굴 지방 타겟팅으로 갸름한 V라인 완성",
    icon: Target,
    color: "from-purple-500 to-purple-700",
    features: ["이중턱", "볼살", "광대 라인"],
  },
  {
    id: "cellredm",
    title: "MPL X 셀르디엠",
    subtitle: "프리미엄 콤보 케어",
    description: "지방분해와 피부 탄력을 동시에 케어하는 프리미엄 프로그램",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-600",
    features: ["지방분해", "피부탄력", "바디라인"],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            PROGRAMS
          </span>
          <h2 className="section-title">
            상상의원 <span className="text-primary">시술 프로그램</span>
          </h2>
          <p className="section-subtitle">
            25년 노하우로 개발된 맞춤형 지방분해 솔루션
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="program-card group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {program.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {program.subtitle}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {program.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {program.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-medium text-primary group-hover:underline">
                  자세히 보기
                </span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
