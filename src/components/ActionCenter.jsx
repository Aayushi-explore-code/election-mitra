import React, { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, CheckCircle2 } from 'lucide-react';

const PARTIES = [
  { id: 1, name: 'Development Party', symbol: '🚀' },
  { id: 2, name: 'Green Earth Party', symbol: '🌳' },
  { id: 3, name: 'Progress Alliance', symbol: '🤝' },
  { id: 4, name: 'NOTA', symbol: '🚫' },
];

const ActionCenter = ({ hasVoted, setHasVoted }) => {
  const [votingPhase, setVotingPhase] = useState('idle'); // idle, beeping, vvpat, done
  const [selectedParty, setSelectedParty] = useState(null);

  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF9933', '#FFFFFF', '#138808']
    });
  }, []);

  const handleVote = useCallback((party) => {
    if (votingPhase !== 'idle' && votingPhase !== 'done') return;
    
    setSelectedParty(party);
    setVotingPhase('beeping');
    
    setTimeout(() => {
      setVotingPhase('vvpat');
      
      setTimeout(() => {
        setVotingPhase('done');
        setHasVoted(true);
        triggerConfetti();
      }, 3000);
    }, 1000);
  }, [votingPhase, setHasVoted, triggerConfetti]);

  return (
    <div className="bg-white border-4 border-black p-6 shadow-brutal text-center mb-12">
      <h2 className="text-4xl font-black mb-8 uppercase border-b-4 border-black inline-block pb-2">Interactive EVM</h2>
      
      {!hasVoted ? (
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-4xl mx-auto">
          {/* EVM Machine */}
          <div className="bg-gray-300 border-8 border-gray-800 p-6 shadow-brutal w-full md:w-96 rounded-xl relative">
            <h3 className="font-black text-xl mb-4 bg-white border-4 border-black inline-block px-4 py-1">BALLOT UNIT</h3>
            
            <AnimatePresence>
              {votingPhase === 'beeping' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-4 bg-red-600 text-white font-black px-3 py-1 rounded-full border-4 border-black animate-pulse"
                >
                  BEEP!
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-3 bg-white border-4 border-gray-800 p-2">
              {PARTIES.map(party => (
                <div key={party.id} className="flex justify-between items-center border-b-4 border-gray-400 py-3 px-2">
                  <div className="font-bold text-lg text-left flex items-center gap-3">
                    <span className="text-3xl">{party.symbol}</span>
                    <span className="uppercase">{party.name}</span>
                  </div>
                  <button 
                    onClick={() => handleVote(party)}
                    disabled={votingPhase !== 'idle'}
                    className={`w-14 h-14 rounded-full border-4 border-black shadow-[inset_0_-4px_0_rgba(0,0,0,0.4)] transition-transform ${votingPhase === 'idle' ? 'bg-blue-600 hover:bg-blue-500 active:translate-y-2 active:shadow-none cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
                    aria-label={`Vote for ${party.name}`}
                  ></button>
                </div>
              ))}
            </div>
          </div>

          {/* VVPAT Machine */}
          <div className="bg-gray-200 border-8 border-gray-800 p-6 shadow-brutal w-full md:w-72 rounded-xl flex flex-col items-center h-80 relative overflow-hidden">
            <h3 className="font-black text-xl mb-4 bg-white border-4 border-black inline-block px-4 py-1">VVPAT</h3>
            
            <div className="w-48 h-48 bg-gray-900 border-4 border-gray-600 relative overflow-hidden flex justify-center">
              <div className="absolute inset-0 opacity-20 bg-blue-100 z-10 pointer-events-none"></div>
              
              <AnimatePresence>
                {votingPhase === 'vvpat' && selectedParty && (
                  <motion.div
                    initial={{ y: -150 }}
                    animate={{ y: 20 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{ duration: 1.5, type: 'spring' }}
                    className="bg-yellow-100 border-2 border-black w-36 h-32 absolute flex flex-col items-center justify-center p-2 z-0 shadow-lg"
                  >
                    <span className="text-4xl mb-2">{selectedParty.symbol}</span>
                    <span className="font-bold text-xs uppercase text-center">{selectedParty.name}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-48 h-4 bg-black mt-2"></div>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-saffron text-white border-8 border-black p-10 max-w-2xl mx-auto shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 opacity-10">
            <CheckCircle2 size={200} />
          </div>
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="bg-white text-black p-4 rounded-full border-4 border-black shadow-brutal">
              <Fingerprint size={80} className="text-purple-700" />
            </div>
            
            <h3 className="text-5xl font-black uppercase drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-center leading-tight">
              I am a Responsible Indian Voter!
            </h3>
            
            <p className="font-bold text-2xl bg-white text-black px-6 py-2 border-4 border-black shadow-brutal mt-4">
              Ink Mark Applied. Duty Done.
            </p>
            
            <button 
              onClick={() => {
                setHasVoted(false);
                setVotingPhase('idle');
                setSelectedParty(null);
              }}
              className="mt-8 bg-black text-white px-6 py-3 font-bold uppercase border-2 border-white hover:bg-white hover:text-black hover:border-black transition-colors"
            >
              Reset Simulator
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ActionCenter;
