import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { 
  Play, 
  RotateCcw, 
  Sliders, 
  Sparkles, 
  Compass, 
  Maximize2, 
  Type, 
  Eye, 
  Fingerprint,
  Cpu
} from 'lucide-react';

export default function Projects() {
  // Demo 1: Spring Physics Playground state
  const [stiffness, setStiffness] = useState(150);
  const [damping, setDamping] = useState(15);
  const [mass, setMass] = useState(1);
  const physicsContainerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  
  const ballX = useMotionValue(0);
  const ballY = useMotionValue(0);
  
  const springConfig = { stiffness, damping, mass };
  const ballSpringX = useSpring(ballX, springConfig);
  const ballSpringY = useSpring(ballY, springConfig);

  const resetPhysics = () => {
    ballX.set(0);
    ballY.set(0);
  };

  // Demo 2: Typography Scale & Contrast Simulator state
  const [fontSize, setFontSize] = useState(36);
  const [letterSpacing, setLetterSpacing] = useState(0.02);
  const [textContrast, setTextContrast] = useState(85);
  const [colorTheme, setColorTheme] = useState<'slate' | 'emerald' | 'solar' | 'purple'>('purple');
  const [userText, setUserText] = useState('DESIGN TELLS STORIES.');

  // Demo 3: Interactive SVG Brand Glyph state
  const [lineCount, setLineCount] = useState(12);
  const [rotateSpeed, setRotateSpeed] = useState(15);
  const [strokeWidth, setStrokeWidth] = useState(1.5);
  const [glowIntensity, setGlowIntensity] = useState(10);
  const [isAnimatingGlyph, setIsAnimatingGlyph] = useState(true);

  // Theme styles for Typography Demo
  const themeStyles = {
    purple: {
      bg: 'bg-[#0D0D0F]',
      border: 'border-[#2A2A35]/80',
      text: 'text-[#F0EEF8]',
      accent: 'text-[#7B61FF]',
      liveRatio: '11.8:1',
      rating: 'AAA Passed',
      ratingColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-950/20'
    },
    slate: {
      bg: 'bg-[#18181B]',
      border: 'border-[#27272A]',
      text: 'text-zinc-100',
      accent: 'text-zinc-400',
      liveRatio: '9.4:1',
      rating: 'AAA Passed',
      ratingColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-950/20'
    },
    emerald: {
      bg: 'bg-[#05150D]',
      border: 'border-emerald-900/40',
      text: 'text-emerald-50',
      accent: 'text-[#4ADE80]',
      liveRatio: '12.4:1',
      rating: 'AAA Passed',
      ratingColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-950/20'
    },
    solar: {
      bg: 'bg-[#1E1E1E]',
      border: 'border-[#333333]',
      text: 'text-[#E6C229]',
      accent: 'text-[#F46036]',
      liveRatio: '6.8:1',
      rating: 'AA Passed',
      ratingColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-950/20'
    }
  };

  return (
    <section className="py-24 md:py-36 w-full bg-transparent text-[#F0EEF8] border-t border-[#2A2A35]" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-[#7B61FF]" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#7B61FF]">PROTOTYPE PLAYGROUND</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-7xl uppercase tracking-tighter">
              Demo <br />
              <span className="text-[#8C8A99] italic font-normal">Projects</span>
            </h2>
          </div>
          <p className="font-sans text-[#8C8A99] max-w-sm text-sm md:text-base leading-relaxed">
            Live interactive demos showcasing custom visual components, spring physics engines, and meticulous typographic tuning.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* DEMO 1: SPRING PHYSICS ENGINE */}
          <div className="bg-[#141418] border border-[#2A2A35] rounded-2xl overflow-hidden flex flex-col h-[640px]">
            {/* Demo Header */}
            <div className="p-6 border-b border-[#2A2A35] flex justify-between items-center bg-[#181820]/40">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#7B61FF]" />
                <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">01 // Spring Physics Sandbox</span>
              </div>
              <button 
                onClick={resetPhysics}
                className="p-1.5 rounded-lg bg-[#1C1C22] hover:bg-[#2A2A35] border border-[#2A2A35] text-[#8C8A99] hover:text-white transition-colors cursor-pointer"
                title="Reset Ball Position"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Playground Area */}
            <div 
              ref={physicsContainerRef}
              className="flex-1 bg-[#09090C] relative overflow-hidden flex items-center justify-center group/field cursor-crosshair border-b border-[#2A2A35]"
            >
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="font-mono text-[9px] text-[#8C8A99] uppercase tracking-wider block">STATE OBSERVER</span>
                <span className="font-mono text-[10px] text-[#7B61FF] font-medium">
                  X: {ballSpringX.get().toFixed(1)}px | Y: {ballSpringY.get().toFixed(1)}px
                </span>
              </div>

              {/* Central Target Anchor */}
              <div className="w-16 h-16 rounded-full border border-dashed border-[#2A2A35]/40 flex items-center justify-center pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-[#2A2A35]/60" />
              </div>

              {/* Connecting Vector String */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line 
                  x1="50%" 
                  y1="50%" 
                  x2={`calc(50% + ${ballSpringX.get()}px)`} 
                  y2={`calc(50% + ${ballSpringY.get()}px)`} 
                  stroke="rgba(123, 97, 255, 0.25)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Draggable Ball */}
              <motion.div
                ref={ballRef}
                drag
                dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
                dragElastic={0.15}
                onDrag={(event, info) => {
                  ballX.set(info.offset.x);
                  ballY.set(info.offset.y);
                }}
                onDragEnd={() => {
                  ballX.set(0);
                  ballY.set(0);
                }}
                style={{ x: ballSpringX, y: ballSpringY }}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7B61FF] to-[#9B85FF] shadow-[0_0_25px_rgba(123,97,255,0.4)] flex items-center justify-center cursor-grab active:cursor-grabbing z-10 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Fingerprint className="w-5 h-5 text-white pointer-events-none" />
              </motion.div>

              <div className="absolute bottom-3 text-center pointer-events-none w-full">
                <span className="font-mono text-[9px] text-[#8C8A99] uppercase tracking-widest">
                  DRAG BALL TO ENGAGE SPRING
                </span>
              </div>
            </div>

            {/* Variable Tune Controls */}
            <div className="p-6 space-y-4 bg-[#141418]">
              <div className="flex items-center gap-2 text-xs text-[#8C8A99] font-mono uppercase tracking-widest font-semibold mb-2">
                <Sliders className="w-3.5 h-3.5 text-[#7B61FF]" />
                <span>Engine Variables</span>
              </div>

              {/* Stiffness Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>STIFFNESS (SPRING RIGIDITY)</span>
                  <span className="text-white font-semibold">{stiffness}</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="400" 
                  value={stiffness} 
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Damping Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>DAMPING (FRICTION LOSS)</span>
                  <span className="text-white font-semibold">{damping}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="45" 
                  value={damping} 
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Mass Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>MASS (WEIGHT FACTOR)</span>
                  <span className="text-white font-semibold">{mass}</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="4" 
                  step="0.1"
                  value={mass} 
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Code Snippet Info */}
              <div className="bg-[#0D0D0F] border border-[#2A2A35] rounded-lg p-3 font-mono text-[9px] text-zinc-400 mt-2">
                <span className="text-blue-400">const</span> config = &#123; stiffness: <span className="text-purple-400">{stiffness}</span>, damping: <span className="text-purple-400">{damping}</span>, mass: <span className="text-purple-400">{mass}</span> &#125;;
              </div>
            </div>
          </div>

          {/* DEMO 2: TYPOGRAPHY SCALE & CONTRAST SIMULATOR */}
          <div className="bg-[#141418] border border-[#2A2A35] rounded-2xl overflow-hidden flex flex-col h-[640px]">
            {/* Demo Header */}
            <div className="p-6 border-b border-[#2A2A35] flex justify-between items-center bg-[#181820]/40">
              <div className="flex items-center gap-2.5">
                <Type className="w-4 h-4 text-[#7B61FF]" />
                <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">02 // Type Scale & Contrast Tuner</span>
              </div>
              <div className="flex gap-1.5">
                {(Object.keys(themeStyles) as Array<keyof typeof themeStyles>).map((t) => (
                  <button
                    key={t}
                    onClick={() => setColorTheme(t)}
                    className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                      colorTheme === t ? 'border-white scale-110' : 'border-transparent opacity-60'
                    }`}
                    style={{
                      backgroundColor: 
                        t === 'purple' ? '#7B61FF' : 
                        t === 'slate' ? '#A1A1AA' : 
                        t === 'emerald' ? '#10B981' : '#E6C229'
                    }}
                    title={`${t} Theme`}
                  />
                ))}
              </div>
            </div>

            {/* Typography Live Preview Area */}
            <div className={`flex-1 transition-colors duration-300 ${themeStyles[colorTheme].bg} ${themeStyles[colorTheme].border} border-b p-6 flex flex-col justify-between relative overflow-hidden`}>
              
              {/* Ratio Stats */}
              <div className="flex justify-between items-center z-10 pointer-events-none">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8C8A99]">CONTRAST RATIO</span>
                <span className={`font-mono text-[10px] px-2 py-0.5 border rounded-full font-bold ${themeStyles[colorTheme].ratingColor}`}>
                  {themeStyles[colorTheme].liveRatio} • {themeStyles[colorTheme].rating}
                </span>
              </div>

              {/* Text Preview Box */}
              <div className="my-auto z-10 py-6">
                <p 
                  className="font-display leading-tight tracking-tight uppercase transition-all font-bold select-none text-center"
                  style={{ 
                    fontSize: `${fontSize}px`, 
                    letterSpacing: `${letterSpacing}em`,
                    color: `rgba(${colorTheme === 'solar' ? '230, 194, 41' : colorTheme === 'emerald' ? '16, 185, 129' : colorTheme === 'slate' ? '244, 244, 245' : '240, 238, 248'}, ${textContrast / 100})` 
                  }}
                >
                  {userText || 'GRID STYLE'}
                </p>
                <p className="font-mono text-[10px] text-[#8C8A99] text-center mt-4 tracking-widest uppercase">
                  PAIRED WITH INTER MONO AT 12PX
                </p>
              </div>

              {/* TextInput Field */}
              <div className="z-10 bg-[#141418]/60 backdrop-blur-sm border border-[#2A2A35] rounded-xl p-2.5">
                <input 
                  type="text" 
                  value={userText}
                  maxLength={25}
                  onChange={(e) => setUserText(e.target.value.toUpperCase())}
                  placeholder="CUSTOM PHRASE..."
                  className="w-full bg-transparent text-center text-xs font-mono text-white focus:outline-none placeholder:text-neutral-600 uppercase tracking-widest"
                />
              </div>
            </div>

            {/* Typography Controls */}
            <div className="p-6 space-y-4 bg-[#141418]">
              <div className="flex items-center gap-2 text-xs text-[#8C8A99] font-mono uppercase tracking-widest font-semibold mb-2">
                <Sliders className="w-3.5 h-3.5 text-[#7B61FF]" />
                <span>Text Grid Options</span>
              </div>

              {/* Font Size Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>FONT SIZE (DISPLAY HEADER)</span>
                  <span className="text-white font-semibold">{fontSize}px</span>
                </div>
                <input 
                  type="range" 
                  min="24" 
                  max="54" 
                  value={fontSize} 
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Letter Spacing Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>LETTER SPACING (TRACKING)</span>
                  <span className="text-white font-semibold">{letterSpacing}em</span>
                </div>
                <input 
                  type="range" 
                  min="-0.05" 
                  max="0.15" 
                  step="0.01"
                  value={letterSpacing} 
                  onChange={(e) => setLetterSpacing(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Contrast / Opacity Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>TEXT CONTRAST (OPACITY VALUE)</span>
                  <span className="text-white font-semibold">{textContrast}%</span>
                </div>
                <input 
                  type="range" 
                  min="40" 
                  max="100" 
                  value={textContrast} 
                  onChange={(e) => setTextContrast(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* CSS Variables output */}
              <div className="bg-[#0D0D0F] border border-[#2A2A35] rounded-lg p-3 font-mono text-[9px] text-zinc-400 mt-2">
                <span className="text-emerald-400">.heading</span> &#123; <span className="text-blue-400">font-size</span>: {fontSize}px; <span className="text-blue-400">letter-spacing</span>: {letterSpacing}em; &#125;
              </div>
            </div>
          </div>

          {/* DEMO 3: INTERACTIVE SVG BRAND GLYPH */}
          <div className="bg-[#141418] border border-[#2A2A35] rounded-2xl overflow-hidden flex flex-col h-[640px]">
            {/* Demo Header */}
            <div className="p-6 border-b border-[#2A2A35] flex justify-between items-center bg-[#181820]/40">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[#7B61FF]" />
                <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">03 // SVG Generative Brand Glyph</span>
              </div>
              <button 
                onClick={() => setIsAnimatingGlyph(!isAnimatingGlyph)}
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isAnimatingGlyph 
                    ? 'bg-[#7B61FF]/10 text-[#7B61FF] border-[#7B61FF]/30' 
                    : 'bg-[#1C1C22] hover:bg-[#2A2A35] border-[#2A2A35] text-[#8C8A99] hover:text-white'
                }`}
                title={isAnimatingGlyph ? "Pause Rotation" : "Play Rotation"}
              >
                <Play className={`w-3.5 h-3.5 ${isAnimatingGlyph ? 'fill-[#7B61FF]' : ''}`} />
              </button>
            </div>

            {/* Live Interactive SVG Area */}
            <div className="flex-1 bg-[#09090C] relative overflow-hidden flex items-center justify-center border-b border-[#2A2A35]">
              
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="font-mono text-[9px] text-[#8C8A99] uppercase tracking-wider block">GLYPH MATRICES</span>
                <span className="font-mono text-[10px] text-emerald-400">
                  VECTORS: {lineCount * 2} | STROKE: {strokeWidth}px
                </span>
              </div>

              {/* Generative Vector Art container */}
              <motion.div
                animate={isAnimatingGlyph ? { rotate: 360 } : {}}
                transition={{ duration: 120 / rotateSpeed, repeat: Infinity, ease: 'linear' }}
                className="w-64 h-64 flex items-center justify-center relative pointer-events-none z-10"
              >
                {/* Glow Filter behind the SVG */}
                <div 
                  className="absolute w-44 h-44 rounded-full bg-[#7B61FF] opacity-20 filter blur-3xl transition-all duration-300"
                  style={{ transform: `scale(${glowIntensity / 10})` }}
                />

                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <g transform="translate(100, 100)">
                    {Array.from({ length: lineCount }).map((_, i) => {
                      const angle = (i * 360) / lineCount;
                      const rad = (angle * Math.PI) / 180;
                      // Dynamic mathematical curves based on state values
                      const r1 = 60 + Math.sin(rad * 4) * 15;
                      const r2 = 12 + Math.cos(rad * 2) * 8;
                      const x1 = Math.cos(rad) * r1;
                      const y1 = Math.sin(rad) * r1;
                      const x2 = Math.cos(rad) * r2;
                      const y2 = Math.sin(rad) * r2;
                      
                      return (
                        <g key={i}>
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#7B61FF"
                            strokeWidth={strokeWidth}
                            opacity={0.8}
                          />
                          <circle 
                            cx={x1} 
                            cy={y1} 
                            r={strokeWidth * 1.5} 
                            fill="#F0EEF8" 
                          />
                          <circle 
                            cx={x2} 
                            cy={y2} 
                            r={strokeWidth * 1} 
                            fill="#7B61FF" 
                          />
                        </g>
                      );
                    })}
                  </g>
                </svg>
              </motion.div>

              <div className="absolute bottom-3 text-center pointer-events-none w-full">
                <span className="font-mono text-[9px] text-[#8C8A99] uppercase tracking-widest">
                  ALGORITHM-GENERATED MATRIX ART
                </span>
              </div>
            </div>

            {/* SVG Controls */}
            <div className="p-6 space-y-4 bg-[#141418]">
              <div className="flex items-center gap-2 text-xs text-[#8C8A99] font-mono uppercase tracking-widest font-semibold mb-2">
                <Sliders className="w-3.5 h-3.5 text-[#7B61FF]" />
                <span>Vector Parameters</span>
              </div>

              {/* Line Count Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>VECTORS (LINE DENSITY)</span>
                  <span className="text-white font-semibold">{lineCount} Spikes</span>
                </div>
                <input 
                  type="range" 
                  min="6" 
                  max="28" 
                  value={lineCount} 
                  onChange={(e) => setLineCount(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Rotation Speed Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>ANGULAR ROTATION FREQUENCY</span>
                  <span className="text-white font-semibold">{rotateSpeed} Hz</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="40" 
                  value={rotateSpeed} 
                  onChange={(e) => setRotateSpeed(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Stroke Width Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#8C8A99]">
                  <span>STROKE THICKNESS (SVG STROKE)</span>
                  <span className="text-white font-semibold">{strokeWidth}px</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="4" 
                  step="0.1"
                  value={strokeWidth} 
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                  className="w-full accent-[#7B61FF] h-1 bg-[#2A2A35] rounded-lg cursor-pointer appearance-none"
                />
              </div>

              {/* Code Snippet Info */}
              <div className="bg-[#0D0D0F] border border-[#2A2A35] rounded-lg p-3 font-mono text-[9px] text-zinc-400 mt-2">
                &lt;<span className="text-red-400">svg</span>&gt; &lt;<span className="text-blue-400">line</span> <span className="text-[#F46036]">stroke-width</span>="<span className="text-purple-400">{strokeWidth}</span>" /&gt; &lt;/<span className="text-red-400">svg</span>&gt;
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
