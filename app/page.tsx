"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingHearts } from "@/components/ui/floating-hearts";
import { Confetti } from "@/components/ui/confetti";
import { HeartIcon, ChevronDown } from "lucide-react";

export default function ValentinePage() {
  const [step, setStep] = useState<"greeting" | "question" | "yay">("greeting");
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noHoverCount, setNoHoverCount] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);

  const handleNoHover = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: newX, y: newY });
    setNoHoverCount((prev) => prev + 1);
  };

  const handleYes = () => {
    setStep("yay");
  };

  // Greeting page
  if (step === "greeting") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <FloatingHearts count={10} />

        <Card className="max-w-md w-full bg-card/90 backdrop-blur-sm border-primary/20 shadow-2xl relative z-10 animate-float-in">
          <CardContent className="p-10 text-center">
            <div className="mb-4 text-5xl text-center animate-pulse">🤭</div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3 text-balance">
              Hi Simon!
            </h1>

            <p className="text-lg text-foreground/70 mb-2 text-pretty">
              I have something special to ask you...
            </p>

            {/* Bouncing arrows pointing to the button */}
            <div className="flex flex-col items-center gap-0 mb-4">
              <ChevronDown className="w-6 h-6 text-primary/60 animate-bounce-down" />
              <ChevronDown
                className="w-6 h-6 text-primary/40 animate-bounce-down -mt-2"
                style={{ animationDelay: "0.15s" }}
              />
            </div>

            <Button
              size="lg"
              className="px-10 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all animate-pulse-glow cursor-pointer"
              onClick={() => setStep("question")}
            >
              <HeartIcon className="w-5 h-5 mr-2 fill-current" />
              Click here
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  // Yay page
  if (step === "yay") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <Confetti count={150} />
        <FloatingHearts count={30} />

        <Card className="max-w-lg w-full bg-card/90 backdrop-blur-sm border-primary/20 shadow-2xl z-10">
          <CardContent className="p-6 text-center">
            <div className="mb-3 animate-bounce">
              <HeartIcon className="w-12 h-12 mx-auto text-primary fill-primary" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2 text-balance">
              Yay! You Said Yes!
            </h1>

            {/* Funny Meme GIF */}
            <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJwZ2l4Y2UyOXpwMm5ncDVncjVvYnRmYm1hdHpjZHNkMnNqN3VzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif"
                alt="Excited celebration"
                className="w-full h-auto"
              />
            </div>

            <p className="text-lg text-foreground/80 mb-3">
              {"I knew you'd say yes! Here's our song..."}
            </p>

            {/* YouTube Video */}
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="A special song for you"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>

            <p className="text-muted-foreground text-sm">
              {"Never gonna give you up, never gonna let you down!"}
            </p>

            <div className="mt-3 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <HeartIcon
                  key={i}
                  className="w-5 h-5 text-primary fill-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={15} />

      <Card className="max-w-md w-full bg-card/90 backdrop-blur-sm border-primary/20 shadow-2xl relative z-10">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <HeartIcon className="w-20 h-20 mx-auto text-primary fill-primary animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-foreground mb-8 text-balance">
            Will you be my Valentine? 😘
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center min-h-[120px]">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all hover:scale-110"
              onClick={handleYes}
            >
              <HeartIcon className="w-5 h-5 mr-2 fill-current" />
              Yes!
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-primary/50 text-primary hover:bg-secondary transition-all bg-transparent"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.2s ease-out",
              }}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
            >
              No
            </Button>
          </div>

          {noHoverCount > 0 && (
            <p className="mt-4 text-xl  text-muted-foreground animate-pulse">
              {noHoverCount < 3
                ? "Oops! Try again..."
                : noHoverCount < 6
                  ? "Come on, just say yes! 🤭"
                  : "The 'No' button is very shy!😈"}
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
