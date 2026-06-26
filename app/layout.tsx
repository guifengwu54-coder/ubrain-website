import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UBrain — Natural Brain Health Supplements | Science-Backed Cognitive Support',
  description:
    'UBrain delivers revolutionary brain health supplements powered by science. Enhance memory, boost focus, and experience peak mental clarity with our proprietary all-natural tropical herbal blend, developed with NTU Singapore researchers.',
  keywords: 'UBrain, brain health supplements, cognitive support, focus, memory, migraine relief, motor function, natural brain supplement, Singapore, NTU research',
  openGraph: {
    title: 'UBrain — Natural Brain Health Supplements | Science-Backed Cognitive Support',
    description: 'Revolutionary brain health supplements powered by science. Developed with NTU Singapore researchers. GMP-certified, all-natural tropical herbal blend.',
    type: 'website',
    locale: 'en_SG',
    siteName: 'UBrain',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-medical-100">
          <nav className="container-page flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="font-bold text-lg text-medical-900 whitespace-nowrap">
                UBrain
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 text-sm text-medical-600">
              <Link href="/shop" className="px-3 py-2 rounded-lg hover:bg-medical-50 hover:text-emerald-700 transition-colors">
                Shop
              </Link>
              <Link href="/journey" className="px-3 py-2 rounded-lg hover:bg-medical-50 hover:text-emerald-700 transition-colors">
                Our Journey
              </Link>
              <Link href="/testimonials" className="px-3 py-2 rounded-lg hover:bg-medical-50 hover:text-emerald-700 transition-colors">
                Testimonials
              </Link>
              <Link href="/faq" className="px-3 py-2 rounded-lg hover:bg-medical-50 hover:text-emerald-700 transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-lg hover:bg-medical-50 hover:text-emerald-700 transition-colors">
                Contact
              </Link>
              <Link href="/shop" className="ml-2 btn-primary text-sm !py-2 !px-4">
                Shop Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <Link href="/shop" className="btn-primary text-sm !py-2 !px-4">
                Shop
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-medical-950 text-medical-300 mt-auto">
          <div className="container-page py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">U</span>
                  </div>
                  <span className="font-bold text-white text-lg">UBrain</span>
                </div>
                <p className="text-sm text-medical-400 leading-relaxed">
                  Brain health supplements for<br />
                  reversing degeneration and<br />
                  reaching peak performance
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Our Products</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
                  <li><Link href="/product/ubrain-focus-memory" className="hover:text-white transition-colors">Focus & Memory</Link></li>
                  <li><Link href="/product/ubrain-motor-regain" className="hover:text-white transition-colors">Motor Regain 100</Link></li>
                  <li><Link href="/product/ubrain-mg100" className="hover:text-white transition-colors">MG-100</Link></li>
                  <li><Link href="/product/ubrain-memory-recovery" className="hover:text-white transition-colors">Memory Recovery</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Learn More</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/journey" className="hover:text-white transition-colors">Our Journey</Link></li>
                  <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Research Partner</h4>
                <ul className="space-y-1 text-sm text-medical-400">
                  <li>Nanyang Technological University</li>
                  <li>School of Biological Sciences</li>
                  <li>The Biolabs Pte Ltd</li>
                  <li>GMP Certified by HSA Singapore</li>
                  <li>Manufactured in Singapore</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-medical-800 mt-8 pt-6 text-center text-xs text-medical-500">
              &copy; {new Date().getFullYear()} UBrain by The Biolabs Pte Ltd. All rights reserved. | 81 Ayer Rajah Crescent #03-70, Launchpad@OneNorth, Singapore 139967 | These statements have not been evaluated by the Health Sciences Authority. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </div>
          </div>
        </footer>

        {/* Mobile bottom nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-medical-100 z-40">
          <div className="flex items-center justify-around py-2">
            <Link href="/" className="flex flex-col items-center gap-0.5 text-medical-400 hover:text-emerald-600 text-xs px-3 py-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Home
            </Link>
            <Link href="/shop" className="flex flex-col items-center gap-0.5 text-medical-400 hover:text-emerald-600 text-xs px-3 py-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              Shop
            </Link>
            <Link href="/testimonials" className="flex flex-col items-center gap-0.5 text-medical-400 hover:text-emerald-600 text-xs px-3 py-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Stories
            </Link>
            <Link href="/faq" className="flex flex-col items-center gap-0.5 text-medical-400 hover:text-emerald-600 text-xs px-3 py-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              FAQ
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
