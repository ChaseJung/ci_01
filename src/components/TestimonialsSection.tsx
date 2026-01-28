import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "학창시절부터 늘 실패했던 다이어트",
    subtitle: "이번엔 꼭 성공해서 셀카도 마음껏 찍어보고 싶어요!",
    weight: "72kg → 57kg",
    duration: "10주",
    bgColor: "bg-gradient-to-br from-pink-400 to-pink-500",
  },
  {
    id: 2,
    title: "장민호가 출연한 화제의 예능 [엄마는 예뻤다]",
    subtitle: "천안 딸 40일만에 16kg 감량 성공!",
    weight: "65kg → 49kg",
    duration: "40일",
    bgColor: "bg-gradient-to-br from-primary to-primary-dark",
  },
  {
    id: 3,
    title: "비만에서 벗어나 멋진 엄마가 되고 싶어요!",
    subtitle: "산후비만 완전 정복했어요!",
    weight: "75kg → 58kg",
    duration: "12주",
    bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-500",
  },
  {
    id: 4,
    title: "너무 바쁜 직장 때문에 포기했던 다이어트",
    subtitle: "저도 예쁜 몸매가 되고 싶어요",
    weight: "68kg → 55kg",
    duration: "8주",
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "65kg → 53kg, 단 10주만에 12kg 감량!",
    subtitle: "이선희님의 다이어트 리얼후기!",
    weight: "65kg → 53kg",
    duration: "10주",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h2 className="section-title !text-left !mb-2">
              SANG SANG TV
            </h2>
            <p className="text-muted-foreground text-lg">
              다이어트 성공의 지름길! 상상의원에서 알려드리는 다이어트의 모든 것
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scrollable testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-[max(1rem,calc((100vw-1400px)/2+1rem))]"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`testimonial-slide ${testimonial.bgColor} relative group`}
          >
            {/* Content */}
            <div className="p-6 h-full flex flex-col min-h-[400px]">
              {/* Badge */}
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 w-fit">
                [상상의원]
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {testimonial.title}
              </h3>
              <p className="text-white/80 text-sm mb-auto">
                "{testimonial.subtitle}"
              </p>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/60 text-xs mb-1">체중 변화</p>
                    <p className="text-white font-bold text-lg">{testimonial.weight}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-xs mb-1">소요 기간</p>
                    <p className="text-white font-bold text-lg">{testimonial.duration}</p>
                  </div>
                </div>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <button className="p-4 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-colors">
                  <Play className="w-8 h-8 text-white fill-current" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
