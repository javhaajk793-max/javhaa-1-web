import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Globe, Edit2, Check, Sparkles } from 'lucide-react';

interface HeaderProps {
  subdomain: string;
  onSubdomainChange: (newSubdomain: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ subdomain, onSubdomainChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEditingDomain, setIsEditingDomain] = useState(false);
  const [tempDomain, setTempDomain] = useState(subdomain);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveDomain = () => {
    const clean = tempDomain.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '');
    if (clean) {
      onSubdomainChange(clean);
    }
    setIsEditingDomain(false);
  };

  const navLinks = [
    { name: 'Нүүр', href: '#hero' },
    { name: 'Миний тухай', href: '#about' },
    { name: 'Бүтээлүүд', href: '#projects' },
    { name: 'Чадварууд', href: '#skills' },
    { name: 'Зорилго', href: '#goals' },
    { name: 'Холбоо барих', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-red-500 flex items-center justify-center text-white font-black text-sm shadow-md shadow-rose-600/30 group-hover:scale-105 transition-transform">
            Ж
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1">
              ЖАВХЛАН<span className="text-rose-500 font-mono">.dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider -mt-1">
              ЖАВХАА · 14 НАС · PROGRAMMER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Netlify Subdomain & External Link Bar */}
        <div className="hidden sm:flex items-center gap-2">
          {isEditingDomain ? (
            <div className="flex items-center bg-slate-900 border border-rose-500/50 rounded-lg px-2 py-1 text-xs">
              <span className="text-slate-500 text-[11px] font-mono mr-1">https://</span>
              <input
                type="text"
                value={tempDomain}
                onChange={(e) => setTempDomain(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveDomain()}
                placeholder="таны-нэр"
                className="bg-transparent text-rose-300 font-mono text-xs w-28 outline-none"
                autoFocus
              />
              <span className="text-slate-500 text-[11px] font-mono mr-2">.netlify.app</span>
              <button
                onClick={handleSaveDomain}
                className="p-1 bg-rose-600 hover:bg-rose-500 text-white rounded transition-colors"
                title="Хадгалах"
              >
                <Check size={12} />
              </button>
            </div>
          ) : (
            <div
              onClick={() => setIsEditingDomain(true)}
              className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 cursor-pointer transition-colors group"
              title="Netlify холбоосоо өөрчлөх бол дарна уу"
            >
              <Globe size={13} className="text-rose-400 group-hover:rotate-12 transition-transform" />
              <span className="text-rose-400 font-semibold">{subdomain}</span>
              <span className="text-slate-500">.netlify.app</span>
              <Edit2 size={11} className="text-slate-500 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )}

          <a
            href={`https://${subdomain}.netlify.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg shadow-md shadow-rose-900/30 transition-all hover:scale-105"
          >
            <span>Үндсэн сайт</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`https://${subdomain}.netlify.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg text-xs"
            title="Үндсэн сайт"
          >
            <Globe size={16} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            aria-label="Цэс нээх"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 py-5 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-rose-400 py-1 border-b border-slate-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Netlify subdomain:</span>
              <span className="font-mono text-rose-400 font-semibold">{subdomain}.netlify.app</span>
            </div>
            <a
              href={`https://${subdomain}.netlify.app`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg shadow"
            >
              <span>Үндсэн сайт руу очих</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
