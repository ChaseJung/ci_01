import { motion } from "framer-motion";

const beforeAfterData = [
  { before: "72kg", after: "57kg", area: "전신", duration: "10주" },
  { before: "85kg", after: "68kg", area: "복부/허벅지", duration: "12주" },
  { before: "65kg", after: "53kg", area: "팔뚝/등", duration: "8주" },
  { before: "78kg", after: "62kg", area: "전신", duration: "14주" },
  { before: "60kg", after: "50kg", area: "허벅지", duration: "6주" },
  { before: "92kg", after: "74kg", area: "전신", duration: "16주" },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            100% 솔직후기 <span className="text-primary">상상이기에 가능합니다!</span>
          </h2>
          <p className="section-subtitle">
            실제 고객들의 전후 비교 사진과 후기를 확인해보세요
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {beforeAfterData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="ba-card group"
            >
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40" />
              
              {/* Silhouette visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg font-bold line-through opacity-60">{item.before}</span>
                    <span className="text-2xl">→</span>
                    <span className="text-2xl font-black text-secondary">{item.after}</span>
                  </div>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">{item.before} → {item.after}</p>
                  <p className="text-sm text-white/80">{item.area} | {item.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite]">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4 mx-4">
                {beforeAfterData.map((item, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 w-48 h-64 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <p className="text-2xl font-black text-primary">{item.after}</p>
                      <p className="text-muted-foreground text-sm">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            시술후기 더보기
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
