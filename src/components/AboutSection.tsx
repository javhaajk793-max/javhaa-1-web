import React from 'react';
import { User, Heart, Target, Sparkles, Laptop, Gamepad2, Tv, Palette, Flame, ShieldAlert, Play, Utensils, Award } from 'lucide-react';
import { USER_INFO, HOBBIES, GOALS, FUN_FACTS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getHobbyIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Laptop className="text-rose-400" size={22} />;
      case 'gamepad-2':
        return <Gamepad2 className="text-violet-400" size={22} />;
      case 'tv':
        return <Tv className="text-red-400" size={22} />;
      case 'palette':
        return <Palette className="text-amber-400" size={22} />;
      default:
        return <Sparkles className="text-rose-400" size={22} />;
    }
  };

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-widest">
            <User size={14} />
            <span>Миний тухай</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Танилцъя! Намайг Жавхлан гэдэг
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            14 настай сурагч хүүгийн сонирхол, дуртай анимэ, тоглоомууд болон 10 жилийн дараах том мөрөөдөл.
          </p>
        </div>

        {/* Top Story Card with Real Info from silver-kataifi-352a93 */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👋</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Сайн байна уу! Намайг Жавхлан (Жавхаа) гэдэг
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {USER_INFO.aboutBio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2.5">
                  <span className="text-lg">🎯</span>
                  <span><strong>Мөрөөдөл:</strong> {USER_INFO.dreamJobHeadline}</span>
                </div>
                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-amber-500/20 text-amber-300 text-xs flex items-center gap-2.5">
                  <span className="text-lg">🏢</span>
                  <span><strong>Зорилго:</strong> {USER_INFO.dreamJobGoal}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-950/70 p-5 rounded-xl border border-slate-800/80 space-y-3 text-xs">
              <div className="font-semibold text-white uppercase tracking-wider text-[11px] pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Хувийн товч мэдээлэл</span>
                <span className="text-emerald-400 font-mono">Netlify-с авсан</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">Нэр:</span>
                <span className="text-slate-200 font-medium">Жавхлан (Жавхаа)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">Нас:</span>
                <span className="text-slate-200 font-medium">14</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">Дуртай анимэ:</span>
                <span className="text-rose-400 font-medium">Jujutsu Kaisen</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">Онлайн тоглоом:</span>
                <span className="text-slate-200 font-medium">CS2, ML, PUBG, Vol</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">Дуртай спорт:</span>
                <span className="text-slate-200 font-medium">Сагс, Волейбол</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Дуртай хоол:</span>
                <span className="text-amber-400 font-medium">Цуйван, Банштай шөл</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts & Favorites Cards (Authentic from silver-kataifi-352a93.netlify.app) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Flame size={18} className="text-rose-500" />
            <h3 className="text-lg font-bold text-white">Сонирхолтой баримтууд & Дуртай зүйлс</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FUN_FACTS.map((fact) => (
              <div
                key={fact.id}
                className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{fact.emoji}</span>
                    <span className="text-[11px] font-mono text-slate-400">{fact.category}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-rose-400 transition-colors">
                    {fact.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{fact.detail}</p>
                </div>

                {fact.imageUrl && (
                  <div className="mt-2 w-full h-28 rounded-xl overflow-hidden border border-slate-800 relative bg-slate-950">
                    <img
                      src={fact.imageUrl}
                      alt={fact.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Favorite YouTube Video Player from silver-kataifi-352a93 */}
        <div className="mb-14 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <Play size={18} fill="currentColor" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Жавхлангийн дуртай видео</h4>
                <p className="text-xs text-slate-400">Netlify сайт дээр байршуулсан дуртай YouTube бичлэг</p>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500">YouTube Embed</span>
          </div>

          <div className="w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
            <iframe
              className="w-full h-full"
              src={USER_INFO.favoriteVideoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Goals & Vision */}
        <div id="goals">
          <div className="flex items-center gap-2 mb-6">
            <Target size={18} className="text-amber-500" />
            <h3 className="text-lg font-bold text-white">Сургалтанд сурч буй зорилго & 10 жилийн төлөвлөгөө</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GOALS.map((goal) => (
              <div
                key={goal.id}
                className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 font-bold">{goal.year}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        goal.status === 'явагдаж_байгаа'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {goal.status === 'явагдаж_байгаа' ? 'Одоо хийж буй' : 'Төлөвлөсөн'}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white pt-1">{goal.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{goal.description}</p>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full mt-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      goal.status === 'явагдаж_байгаа' ? 'w-2/3 bg-rose-500' : 'w-1/4 bg-slate-600'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
