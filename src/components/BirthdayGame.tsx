
import { useState } from "react";
import { Heart } from "lucide-react";

export const BirthdayGame = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showLetter, setShowLetter] = useState(false);

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-love-50 to-love-100 p-4">
      <div className="w-full max-w-md mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <Heart className="w-12 h-12 text-love-400 mx-auto animate-float" />
          <h1 className="text-3xl font-semibold text-love-600">ทายวันเกิดของฉัน</h1>
          <p className="text-love-500">ถ้าคุณทายถูก คุณจะได้รับจดหมายพิเศษ</p>
        </div>

        {!isCorrect ? (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                maxLength={2}
                placeholder="วัน"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-love-300"
              />
              <input
                type="text"
                maxLength={2}
                placeholder="เดือน"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-love-300"
              />
              <input
                type="text"
                maxLength={2}
                placeholder="ปี"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-love-300"
              />
            </div>
            <button
              onClick={checkDate}
              className="w-full py-3 bg-love-500 text-white rounded-lg hover:bg-love-600 transition-colors duration-300"
            >
              ทาย
            </button>
            {attempts > 0 && (
              <p className="text-love-400 text-sm">
                ลองอีกครั้ง... ({attempts} ครั้งที่ลองแล้ว)
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-love-500 text-xl animate-fade-in">ถูกต้อง!</p>
            {showLetter && <LoveLetter />}
          </div>
        )}
      </div>
    </div>
  );
};

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-64 h-40 mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-love-100 transform origin-top group-hover:animate-envelope-open" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-8 h-8 text-love-400" />
          </div>
        </button>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto animate-fade-in">
          <div className="space-y-4 text-love-600">
            <p className="text-lg">ถึงคนที่ฉันรัก,</p>
            <p>
              ในทุกๆ วัน ฉันขอบคุณโชคชะตาที่ทำให้เราได้พบกัน
              ความรักของเราเป็นเหมือนดั่งดวงดาวที่ส่องสว่างในยามค่ำคืน
              ฉันรักทุกช่วงเวลาที่เราได้อยู่ด้วยกัน
            </p>
            <p>
              คุณคือความสุขที่ฉันตามหามาตลอด
              และฉันจะรักคุณตลอดไป
            </p>
            <p className="text-right">ด้วยรักทั้งหมด</p>
          </div>
        </div>
      )}
    </div>
  );
};
