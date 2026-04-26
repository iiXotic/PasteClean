import React, { useState } from 'react';
import { Copy, Check, AlertCircle, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TRACKING_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
  'gclid', 'fbclid', 'igshid', '_gl', 'msclkid', 'mc_eid', 'yclid',
  '__s', 'ref', 'ref_src', 'ref_url', 'click_id'
];

export default function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [cleanUrl, setCleanUrl] = useState('');
  const [removedCount, setRemovedCount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleClean = () => {
    setError('');
    setCleanUrl('');
    setRemovedCount(null);
    setCopied(false);

    if (!inputUrl.trim()) return;

    try {
      let urlStr = inputUrl.trim();
      if (!/^https?:\/\//i.test(urlStr)) {
        urlStr = 'https://' + urlStr;
      }

      const urlObj = new URL(urlStr);
      let count = 0;
      const paramsToDelete: string[] = [];

      urlObj.searchParams.forEach((_, key) => {
        if (TRACKING_PARAMS.includes(key.toLowerCase()) || key.toLowerCase().startsWith('utm_') || key.toLowerCase().endsWith('clid')) {
          paramsToDelete.push(key);
        }
      });

      paramsToDelete.forEach(key => {
        urlObj.searchParams.delete(key);
        count++;
      });

      setCleanUrl(urlObj.toString());
      setRemovedCount(count);
    } catch (err) {
      setError('Please enter a valid URL.');
    }
  };

  const handleCopy = async () => {
    if (cleanUrl) {
      await navigator.clipboard.writeText(cleanUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setInputUrl('');
    setCleanUrl('');
    setRemovedCount(null);
    setError('');
    setCopied(false);
  };

  // Keyboard shortcut for Cmd/Ctrl+Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleClean();
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans flex flex-col selection:bg-white selection:text-black">
      
      {/* Nav / Header */}
      <header className="w-full p-8 flex justify-between items-center border-b border-[#ffffff10]">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 border-2 border-white rounded-sm rotate-45 flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-white"></div>
          </div>
          <span className="text-xl font-light tracking-[0.2em] uppercase text-white">Pasteclean</span>
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-widest text-[#a1a1a1]">
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 pb-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-white">
            Strip the noise.
          </h1>
          <p className="text-[#71717a] text-lg font-serif italic font-light">
            Remove UTMs, click IDs, and cross-site tracking parameters instantly.
          </p>
        </motion.div>

          {/* Input Area */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-2xl flex flex-col gap-4 relative z-10 mb-8"
          >
            <div className="relative">
              <textarea
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Paste your URL here... (e.g. https://shop.com/item?utm_source=ad)"
                className="w-full bg-[#0f0f0f] border border-[#27272a] rounded-none p-6 text-sm font-mono text-[#a1a1a1] focus:outline-none focus:border-[#52525b] transition-all resize-none h-32"
                spellCheck={false}
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                {inputUrl && (
                  <button 
                    onClick={handleClear}
                    className="p-3 text-[#52525b] hover:text-[#e5e5e5] transition-colors"
                    title="Clear"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <button
                  onClick={handleClean}
                  disabled={!inputUrl.trim()}
                  className="bg-white text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#d4d4d8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Clean Link
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm font-medium text-red-500 overflow-hidden ml-2"
                >
                  <div className="flex items-center gap-1.5 py-1">
                    <AlertCircle size={16} /> {error}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results Area */}
          <AnimatePresence>
            {cleanUrl && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, height: 'auto', y: 0, scale: 1 }}
                exit={{ opacity: 0, height: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full max-w-2xl overflow-hidden mt-2 relative z-0"
              >
                <div className="bg-[#0f0f0f] p-6 border border-[#27272a] flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-[#27272a] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-widest text-[#71717a]">Cleaned URL</span>
                    </div>
                    {removedCount !== null && (
                      <div className="text-[10px] tracking-widest text-[#71717a] uppercase">
                        {removedCount > 0 ? `Removed ${removedCount} parameter${removedCount === 1 ? '' : 's'}` : 'Already clean'}
                      </div>
                    )}
                  </div>
                  
                  <div className="relative group">
                    <div className="w-full p-4 pr-16 bg-[#050505] border border-[#27272a] break-all font-mono text-[13px] leading-relaxed text-[#e5e5e5] selection:bg-[#27272a] min-h-[5rem]">
                      {cleanUrl}
                    </div>
                    <button
                      onClick={handleCopy}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-white text-black hover:bg-[#d4d4d8] transition-colors flex items-center justify-center shrink-0 border border-white"
                      title="Copy to clipboard"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Check size={18} className="text-green-500" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Copy size={18} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        
        {/* Footer */}
        <footer className="w-full p-8 flex justify-between items-end border-t border-[#ffffff10]">
          <div className="max-w-xs">
            <p className="text-[10px] uppercase tracking-widest text-[#52525b] mb-2 font-semibold">Status</p>
            <p className="text-[11px] text-[#71717a] font-mono leading-relaxed">
              Ready to clean links<br/>
              Zero Logs Policy
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-widest text-[#52525b]">Pasteclean &copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
  );
}

