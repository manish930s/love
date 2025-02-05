import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapPoint {
  id: number;
  x: number;
  y: number;
  hint: string;
  title: string;
}

const mapPoints: MapPoint[] = [
  { id: 1, x: 20, y: 30, hint: "Where we first met...", title: "The Zesto Fest" },
  { id: 2, x: 45, y: 60, hint: "Our first date...", title: "The Park" },
  { id: 3, x: 70, y: 25, hint: "Remember this movement", title: "Marine drive" },
  { id: 4, x: 35, y: 75, hint: "Our fun Day...", title: "the empty rake train 2:33" },
  { id: 5, x: 80, y: 70, hint: "A special moment...", title: "The Lookout" },
];

export function TreasureMap() {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden mb-16">
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524005126988-8b4115f2c95b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50/50" />
      
      {mapPoints.map((point) => (
        <button
          key={point.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
          onMouseEnter={() => setActivePoint(point)}
          onMouseLeave={() => setActivePoint(null)}
        >
          <MapPin className="w-8 h-8 text-rose-500 animate-bounce" />
          {activePoint?.id === point.id && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-lg p-3 text-center">
              <p className="text-sm font-medium text-gray-800">{point.title}</p>
              <p className="text-xs text-gray-600">{point.hint}</p>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}