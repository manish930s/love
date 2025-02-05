import React from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="py-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mx-4">
            Happy Birthday, Saniya!
          </h1>
          <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Let's go on a special journey filled with love, surprises, and memories.
        </p>
      </div>
    </header>
  );
}