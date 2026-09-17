import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Users,
  Zap,
  Info,
  ShoppingBag,
  Activity,
  Mic,
  Share2,
  BookOpen,
  Sparkles,
} from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ target, suffix = '', duration = 2000 }: CounterProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) {
                requestAnimationFrame(tick);
              }
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref}>
      {value}
      {suffix}
    </div>
  );
};

const marqueePhotos = [
  { src: '/src/pic/1.jpg', caption: 'Community in action' },
  { src: '/src/pic/89.jpg', caption: 'Youth-led sessions' },
  { src: '/src/pic/112.jpg', caption: 'Creative workshops' },
  { src: '/src/pic/122.jpg', caption: 'Moments that matter' },
  { src: '/src/pic/132.jpg', caption: 'Makers & dreamers' },
  { src: '/src/pic/8962.jpg', caption: 'The Bȝ Arts spirit' },
];

const pillars = [
  { icon: Mic, label: 'Podcast' },
  { icon: Sparkles, label: 'Workshops' },
  { icon: Share2, label: 'Social Media' },
  { icon: BookOpen, label: 'Website & Magazine' },
];

const Home = () => {
  return (
    <div className="animate-fade-in overflow-x-clip">
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,140,255,0.12),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-gold/40 text-gold px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
                <Sparkles size={15} />
                Youth-Led Creative Community
              </span>
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
                Where ancient creativity meets today’s
                <span className="text-gold italic"> youth.</span>
              </h1>
              <p className="text-lg md:text-xl max-w-xl leading-relaxed opacity-90 mb-10">
                From the spirit of Ancient Egypt to the voices of today, Bȝ Arts brings young creatives together — to learn, connect, and shape the future with imagination.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/activities"
                  className="inline-flex items-center space-x-2 bg-gold text-indigo-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105 shadow-xl shadow-gold/20"
                >
                  <span>Explore Activities</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-indigo-900 hover:border-white"
                >
                  <span>Our Story</span>
                </Link>
              </div>
            </div>

            {/* Hero photo collage */}
            <div className="relative hidden lg:block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rotate-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-950/50 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                <img
                  src="/src/pic/89.jpg"
                  alt="Bȝ Arts community"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
              </div>

              <div className="absolute -top-6 -left-8 -rotate-3 bg-white text-indigo-900 rounded-2xl shadow-xl px-6 py-4 animate-float">
                <div className="font-display text-3xl font-bold">2000+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Participants</div>
              </div>

              <div className="absolute -bottom-6 -right-4 rotate-2 bg-gold text-indigo-900 rounded-2xl shadow-xl px-6 py-4 animate-float-slow">
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-3xl">✦</span>
                  <span className="text-lg">Lotus-born</span>
                </div>
                <div className="text-sm font-semibold opacity-80">Ancient soul · modern voice</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-16">
            <path d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="#faf7f0"/>
          </svg>
        </div>
      </section>

      {/* ===== PHOTO MARQUEE ===== */}
      <section className="relative py-12 bg-indigo-950 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {[...marqueePhotos, ...marqueePhotos].map((photo, index) => (
            <div key={index} className="group relative shrink-0">
              <img
                src={photo.src}
                alt={photo.caption}
                className="h-60 w-[26rem] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-indigo-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.caption}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
            <span className="h-px w-8 bg-gold" /> Our Impact <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-16">
            A growing community of young creatives reshaping the future of art and innovation across the MENA region.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold animate-slide-up">
              <div className="text-5xl md:text-6xl font-extrabold text-indigo-900">
                <Counter target={2000} suffix="+" />
              </div>
              <p className="mt-3 text-gray-500 uppercase tracking-wider font-semibold text-sm">Participants</p>
            </div>
            <div className="relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <div className="text-5xl md:text-6xl font-extrabold text-indigo-900">
                <Counter target={3} />
              </div>
              <p className="mt-3 text-gray-500 uppercase tracking-wider font-semibold text-sm">Core Symbols</p>
            </div>
            <div className="relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-extrabold text-indigo-900">
                <Counter target={4} />
              </div>
              <p className="mt-3 text-gray-500 uppercase tracking-wider font-semibold text-sm">Activity Pillars</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Link
              to="/about"
              className="group relative block animate-slide-up"
            >
              <div className="relative -rotate-1 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
                <img
                  src="/src/pic/122.jpg"
                  alt="The Bȝ Arts community"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-7">
                  <div>
                    <div className="font-display text-white text-2xl font-bold">Who We Are</div>
                    <div className="text-white/80 text-sm">Our story, mission & team</div>
                  </div>
                  <span className="inline-flex items-center space-x-2 bg-gold text-indigo-900 px-6 py-3 rounded-full font-bold transition-all duration-300 group-hover:bg-yellow-400">
                    <span>Discover</span>
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
              <div className="absolute -top-5 -right-3 bg-indigo-900 text-white rounded-2xl shadow-xl px-6 py-4 animate-float-slow">
                <div className="font-display text-2xl font-bold text-gold">100%</div>
                <div className="text-xs font-semibold uppercase tracking-wide opacity-90">Youth-led</div>
              </div>
            </Link>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
                <Info size={16} /> About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-indigo-900 mb-6 leading-tight">
                A creative home built for the voices of tomorrow.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Inspired by the timeless spirit of Ancient Egypt, we empower high school students in Egypt and the MENA region to explore their artistic voices — bringing together individuality (Ba), growth & community (Sesen), and integration (Sema).
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Youth founders & mentors from across the region',
                  'Programs that blend art, science & society',
                  'A safe space to create, share and grow',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-gray-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="group inline-flex items-center space-x-3 bg-indigo-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gold hover:text-indigo-900 hover:scale-105 shadow-lg"
              >
                <span>Discover Our Story</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IDENTITY ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
              <span className="h-px w-8 bg-gold" /> Our Identity <span className="h-px w-8 bg-gold" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              Three symbols. One community.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Inspired by Ancient Egypt, our identity is built on three powerful symbols that define who we are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                image: '/src/pic/10.png',
                title: 'The Ba (Bȝ)',
                description: 'A bird with a human head — the soul and uniqueness of every person. For us: Unique Opportunity. Every student has a distinct creative voice that deserves to be heard.',
              },
              {
                icon: Users,
                image: '/src/pic/8.png',
                title: 'The Sema',
                description: 'The ancient symbol of unity of the two lands. For us: Integration. Where arts connect with science, technology, and society to spark innovation.',
              },
              {
                icon: Zap,
                image: '/src/pic/9.png',
                title: 'The Sesen',
                description: 'The lotus of beauty, rebirth and inspiration. For us: creative individuality and community — talents flourishing side by side like opening blossoms.',
              },
            ].map(({ image, title, description }, index) => (
              <div
                key={title}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-500" />
                <div className="w-20 h-20 bg-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 group-hover:rotate-0 transition-transform duration-500 ring-1 ring-gold/50">
                  <img src={image} alt={title} className="w-[70%] h-[70%] object-contain" />
                </div>
                <h3 className="font-display text-2xl font-bold text-indigo-900 text-center mb-4">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN US / ACTIVITIES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
                <Activity size={16} /> Join Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-indigo-900 mb-6 leading-tight">
                Find your place in the creative circle.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                From podcasts to workshops, social media and our magazine — there are endless ways to learn, create, and grow with a community that values your voice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {pillars.map(({ icon: Icon, label }) => (
                  <Link
                    key={label}
                    to="/activities"
                    className="group flex items-center gap-4 bg-gray-50 hover:bg-indigo-900 rounded-2xl px-6 py-4 transition-all duration-300"
                  >
                    <Icon size={20} className="text-gold group-hover:text-gold" />
                    <span className="font-semibold text-indigo-900 group-hover:text-white">{label}</span>
                    <ArrowRight size={16} className="ml-auto text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                ))}
              </div>
              <Link
                to="/activities"
                className="group inline-flex items-center space-x-3 bg-gold text-indigo-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105 shadow-lg"
              >
                <span>Explore All Activities</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <Link to="/activities" className="group relative block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rotate-1 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
                <img
                  src="/src/pic/1.jpg"
                  alt="Join our activities"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-7">
                  <div>
                    <div className="font-display text-white text-2xl font-bold">Get Involved</div>
                    <div className="text-white/80 text-sm">Podcasts · Workshops · Community</div>
                  </div>
                  <span className="inline-flex items-center space-x-2 bg-gold text-indigo-900 px-6 py-3 rounded-full font-bold transition-all duration-300 group-hover:bg-yellow-400">
                    <span>Join Us</span>
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SHOP NOW ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop" className="group relative block overflow-hidden rounded-[2.5rem] shadow-2xl animate-slide-up">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-[440px]">
                <img
                  src="/src/pic/132.jpg"
                  alt="Shop our collection"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/30 to-transparent" />
              </div>
              <div className="relative bg-indigo-950 text-white p-10 lg:p-16 flex flex-col justify-center">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-2xl animate-float-slow" />
                <span className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
                  <ShoppingBag size={16} /> Shop Now
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Take a piece of the community home.
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-10">
                  Discover our curated collection of premium products created from youth to youth — supporting young creatives with every purchase.
                </p>
                <div className="inline-flex">
                  <span className="inline-flex items-center space-x-2 bg-gold text-indigo-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-105">
                    <span>Browse the Shop</span>
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 md:py-24 bg-indigo-950 text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-transparent to-gold" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-float-slow" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Ready to start?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your creative journey starts here.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join our growing community and unlock your potential through programs, mentorship, and recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/wRp1EBjwRZnLUeoDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-indigo-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105 shadow-xl shadow-gold/20"
            >
              Register Now
            </a>
            <a
              href="https://linktr.ee/b3arts"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-indigo-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;