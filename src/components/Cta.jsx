import React from 'react'
import { Link } from 'react-router-dom'

export default function Cta({
  title = 'Get Started Today',
  subtitle = 'Ready to revolutionize how you connect? Sign up for a free trial and experience the Wiremail difference.',
  primaryLabel = 'Request Demo',
  primaryTo = '/contact',
  secondaryLabel = 'Learn More',
  secondaryTo = '/about'
}) {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className="relative rounded-2xl overflow-hidden w-full"
          style={{ backgroundImage: 'linear-gradient(90deg, #8b65ff 0%, #ff4d8a 100%)'}}
        >
          {/* Decorative overlay image (subtle) */}
          <div className="absolute inset-0 bg-cover bg-right opacity-20" style={{ backgroundImage: 'url(/images/cta-bg.png)' }} />
          {/* Darken left side for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          <div className="relative z-10 px-6 py-16 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-3">Workflow Management</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">{title}</h2>
              <p className="text-base md:text-lg text-white/90 mb-8">{subtitle}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <Link to={primaryTo} className="inline-block bg-white text-slate-900 font-semibold px-6 md:px-8 py-3 rounded-full shadow hover:shadow-xl transition transform hover:-translate-y-0.5">
                  {primaryLabel}
                </Link>

                <Link to={secondaryTo} className="inline-block bg-white/10 text-white font-medium px-6 md:px-8 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}