"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingHearts } from "@/components/ui/floating-hearts";
import { Confetti } from "@/components/ui/confetti";
import { ChevronDown } from "lucide-react";

export default function ValentinePage() {
  const [step, setStep] = useState<
    "greeting" | "question" | "yay" | "sunflower"
  >("greeting");
  const [opened, setOpened] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noHoverCount, setNoHoverCount] = useState(0);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonPosition({ x, y });
    setNoHoverCount((prev) => prev + 1);
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden
    bg-gradient-to-br from-orange-200 via-yellow-100 to-amber-300"
    >
      {/* 🌅 Sunrise Glow */}
      <div className="absolute top-[-200px] w-[700px] h-[700px] bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse" />

      <FloatingHearts count={15} />

      {/* ---------------- GREETING ---------------- */}
      {step === "greeting" && (
        <Card className="max-w-md w-full bg-white/80 backdrop-blur-md border-0 shadow-2xl z-10">
          <CardContent className="p-10 text-center">
            <div className="mb-6 text-6xl animate-bounce">🌻</div>

            <h1 className="text-4xl font-bold text-amber-700 mb-3">
              Hi Simon 🤍
            </h1>

            <p className="text-lg text-amber-800/80 mb-6">
              I have something small to ask you...
            </p>

            <ChevronDown className="mx-auto mb-6 animate-bounce text-amber-600" />

            <Button
              size="lg"
              className="px-10 py-6 text-lg font-semibold bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => setStep("question")}
            >
              Click here 🤭
            </Button>
          </CardContent>
        </Card>
      )}

      {/* ---------------- QUESTION ---------------- */}
      {step === "question" && (
        <Card className="max-w-md w-full bg-white/80 backdrop-blur-md border-0 shadow-2xl z-10">
          <CardContent className="p-10 text-center">
            <h1 className="text-3xl font-bold text-amber-700 mb-6">
              Will you be my Valentine ?
              
            </h1>

            <div className="flex gap-6 justify-center items-center min-h-30">
              <Button
                size="lg"
                className="px-8 py-5 text-lg font-semibold bg-amber-600 hover:bg-amber-700 text-white transition hover:scale-110"
                onClick={() => setStep("yay")}
              >
                Yes 🤍
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-5 text-lg font-semibold border-amber-600 text-amber-700"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: "0.2s ease-out",
                }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
              >
                No
              </Button>
            </div>

            {/* 😈 Progressive teasing text */}
            {noHoverCount > 0 && (
              <p
                className={`mt-4 text-xl 
                ${
                  noHoverCount > 15
                    ? "animate-bounce text-amber-700 font-semibold"
                    : "animate-pulse text-muted-foreground"
                }`}
              >
                {noHoverCount < 3
                  ? "Oops! Try again..."
                  : noHoverCount < 6
                    ? "Come on, just say yes! 🤭"
                    : noHoverCount < 9
                      ? "The 'No' button is getting nervous..."
                      : noHoverCount < 12
                        ? "It really doesn't want to be clicked 😌"
                        : noHoverCount < 15
                          ? "Are you sure about that? 👀"
                          : noHoverCount < 18
                            ? "This button is fighting for its life 😭"
                            : noHoverCount < 21
                              ? "Okay okay… it gives up."
                              : "It was never meant to work anyway 😈"}
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* ---------------- YAY ---------------- */}
      {step === "yay" && (
        <>
          <Confetti count={150} />

          <Card className="max-w-md w-full bg-white/80 backdrop-blur-md border-0 shadow-2xl z-10">
            <CardContent className="p-10 text-center">
              <div className="text-5xl mb-4">🥹💛</div>

              <h1 className="text-3xl font-bold text-amber-700 mb-4">
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

              <p className="text-lg text-amber-800/80 mb-6">
                Okay… I saved the best part for last.
              </p>

              <Button
                size="lg"
                className="px-10 py-6 text-lg font-semibold bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => setStep("sunflower")}
              >
                Reveal the sunshine 🌞
              </Button>
            </CardContent>
          </Card>
        </>
      )}

      {/* ---------------- SUNFLOWER ---------------- */}
      {step === "sunflower" && (
        <Card className="max-w-md w-full bg-white/80 backdrop-blur-md border-0 shadow-2xl z-10">
          <CardContent className="p-8 text-center">
            {!opened ? (
              <>
                <div className="mb-10 flex justify-center">
                  <img
                    src="/sunflower.png"
                    alt="sunflower"
                    className="w-72 h-72 object-contain drop-shadow-xl"
                  />
                </div>
                <h2 className="text-2xl font-bold text-amber-700 mb-6">
                  This one is for my Sunrise.
                </h2>

                <Button
                  size="lg"
                  className="px-10 py-6 text-lg font-semibold bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => setOpened(true)}
                >
                  Okay fine… open this 🤭
                </Button>
              </>
            ) : (
              <>
                <Confetti count={100} />

                <div className="mb-6 flex justify-center">
                  <img
                    src="/myphoto.jpg"
                    alt="us"
                    className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-amber-300"
                  />
                </div>

                <h2 className="text-2xl font-bold text-amber-700 mb-4">
                  A sunflower.
                </h2>

                <p className="text-lg text-amber-800/80 mb-3">
                  The first time we met, you called me "Sunrise".
                </p>

                <p className="text-lg text-amber-800/80 mb-3">
                  I never forgot that.
                </p>

                <p className="text-lg text-amber-800/80 mb-4">
                  So I thought… a sunflower feels right.
                </p>

                <p className="text-md font-semibold text-amber-700">
                  Because you are the light in my life 🤍
                </p>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </main>
  );
}
