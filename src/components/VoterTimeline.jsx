import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { ELECTION_STEPS } from '../constants/electionData';

const VoterTimeline = ({ hasVoted }) => {
  return (
    <div className="bg-white border-4 border-black p-6 shadow-brutal mb-12">
      <h2 className="text-4xl font-black mb-6 uppercase border-b-4 border-black inline-block pb-2">Your Journey</h2>
      <div className="space-y-6">
        {ELECTION_STEPS.map((step, index) => {
          const isVoteStepDone = hasVoted && step.id === 4; // EVM Process
          
          return (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-start gap-4 p-4 border-4 border-black relative transition-colors ${
                isVoteStepDone ? 'bg-green-100' : 'bg-[#f0f0f0]'
              }`}
            >
              <div className="bg-saffron text-white border-2 border-black w-12 h-12 flex items-center justify-center font-black text-xl shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {isVoteStepDone ? <CheckCircle2 size={24} /> : step.id}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl uppercase">{step.title}</h3>
                <p className="font-medium text-gray-800">{step.description}</p>
                
                {step.link && (
                  <a 
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm font-bold bg-black text-white px-3 py-1 hover:bg-saffron hover:text-black transition-colors"
                  >
                    {step.title === 'Booth Finding' ? 'Find on Google Maps' : 'Visit Portal'}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default VoterTimeline;
