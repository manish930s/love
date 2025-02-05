import React, { useState } from 'react';
import { Image, Music, Gift, Heart, Lock } from 'lucide-react';

interface Clue {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const SECRET_CODE = "11022005"; // You can change this to any code you want

const clues: Clue[] = [
  {
    id: 1,
    icon: <Image className="w-6 h-6" />,
    title: "Memories",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src="image1.jpg?auto=format&fit=crop&w=600&q=80" alt="Memory 1" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="image2.jpg?auto=format&fit=crop&w=600&q=80" alt="Memory 2" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="image3.jpg?auto=format&fit=crop&w=600&q=80" alt="Memory 3" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="image4.jpg?auto=format&fit=crop&w=600&q=80" alt="Memory 2" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="image5.jpg?auto=format&fit=crop&w=600&q=80" alt="Memory 3" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="image6.jpg?auto=format&fit=crop&w=600&q=80" alt="Memory 3" className="h-600 rounded-lg shadow-md hover:scale-105 transition-transform" />
      </div>
    )
  },
  {
    id: 2,
    icon: <Heart className="w-6 h-6" />,
    title: "Love Letter",
    content: (
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">
          My dearest Saniya❤️,<br /><br />
          From the moment our paths crossed, my life transformed in ways I never imagined possible. Your presence is like a beautiful melody that brings harmony to my days, a sunrise that lights up even the darkest moments.

<br /><br />You are more than just the love of my life; you are my greatest inspiration, my unwavering strength, and my happiest place. Every smile you share feels like a gift, every word you speak echoes in my heart long after it's said.

<br /><br />I admire your kindness, your strength, and the way you make everything around you feel so alive. With you, even the simplest moments feel extraordinary, whether it's sharing a laugh, a quiet moment, or a dream for the future.

<br /><br />I want you to know how deeply you are cherished, how every thought of you fills me with gratitude and joy. You are my today, my tomorrow, and every day I dream of.

<br /><br />Thank you for being you, for being the light in my life. I promise to love you with every beat of my heart, to stand by your side no matter what, and to treasure you always.

<br /><br />Yours forever,
<br />Manish
        </p>
      </div>
    )
  },
  {
    id: 3,
    icon: <Music className="w-6 h-6" />,
    title: "Song",
    content: (
      <div className="bg-white rounded-lg shadow-md p-4">
        <iframe
          width="100%"
          height="380"
          src="https://www.youtube.com/embed/vOidSFKULt4?list=PL9bw4S5ePsEGvDmRnfweYmyStESqq7IT4"
          title="Happy Birthday song Romantic version"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    )
  },
  {
    id: 4,
    icon: <Gift className="w-6 h-6" />,
    title: "Special Surprise",
    content: (
      <SecretCodeSection />
    )
  }
]; // <-- Add semicolon here to close the array

function SecretCodeSection() {
  const [code, setCode] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === SECRET_CODE) {
      setIsRevealed(true);
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  if (isRevealed) {
    return (
      <div className="animate-fade-in text-center">
        <div className="relative w-64 h-64 mx-auto mb-4">
          <img
            src="/panda.jpg"  // Corrected path to the image in public folder
            alt="Cute Panda"
            className="w-full h-full object-cover rounded-full shadow-lg animate-bounce"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="text-6xl animate-pulse">💕</div> */}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-rose-600 mb-2">
          You Found The Secret!
        </h3>
        <p className="text-gray-600">
          Here's a loving panda kiss just for you! 🐼💋
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <Lock className="w-12 h-12 text-rose-500 mx-auto mb-4" />
      <form onSubmit={handleCodeSubmit}>
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter the secret code..."
          className={`w-full max-w-xs px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
            isShaking ? 'animate-shake' : ''
          }`}
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

export function Clues() {
  const [activeClue, setActiveClue] = useState<number>(0);

  return (
    <div className="mb-16">
      <div className="flex overflow-x-auto pb-4 mb-8">
        {clues.map((clue) => (
          <button
            key={clue.id}
            className={`flex items-center px-6 py-3 rounded-full mr-4 transition-colors ${
              activeClue === clue.id
                ? 'bg-rose-500 text-white'
                : 'bg-white text-gray-600 hover:bg-rose-50'
            }`}
            onClick={() => setActiveClue(clue.id)}
          >
            {clue.icon}
            <span className="ml-2 whitespace-nowrap">{clue.title}</span>
          </button>
        ))}
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        {clues.find(clue => clue.id === activeClue)?.content}
      </div>
    </div>
  );
}
