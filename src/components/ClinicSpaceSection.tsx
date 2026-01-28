import { motion } from "framer-motion";

const spaces = [
  { id: 1, name: "로비", description: "편안한 첫인상" },
  { id: 2, name: "대기실", description: "쾌적한 휴식 공간" },
  { id: 3, name: "인바디실", description: "정밀 체성분 분석" },
  { id: 4, name: "3D 전신스캐너실", description: "입체적 바디 분석" },
  { id: 5, name: "탈의실", description: "프라이빗 공간" },
];

export default function ClinicSpaceSection() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background overflow-hidden">
      <div className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            CLINIC SPACE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            신사 상상의원 <span className="text-primary">공간 소개</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            최고의 시설과 프라이빗한 환경에서 편안한 시술을 경험하세요
          </p>
        </motion.div>
      </div>

      {/* Scrolling space images */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 animate-[marquee_40s_linear_infinite]"
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6">
              {spaces.map((space) => (
                <div
                  key={`${setIndex}-${space.id}`}
                  className="flex-shrink-0 w-80 h-60 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden group"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{space.name}</h3>
                    <p className="text-white/70 text-sm">{space.description}</p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Location */}
      <div className="container mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">오시는 길</h3>
              <div className="space-y-3 text-white/80">
                <p className="flex items-start gap-3">
                  <span className="text-primary">📍</span>
                  서울시 강남구 도산대로131, 2,3,4층
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary">📞</span>
                  1666-2727
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary">🚇</span>
                  신사역 8번 출구 도보 3분
                </p>
              </div>
              <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary-dark transition-colors">
                지도 보기
              </button>
            </div>
            <div className="h-64 rounded-2xl bg-white/10 flex items-center justify-center">
              <span className="text-white/40">지도 영역</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
