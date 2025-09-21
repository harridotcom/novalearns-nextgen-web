import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  // Set deadline to 30 days from now (you can adjust this date)
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Registration Deadline</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold">
            Time Left to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Register
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="professional-card text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {timeLeft.days}
              </div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
            <div className="professional-card text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-muted-foreground">Hours</div>
            </div>
            <div className="professional-card text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="professional-card text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-muted-foreground">Seconds</div>
            </div>
          </div>

          <p className="text-muted-foreground">
            Don't miss out on this incredible opportunity to showcase your technical skills!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;