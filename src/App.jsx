import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VoterTimeline from './components/VoterTimeline';
import IDVault from './components/IDVault';
import ActionCenter from './components/ActionCenter';

function App() {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-50 font-sans pb-12">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4">
        <header className="mb-10">
          <h1 className="text-5xl md:text-6xl font-black uppercase text-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Be a Smart Voter
          </h1>
          <p className="text-center font-bold text-xl mt-4 border-4 border-black p-4 bg-white shadow-brutal inline-block w-full">
            Your step-by-step guide to the Indian Elections.
          </p>
        </header>
        
        <VoterTimeline hasVoted={hasVoted} />
        <IDVault />
        <ActionCenter hasVoted={hasVoted} setHasVoted={setHasVoted} />
      </main>
    </div>
  );
}

export default App;
