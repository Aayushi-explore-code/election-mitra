import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Fingerprint, CreditCard, Car, Book, Briefcase, 
  BookOpen, HeartPulse, ScrollText, BadgeCent, 
  Accessibility, Contact, IdCard
} from 'lucide-react';

const APPROVED_IDS = [
  { id: 'aadhaar', name: 'Aadhaar Card', icon: Fingerprint, label: 'Aadhaar Card' },
  { id: 'pan', name: 'PAN Card', icon: CreditCard, label: 'Permanent Account Number Card' },
  { id: 'dl', name: 'Driving License', icon: Car, label: 'Driving License' },
  { id: 'passport', name: 'Passport', icon: Book, label: 'Indian Passport' },
  { id: 'mnrega', name: 'MNREGA Job Card', icon: Briefcase, label: 'MNREGA Job Card' },
  { id: 'passbook', name: 'Bank Passbook', icon: BookOpen, label: 'Bank or Post Office Passbook with Photograph' },
  { id: 'rgi', name: 'Smart Card (RGI)', icon: IdCard, label: 'Smart Card issued by RGI under NPR' },
  { id: 'health', name: 'Health Insurance', icon: HeartPulse, label: 'Health Insurance Smart Card' },
  { id: 'pension', name: 'Pension Document', icon: ScrollText, label: 'Pension Document with Photograph' },
  { id: 'mpmla', name: 'Official ID (MP/MLA)', icon: BadgeCent, label: 'Official Identity Card for MP, MLA, or MLC' },
  { id: 'udid', name: 'UDID Card', icon: Accessibility, label: 'Unique Disability ID Card' },
  { id: 'service', name: 'Service ID Card', icon: Contact, label: 'Service Identity Card with Photograph' },
];

const IDVault = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelection = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-brutal mb-12">
      <h2 className="text-4xl font-black mb-2 uppercase border-b-4 border-black inline-block pb-2">ID Vault</h2>
      <p className="font-bold mb-8 text-gray-800 border-l-4 border-saffron pl-4 text-lg bg-gray-100 py-2 pr-4 inline-block w-full">
        Don't have a Voter ID? You can still vote using any of these 12 government-approved documents.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {APPROVED_IDS.map((doc) => {
          const isSelected = selectedIds.includes(doc.id);
          const Icon = doc.icon;
          
          return (
            <motion.div
              key={doc.id}
              whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
              onClick={() => toggleSelection(doc.id)}
              aria-label={doc.label}
              role="button"
              aria-pressed={isSelected}
              className={`relative p-4 md:p-6 border-4 border-black cursor-pointer transition-colors ${
                isSelected 
                  ? 'bg-saffron text-white shadow-brutal-hover translate-x-[4px] translate-y-[4px]' 
                  : 'bg-[#FFF7E6] shadow-brutal hover:bg-[#FFE0B2]'
              }`}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="bg-white p-2 md:p-3 rounded-full border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <Icon size={32} className="text-black" />
                </div>
                <span className="font-black text-sm md:text-lg uppercase tracking-tight leading-tight">{doc.name}</span>
              </div>
              
              {isSelected && (
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute -top-3 -right-3 bg-white rounded-full p-1 border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                >
                  <Fingerprint size={20} className="text-purple-700" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IDVault;
