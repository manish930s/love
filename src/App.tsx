import React from 'react';
import { TreasureMap } from './components/TreasureMap';
import { Header } from './components/Header';
import { Clues } from './components/Clues';
import { FinalTreasure } from './components/FinalTreasure';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="fixed bottom-4 right-4 z-10 ">
        <AudioPlayer />
      </div>
      <Header />
      <main className="relative max-w-6xl mx-auto px-4 sm:px-50 z-0">
        <TreasureMap />
        <Clues />
        <FinalTreasure />
      </main>
    </div>
  );
}

export default App;


// // import React from 'react';
// import { Scene } from './components/3d/Scene';
// import { Header } from './components/Header';
// import { About } from './components/About';
// import { Projects } from './components/Projects';
// import { Contact } from './components/Contact';
// import { Footer } from './components/Footer';

// function App() {
//   return (
//     <div className="relative">
//       <Header />
//       <div className="h-screen sticky top-0 -z-10">
//         <Scene />
//       </div>
//       <main className="relative bg-white z-10">
//         <About />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;