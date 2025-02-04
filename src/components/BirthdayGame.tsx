
import { useState } from "react";
import { Heart, X, MailOpen, HeartHandshake, Sparkles } from "lucide-react";

export const BirthdayGame = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);

  const correctDate = {
    day: "24",
    month: "03",
    year: "51",
  };

  const checkDate = () => {
    setAttempts(attempts + 1);
    if (day === correctDate.day && month === correctDate.month && year === correctDate.year) {
      setIsCorrect(true);
      setTimeout(() => setShowLetter(true), 1500);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ${letterOpen ? 'bg-gradient-to-br from-love-100 to-love-200' : 'bg-gradient-to-br from-love-50 to-love-100'} p-4`}>
      <div className="w-full max-w-md mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <div className="relative">
            <Heart className="w-16 h-16 text-love-400 mx-auto animate-float" />
            <Sparkles className="w-6 h-6 text-love-300 absolute top-0 right-1/3 animate-pulse" />
            <Sparkles className="w-4 h-4 text-love-300 absolute bottom-0 left-1/3 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-love-600 animate-fade-in">ทายวันเกิดของฉัน</h1>
          <p className="text-love-500 text-lg animate-fade-in">ถ้าคุณทายถูก คุณจะได้รับจดหมายพิเศษ</p>
        </div>

        {!isCorrect ? (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                maxLength={2}
                placeholder="วัน"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="p-4 border-2 border-love-200 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-love-300 focus:border-love-300 transition-all"
              />
              <input
                type="text"
                maxLength={2}
                placeholder="เดือน"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="p-4 border-2 border-love-200 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-love-300 focus:border-love-300 transition-all"
              />
              <input
                type="text"
                maxLength={2}
                placeholder="ปี"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="p-4 border-2 border-love-200 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-love-300 focus:border-love-300 transition-all"
              />
            </div>
            <button
              onClick={checkDate}
              className="w-full py-4 bg-love-500 text-white text-lg rounded-lg hover:bg-love-600 transition-all duration-300 transform hover:scale-105"
            >
              ทาย
            </button>
            {attempts > 0 && (
              <p className="text-love-400 text-sm animate-fade-in">
                ลองอีกครั้ง...
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 animate-fade-in">
              <HeartHandshake className="w-8 h-8 text-love-500" />
              <p className="text-love-500 text-2xl">เก่งจังไออ้วนของเค้า</p>
              <HeartHandshake className="w-8 h-8 text-love-500" />
            </div>
            {showLetter && <LoveLetter onClose={() => setLetterOpen(false)} onOpen={() => setLetterOpen(true)} />}
          </div>
        )}
      </div>
    </div>
  );
};

const LoveLetter = ({ onClose, onOpen }: { onClose: () => void; onOpen: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className="space-y-4">
      {!isOpen ? (
        <button
          onClick={handleOpen}
          className="relative w-72 h-48 mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-love-100 transform origin-top group-hover:animate-envelope-open" />
          <div className="absolute inset-0 flex items-center justify-center">
            <MailOpen className="w-12 h-12 text-love-400 transition-transform group-hover:scale-110" />
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-love-400">
            <p className="text-sm">คลิกเพื่อเปิดจดหมาย</p>
          </div>
        </button>
      ) : (
        <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto animate-fade-in">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-love-50 transition-colors"
          >
            <X className="w-6 h-6 text-love-400" />
          </button>
          <div className="space-y-6 text-love-600">
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-love-400 animate-bounce" />
              <h2 className="text-2xl font-semibold">ไออ้วนนนน</h2>
              <Heart className="w-6 h-6 text-love-400 animate-bounce" />
            </div>
            <div className="space-y-4 leading-relaxed">
              <p className="text-lg">
                ขอคุณนะที่เข้ามาในชีวิตเค้าอ่ะ เค้าดีใจนะที่ได้เจอเธฮ ที่ได้คุยกับเธออ่ะ มันดีมากๆเลยเธอ
                ถ฿งเค้าจะขี้น้อยใจ ขี้งอน มึนมากก แต่เค้าก็ชอบนะเสวลาที่มีเธออ่ะ คือโครตดีใจอ่ะ
              </p>
              <p className="text-lg">
                เค้าอยากมีเธอไปตลอดเลยนะ ถึงจจะทะเลลาะกันบ้าง งอนกันบ้าง น้อยใจกันบ้าง
                แต่เค้าขอเธออย่างเดียวเลย หันหน้าคุยกับเขาได้ไหม เค้าไม่อยากให้ใครมาปลอบเธอแล้วนอกจากเค้า
              </p>
              <div className="pt-4 text-right">
                <p className="text-lg">เค้ารักเธฮนะอ้วน</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
