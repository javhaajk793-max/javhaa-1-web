import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, Globe, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { USER_INFO, DEFAULT_GUEST_MESSAGES } from '../data/portfolioData';
import { GuestMessage } from '../types';

interface ContactSectionProps {
  subdomain: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ subdomain }) => {
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState<GuestMessage[]>(() => {
    try {
      const saved = localStorage.getItem('javhaa_guest_messages');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_GUEST_MESSAGES;
  });

  const [name, setName] = useState('');
  const [msgText, setMsgText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !msgText.trim()) return;

    const emojis = ['🚀', '🔥', '⭐', '👏', '🎉', '💡'];
    const newMsg: GuestMessage = {
      id: `msg-${Date.now()}`,
      senderName: name.trim(),
      message: msgText.trim(),
      date: new Date().toLocaleDateString('mn-MN'),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem('javhaa_guest_messages', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setName('');
    setMsgText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const mainSiteUrl = `https://${subdomain}.netlify.app`;

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-widest">
            <Mail size={14} />
            <span>Холбоо барих</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Надад зурвас үлдээгээрэй
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Вэб сайтын тухай сэтгэгдэл, санал хүсэлт эсвэл зүгээр л мэндчилгээ илгээх боломжтой.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Шууд холбогдох</span>
                <Sparkles size={16} className="text-rose-400" />
              </h3>

              {/* Email Card */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs text-slate-500 font-medium">Цахим шуудан (И-мэйл):</div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${USER_INFO.email}`}
                    className="text-sm font-mono text-rose-400 hover:text-rose-300 font-semibold truncate"
                  >
                    {USER_INFO.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 bg-slate-800 hover:bg-slate-750 text-slate-300 rounded-lg transition-colors shrink-0"
                    title="Хуулах"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Netlify Main Website Card */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs text-slate-500 font-medium">Миний Netlify сайт:</div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={mainSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-300 hover:text-white truncate"
                  >
                    {mainSiteUrl}
                  </a>
                  <a
                    href={mainSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 rounded-lg transition-colors shrink-0"
                    title="Нээх"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Location & Status */}
              <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Байршил:</span>
                  <span className="text-slate-200">Улаанбаатар хот, Монгол</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Төлөв:</span>
                  <span className="text-emerald-400 font-medium">🟢 Код суралцаж буй сурагч</span>
                </div>
              </div>
            </div>

            {/* Encouragement note */}
            <div className="p-4 bg-gradient-to-r from-rose-950/20 to-amber-950/20 rounded-xl border border-rose-500/20 text-xs text-slate-300 leading-relaxed">
              <span className="font-semibold text-rose-300">Баярлалаа!</span> Таны үлдээсэн сэтгэгдэл намайг цаашдаа улам илүү хичээж, сонирхолтой вэбүүд хийхэд маш том урам өгөх болно.
            </div>
          </div>

          {/* Right Column: Interactive Guestbook & Form */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare size={18} className="text-rose-400" />
                <span>Сэтгэгдэл үлдээх</span>
              </h3>
              <p className="text-xs text-slate-400">
                Жавхаад хандан урмын үг, зөвлөгөө эсвэл санал хүсэлтээ бичээрэй.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Таны нэр:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Жишээ нь: Бат, Саруул найз нь, Багш..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Сэтгэгдэл, урмын үг:
                </label>
                <textarea
                  required
                  rows={3}
                  value={msgText}
                  onChange={(e) => setMsgText(e.target.value)}
                  placeholder="Жавхаад хүргэх зурвасаа энд бичнэ үү..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                {submitted ? (
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5 animate-bounce">
                    <Check size={14} />
                    <span>Баярлалаа! Таны сэтгэгдэл амжилттай нэмэгдлээ.</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500">
                    Сэтгэгдэл жагсаалтад шууд харагдана
                  </span>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all hover:scale-105"
                >
                  <Send size={13} />
                  <span>Илгээх</span>
                </button>
              </div>
            </form>

            {/* Recent Messages List */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Сүүлийн сэтгэгдлүүд ({messages.length})
              </h4>
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {messages.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-start gap-3 text-xs"
                  >
                    <span className="text-lg shrink-0">{item.emoji}</span>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white truncate">{item.senderName}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{item.date}</span>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed break-words">
                        {item.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
