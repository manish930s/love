import React, { useState } from 'react';
import { Gift } from 'lucide-react';

export function FinalTreasure() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center py-16">
      <button
        onClick={() => setIsOpen(true)}
        className={`relative transform transition-transform duration-500 ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
        }`}
      >
        <Gift className="w-24 h-24 text-rose-500 mx-auto" />
        <span className="block mt-4 text-lg font-medium text-gray-700">
          Click to reveal your final surprise!
        </span>
      </button>

      {isOpen && (
        <div className="animate-fade-in">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-20"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="text-8xl">🎂</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            You're my greatest treasure
          </h2>
          <p className="text-xl text-gray-600">
            Happy Birthday, Saniya! 🎉
          </p>
        </div>
      )}
    </div>
  );
}