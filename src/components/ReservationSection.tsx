import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Check } from "lucide-react";

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

export default function ReservationSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Generate calendar days for current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <section id="reservation" className="py-16 md:py-24 bg-accent/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            RESERVATION
          </span>
          <h2 className="section-title">예약·상담</h2>
          <p className="section-subtitle">
            *전화 안내 후 예약이 확정됩니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left - Calendar */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
              {/* Visit type */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setIsFirstVisit(true)}
                  className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                    isFirstVisit
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  초진
                </button>
                <button
                  onClick={() => setIsFirstVisit(false)}
                  className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                    !isFirstVisit
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  재진
                </button>
              </div>

              {/* Calendar header */}
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-bold">
                  {year}년 {month + 1}월
                </h3>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
                {days.map((day, index) => {
                  const isPast = day !== null && day < today.getDate();
                  const isToday = day === today.getDate();
                  const isSelected = day === selectedDate;
                  
                  return (
                    <button
                      key={index}
                      disabled={day === null || isPast}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                        day === null
                          ? ""
                          : isPast
                          ? "text-muted-foreground/30 cursor-not-allowed"
                          : isSelected
                          ? "bg-primary text-primary-foreground"
                          : isToday
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Time slots */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="border-t border-border pt-4"
                >
                  <h4 className="text-sm font-medium text-muted-foreground mb-3 italic">
                    시간 선택
                  </h4>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right - Form */}
            <div className="p-6 md:p-8 bg-muted/30">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    이름<span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    연락처<span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Agreements */}
                <div className="space-y-3 pt-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded border border-border flex items-center justify-center mt-0.5 bg-background">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      개인정보 이용 동의 <button className="text-primary underline">자세히 보기</button>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded border border-border flex items-center justify-center mt-0.5 bg-background">
                    </div>
                    <span className="text-sm text-muted-foreground">
                      SMS 수신 및 카톡 상담 동의
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors mt-6">
                  예약신청
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
