import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Calendar, 
  ArrowUpRight, 
  X, 
  Sparkles, 
  Laptop, 
  ShieldAlert, 
  GraduationCap, 
  ExternalLink,
  ChevronRight,
  Download,
  AlertCircle,
  Eye
} from 'lucide-react';

// Import physical certificate screenshots
import nextZenImage from '../assets/images/ChatGPT Image May 30, 2026, 09_48_17 PM.webp';
import cyberHygieneImage from '../assets/images/Screenshot 2026-05-30 214612.webp';
import gpCanvaImage from '../assets/images/Screenshot 2026-05-30 214522.webp';

interface Certificate {
  id: string;
  title: string;
  recipient: string;
  issuer: string;
  courseName: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    badgeBg: string;
    badgeText: string;
  };
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'next-zen',
    title: 'Certificate of Achievement',
    recipient: 'Nafis Ahmed Roktim',
    issuer: 'Next Zen ITES',
    courseName: 'Basic Computer',
    date: 'December 20, 2025',
    description: 'Granted for qualifying in and successfully completing the technical curriculum of computer hardware operations, operating system workflows, and professional administrative office tools.',
    skills: ['OS Administration', 'Computer Hardware', 'Workspace Workflows', 'Network Navigation'],
    image: nextZenImage,
    theme: {
      primary: '#9c1c24', // Burgundy
      secondary: '#1c3d5a', // Slate blue
      accent: '#e2ab34', // Gold
      badgeBg: 'bg-amber-100/10 border-amber-500/20',
      badgeText: 'text-amber-700'
    }
  },
  {
    id: 'apac-cyber',
    title: 'Training Completion Certificate',
    recipient: 'Nafis Ahmed Roktim',
    issuer: 'The Asia Foundation & SAJIDA Foundation',
    courseName: 'Cyber Hygiene Training',
    date: 'May 22, 2026',
    description: 'Jointly organized under APAC Cybersecurity Fund. Covers fundamental and advanced risk prevention: anti-phishing safeguards, device threat containment, secure identity vaults, and network security policies.',
    skills: ['Cybersecurity', 'Risk Mitigation', 'Threat Containment', 'Digital Privacy'],
    image: cyberHygieneImage,
    theme: {
      primary: '#1d4ed8', // Dark Blue
      secondary: '#075985', // Teal/Sky
      accent: '#0e7490', // Cyan
      badgeBg: 'bg-sky-100/10 border-sky-500/20',
      badgeText: 'text-sky-700'
    }
  },
  {
    id: 'gp-canva',
    title: 'Certificate of Excellence',
    recipient: 'Nafis Ahmed Roktim',
    issuer: 'Grameenphone Academy',
    courseName: 'Canva for Presentations',
    date: 'November 16, 2025',
    description: 'Awarded for extraordinary academic performance, design aesthetic execution, creative deck presentation structuring, and applying branding parameters successfully.',
    skills: ['Presentation Design', 'Visual Branding', 'Canva Drafting', 'Layout Mastery'],
    image: gpCanvaImage,
    theme: {
      primary: '#005cff', // GP Blue
      secondary: '#111827', // Slate Dark
      accent: '#06b6d4', // Cyan
      badgeBg: 'bg-blue-100/10 border-blue-500/20',
      badgeText: 'text-blue-700'
    }
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<'scan' | 'twin'>('scan'); // Default to view 'scan' (uploaded physical copy)

  return (
    <section id="certificates" className="py-24 md:py-48 w-full bg-transparent text-[#111111] relative border-t border-neutral-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-red-500" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-500">CREDENTIALS PORTAL</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter">
              Verified<br/>
              <span className="text-neutral-500 italic">Accomplishments</span>
            </h2>
          </div>
          <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed max-w-sm">
            Professional licenses, courseworks, and technical achievements matching rigorous industry benchmarks.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, index) => {
            const Icon = cert.id === 'next-zen' ? Laptop : cert.id === 'apac-cyber' ? ShieldAlert : GraduationCap;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => {
                  setSelectedCert(cert);
                  setViewMode('scan'); // Reset panel view to scanned image on open
                }}
                className="group relative bg-[#f9f9f6] border border-neutral-300 hover:border-black rounded-2xl flex flex-col h-[480px] cursor-pointer transition-all duration-350 hover:shadow-xl overflow-hidden"
                data-cursor="hover"
              >
                {/* Physical Certificate Scan Cropped Header */}
                <div className="relative w-full h-[220px] border-b border-neutral-200 overflow-hidden bg-neutral-100">
                  <div className="absolute inset-0 bg-[#111111]/5 group-hover:bg-[#111111]/0 transition-all duration-300 z-10 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all duration-350 shadow-md">
                      <Eye className="w-3.5 h-3.5" /> View original document
                    </span>
                  </div>
                  <img
                    src={cert.image}
                    alt={cert.courseName}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-neutral-200/60 rounded text-black font-semibold shadow-sm">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] tracking-wider text-red-500 uppercase block mb-1">
                      {cert.title}
                    </span>
                    <h3 className="font-display font-medium text-2xl tracking-tight text-black group-hover:text-red-500 transition-colors leading-tight mb-3">
                      {cert.courseName}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span 
                          key={skill}
                          className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-white border border-neutral-200 text-neutral-600 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="font-mono text-[9px] uppercase text-neutral-400 self-center">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-neutral-200/50 pt-4 mt-4">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#111111] group-hover:text-red-500 transition-colors">
                      <span className="font-mono text-[10px]">Verify Detail</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating background graphic for section */}
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-400/5 rounded-full pointer-events-none blur-3xl z-0" />
      </div>

      {/* Detail Showcase Immersive Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white text-black max-w-[1000px] w-full max-h-[92vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button top-right */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute right-6 top-6 p-2 z-30 text-neutral-450 hover:text-black bg-neutral-100 md:bg-white hover:bg-neutral-200 rounded-full transition-colors cursor-pointer border border-neutral-200/50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Original Scanned Image OR Interactive Twin CSS view */}
              <div className="flex-1 bg-neutral-100 p-6 md:p-12 flex flex-col justify-between relative overflow-x-hidden border-b md:border-b-0 md:border-r border-neutral-200 min-h-[360px] md:min-h-0">
                
                {/* Mode Switcher buttons inside Left Column */}
                <div className="absolute top-4 left-6 z-30 pointer-events-auto flex gap-1 bg-neutral-200/80 p-0.5 rounded-lg border border-neutral-300 shadow-sm">
                  <button
                    onClick={() => setViewMode('scan')}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider font-mono rounded-md transition-all ${
                      viewMode === 'scan' ? 'bg-white text-black shadow-sm font-semibold' : 'text-neutral-500 hover:text-black'
                    }`}
                  >
                    Original Scan
                  </button>
                  <button
                    onClick={() => setViewMode('twin')}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider font-mono rounded-md transition-all ${
                      viewMode === 'twin' ? 'bg-white text-black shadow-sm font-semibold' : 'text-neutral-500 hover:text-black'
                    }`}
                  >
                    Interactive Twin
                  </button>
                </div>

                {/* Decorative border frame ONLY for Interactive Twin Mode */}
                {viewMode === 'twin' && (
                  <>
                    <div className="absolute inset-4 border border-neutral-200 rounded-xl pointer-events-none z-0" />
                    <div className="absolute inset-5 border-2 border-neutral-300/30 rounded-lg pointer-events-none z-0" />
                  </>
                )}
                
                {/* Render Switch depending on viewMode Selection */}
                {viewMode === 'scan' ? (
                  /* ORIGINAL SCAN VIEW */
                  <div className="relative z-10 w-full h-full flex flex-col justify-center items-center py-10 min-h-[300px] md:min-h-[440px]">
                    <div className="relative border border-neutral-300/60 shadow-xl bg-white rounded-xl overflow-hidden max-w-full max-h-[380px] md:max-h-[440px] flex items-center justify-center p-1.5">
                      <img 
                        src={selectedCert.image} 
                        alt={`${selectedCert.courseName} Scanned Copy`}
                        className="w-full h-auto max-h-[360px] md:max-h-[420px] object-contain rounded-lg"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-mono text-[9px] text-neutral-400 mt-4 uppercase tracking-widest text-center">
                      Verified credential registration file
                    </span>
                  </div>
                ) : (
                  /* DIGITAL TWIN / ACCREDITED TEXT TEMPLATES */
                  selectedCert.id === 'next-zen' ? (
                    /* NEXT ZEN ITES CERTIFICATE TEMPLATE */
                    <div className="relative z-10 w-full h-full flex flex-col justify-between py-6 md:py-10 min-h-[320px] md:min-h-[440px] select-none">
                      {/* Header Logo */}
                      <div className="flex justify-between items-start mt-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 border border-red-800 rounded flex flex-col items-center justify-center font-display font-medium text-[11px] leading-none text-red-800 tracking-tighter bg-white">
                            <span className="font-black text-red-800 text-sm">NZ</span>
                            <span className="text-[6px] tracking-normal">ITES</span>
                          </div>
                          <div>
                            <h4 className="font-display font-black text-xs text-[#9c1c24] leading-tight">NEXT ZEN</h4>
                            <p className="font-mono text-[7px] text-neutral-400 tracking-widest leading-none uppercase">IT EDUCATION & SOLUTIONS</p>
                          </div>
                        </div>
                        <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">LICENCE #NZ-78482</span>
                      </div>

                      {/* Middle Certificate content */}
                      <div className="my-8 text-center">
                        <h2 className="font-display font-normal uppercase text-neutral-400 tracking-[0.25em] text-[11px] mb-2">THIS CERTIFICATE IS PRESENTED TO</h2>
                        <h3 className="font-display font-extrabold text-[#9c1c24] text-xl md:text-3xl tracking-tight mb-2 border-b border-double border-neutral-300 pb-2 max-w-xs mx-auto">
                          {selectedCert.recipient}
                        </h3>
                        <p className="font-sans text-[11px] text-neutral-500 mb-2">has successfully completed the</p>
                        <h4 className="font-display font-extrabold text-[#111111] text-lg md:text-2xl leading-none">
                          {selectedCert.courseName}
                        </h4>
                        <p className="font-sans text-[9px] text-neutral-400 max-w-sm mt-3 mx-auto leading-relaxed">
                          organized by Next Zen ITES. We appreciate the dedication and effort shown in achieving new skills and believe this achievement will open new opportunities in the future.
                        </p>
                      </div>

                      {/* Footer Details & Seal */}
                      <div className="flex justify-between items-end border-t border-neutral-200 pt-6">
                        <div className="text-left font-sans">
                          <span className="font-mono text-neutral-400 text-[8px] uppercase">CHAIRMAN SIGNATURE</span>
                          <div className="h-6 flex items-end mb-1 border-b border-neutral-300 w-24">
                            <span className="font-serif italic text-xs text-neutral-800 leading-none">F. Alam</span>
                          </div>
                          <span className="font-mono text-[7px] text-neutral-400 block uppercase leading-none">Next Zen ITES</span>
                        </div>

                        {/* Gold seal stamp */}
                        <div className="w-14 h-14 rounded-full border-4 border-amber-400/40 bg-amber-400/10 flex items-center justify-center relative animate-pulse">
                          <div className="w-10 h-10 rounded-full border border-dashed border-amber-600/50 flex flex-col items-center justify-center">
                            <span className="text-amber-700 font-bold font-mono text-[7px] tracking-widest">NZ</span>
                            <span className="text-[#bfbfc0] font-sans font-extrabold text-[5px] leading-none uppercase">2023 ITES</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-mono text-neutral-400 text-[8px] uppercase">DATE OF ISSUE</p>
                          <p className="font-mono text-[10px] font-bold text-neutral-800">{selectedCert.date}</p>
                        </div>
                      </div>
                    </div>
                  ) : selectedCert.id === 'apac-cyber' ? (
                    /* APAC CYBERSECURITY COMPLETED TEMPLATE */
                    <div className="relative z-10 w-full h-full flex flex-col justify-between py-6 md:py-10 min-h-[320px] md:min-h-[440px] select-none">
                      {/* Header bar logos */}
                      <div className="flex justify-between items-center bg-[#eaebeb]/70 p-3 rounded-lg border border-neutral-200 mt-4">
                        <div className="text-left">
                          <span className="font-display font-semibold text-[9px] text-blue-900 tracking-wider uppercase block">APAC Cybersecurity Fund</span>
                          <span className="font-mono text-[7px] text-neutral-400 block leading-none">The Asia Foundation</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-[9px] font-bold text-slate-800 tracking-wide uppercase block">SAJIDA Foundation</span>
                          <span className="font-mono text-[6px] text-neutral-400 block leading-none">Training Division</span>
                        </div>
                      </div>

                      {/* Main certificate display core */}
                      <div className="my-8 text-center px-4">
                        <h2 className="font-mono font-medium text-[10px] text-[#075985] tracking-widest uppercase mb-2">CYBER HYGIENE – TRAINING</h2>
                        <h3 className="font-display font-black text-[#1d4ed8] text-lg md:text-2xl leading-none uppercase tracking-wide mb-6">
                          COMPLETION CERTIFICATE
                        </h3>
                        <p className="font-mono text-neutral-400 text-[9px] uppercase tracking-wide mb-2">this is to certify that</p>
                        <h4 className="font-display italic text-[#111111] font-semibold text-2xl border-b border-neutral-200 max-w-xs mx-auto pb-1 mb-4">
                          {selectedCert.recipient}
                        </h4>
                        <p className="font-sans text-[10px] text-neutral-500 max-w-sm mx-auto leading-relaxed">
                          has successfully completed the Cyber Hygiene Training Jointly organised by The Asia Foundation &amp; SAJIDA Foundation.
                        </p>
                      </div>

                      {/* Bottom Signature Blocks & support credits */}
                      <div className="flex justify-between items-end">
                        <div className="text-left font-mono text-[7px]">
                          <span className="border-b border-neutral-300 pb-0.5 block italic text-neutral-800 text-[8px] font-semibold">T. Rahman</span>
                          <p className="text-neutral-400 uppercase mt-1 leading-none">Program Lead</p>
                          <p className="text-neutral-400 leading-none">The Asia Foundation</p>
                        </div>

                        <div className="text-center font-mono text-[8px]">
                          <span className="bg-sky-50 text-sky-800 px-2 py-0.5 rounded font-bold">Training Date: {selectedCert.date}</span>
                          <p className="text-[6px] text-neutral-400 mt-2">With support from Google.org</p>
                        </div>

                        <div className="text-right font-mono text-[7px]">
                          <span className="border-b border-neutral-300 pb-0.5 block italic text-neutral-800 text-[8px] font-semibold">A. Chowdhury</span>
                          <p className="text-neutral-400 uppercase mt-1 leading-none">Project Director</p>
                          <p className="text-neutral-400 leading-none">SAJIDA Foundation</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* GRAMEENPHONE ACADEMY EXCELLENCE TEMPLATE */
                    <div className="relative z-10 w-full h-full flex flex-col justify-between py-6 md:py-10 min-h-[320px] md:min-h-[440px] select-none">
                      {/* Header and GP Petal representation */}
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-1">
                          <svg viewBox="0 0 100 100" className="w-8 h-8 fill-[#005cff]">
                            <path d="M50,0 C65,15 80,35 80,50 C80,65 65,80 50,80 C35,80 20,65 20,50 C20,35 35,15 50,0 Z" />
                            <circle cx="50" cy="50" r="15" fill="#ffffff" />
                          </svg>
                          <div className="flex flex-col">
                            <span className="font-mono text-[8px] tracking-[0.2em] font-bold text-neutral-450 leading-none uppercase">GRAMEENPHONE</span>
                            <span className="font-display font-extrabold text-[12px] tracking-tighter text-[#111111] leading-none">Academy</span>
                          </div>
                        </div>
                        <span className="font-sans font-bold text-[8px] text-sky-600 block bg-sky-50 px-2.5 py-1 rounded-full">Official Accredited ID</span>
                      </div>

                      {/* Main certificate dynamic text */}
                      <div className="my-8 text-center">
                        <h2 className="font-display font-extrabold italic text-2xl md:text-3xl text-[#005cff] tracking-tight leading-none mb-3">
                          Certificate of Excellence
                        </h2>
                        <p className="font-sans text-[10px] uppercase text-neutral-400 tracking-widest mb-1">THIS DIGNIFIED AWARD GOES TO</p>
                        
                        <h3 className="font-display font-bold text-2xl text-neutral-900 border-b border-dashed border-neutral-300 pb-2 max-w-xs mx-auto">
                          {selectedCert.recipient}
                        </h3>
                        
                        <p className="font-sans text-[10px] text-neutral-400 mt-3 mb-1">
                          for successfully qualifying and completing professional coursework of
                        </p>
                        <h4 className="font-display font-extrabold text-[#111111] text-lg select-text">
                          {selectedCert.courseName}
                        </h4>
                      </div>

                      {/* Signatures & Accreditation Code */}
                      <div className="flex justify-between items-end border-t border-neutral-200/60 pt-6">
                        <div className="text-left font-sans text-[8px]">
                          <div className="h-6 flex items-end mb-1">
                            <span className="font-serif italic text-[11px] leading-none border-b border-neutral-300 w-24">Yasir Azman</span>
                          </div>
                          <p className="font-display font-medium text-[8px] text-neutral-900 leading-none">Yasir Azman</p>
                          <p className="font-mono text-[7px] text-neutral-400">CEO, Grameenphone Ltd.</p>
                        </div>

                        {/* QR Decal */}
                        <div className="flex flex-col items-center bg-white p-1.5 border border-neutral-200 rounded-lg">
                          <div className="w-10 h-10 flex flex-col justify-between">
                            <div className="grid grid-cols-4 gap-0.5 w-[32px] h-[32px] mx-auto">
                              {[...Array(16)].map((_, i) => (
                                <div key={i} className={`rounded-sm ${(i*4 + 2) % 3 === 0 || i % 4 === 1 ? 'bg-black' : 'bg-transparent'}`} />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-right font-mono text-[8px]">
                          <span className="text-neutral-400 uppercase">DATE APPROVED</span>
                          <p className="font-bold text-neutral-800 mt-1">{selectedCert.date}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Right Column: Complete Verified Details, Skills, Actions */}
              <div className="w-full md:w-[380px] bg-neutral-900 p-6 md:p-10 flex flex-col justify-between text-white overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-8 text-[#e64a19]">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span className="font-mono text-xs tracking-widest uppercase font-bold text-stone-200">Verifiable Record</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#e64a19] block mb-1">ACCREDITED ID</span>
                      <p className="font-mono text-xs text-neutral-300 uppercase select-text">
                        ROKTIM-CRT-{selectedCert.id.toUpperCase()}-2026
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-550 block mb-1">CREDENTIAL PATHWAY</span>
                      <h2 className="font-display font-bold text-2xl tracking-tight leading-tight select-text text-white">
                        {selectedCert.courseName}
                      </h2>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-550 block mb-1">ISSUED BY</span>
                      <p className="font-sans text-sm text-neutral-300 select-text font-medium">
                        {selectedCert.issuer}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-550 block mb-1">RECIPIENT NAME</span>
                      <p className="font-sans text-sm text-neutral-300 select-text">
                        {selectedCert.recipient}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-550 block mb-1">SUMMARY / VALIDITY</span>
                      <p className="font-sans text-xs leading-relaxed text-neutral-400 select-text">
                        {selectedCert.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-550 block mb-1">VERIFIED SKILLS</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {selectedCert.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="bg-neutral-800 text-neutral-200 border border-neutral-700/50 font-mono text-[9px] px-2.5 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-neutral-800 pt-6 space-y-3">
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="w-full bg-white text-black font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer flex gap-2 items-center justify-center font-mono shadow-md"
                    data-cursor="hover"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF / Print
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`Accredited Credential #${selectedCert.id.toUpperCase()}-ROKTIM-2026 issued by ${selectedCert.issuer}`);
                      alert('Credential registration key copied to clipboard!');
                    }}
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs tracking-wider py-3.5 rounded-xl transition-colors font-mono cursor-pointer flex gap-2 items-center justify-center uppercase font-semibold"
                    data-cursor="hover"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Copy Authenticated Key
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
