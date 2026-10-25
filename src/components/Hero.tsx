import React from 'react';
import { ArrowDown, ExternalLink, Code2, Sparkles, Terminal, Rocket, CheckCircle } from 'lucide-react';
import { USER_INFO } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

interface HeroProps {
  subdomain: string;
}

export const Hero: React.FC<HeroProps> = ({ subdomain }) => {
  const photoUrl = `https://${subdomain}.netlify.app/my-photo.png`;
  const mainSiteUrl = `https://${subdomain}.netlify.app`;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background neon glows & grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-red-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold tracking-wide">
              <Sparkles size={14} className="animate-spin" />
              <span>14 НАСТАЙ ВЭБ ХӨГЖҮҮЛЭГЧИЙН ХУВИЙН ПОРТФОЛИО</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Сайн байна уу! <br />
              Намайг <span className="bg-gradient-to-r from-rose-500 via-red-400 to-amber-400 bg-clip-text text-transparent">Жавхлан</span> гэдэг.
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Би <strong className="text-white font-semibold">14 настай</strong>, 10 жилийн дараа мундаг <strong className="text-rose-400 font-semibold">Programmer</strong> болох мөрөөдөлтэй. Вэб сайт хийж сурах, AI хиймэл оюуныг мэдэх, том газруудын сайтыг хөгжүүлэгч болохоор шаргуу суралцаж байна!
            </p>

            {/* Interactive stats / highlights without pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 border-y border-slate-800/80 py-3 font-mono">
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Нас: 14
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                4+ Netlify Төсөл
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                HTML · CSS · JS
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-300">Улаанбаатар</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-rose-900/30 transition-all hover:scale-105 active:scale-95"
              >
                <Rocket size={17} />
                <span>Миний бүтээлүүд үзэх</span>
              </a>

              <a
                href={mainSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-medium rounded-xl border border-slate-700/80 transition-all hover:scale-105"
              >
                <span>Үндсэн сайт нээх</span>
                <ExternalLink size={15} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <span>Миний тухай</span>
                <ArrowDown size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Avatar & Code Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <ProfileAvatar photoUrl={photoUrl} name={USER_INFO.name} />

            {/* Code Snippet Card */}
            <div className="w-full max-w-sm bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-1 text-slate-400">developer.json</span>
                </div>
                <span>v1.0.0</span>
              </div>
              <div className="space-y-1 text-slate-300">
                <p>
                  <span className="text-rose-400 font-semibold">const</span>{' '}
                  <span className="text-yellow-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">нэр:</span>{' '}
                  <span className="text-emerald-300">"Жавхлан (Жавхаа)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">нас:</span>{' '}
                  <span className="text-amber-300">14</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">хобби:</span>{' '}
                  <span className="text-emerald-300">["Jujutsu Kaisen", "CS2 · ML", "Вэб"]</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">зорилго:</span>{' '}
                  <span className="text-cyan-300">"10 жилийн дараа Programmer"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
