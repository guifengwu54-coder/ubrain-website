'use client';

import { useState } from 'react';
import Link from 'next/link';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card p-6 md:p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h2 className="text-xl font-bold text-medical-900 mb-2">Message Sent</h2>
        <p className="text-medical-500 text-sm">Our team will get back to you within 1-2 business days.</p>
      </div>
    );
  }

  return (
    <div className="card p-6 md:p-8">
      <h2 className="text-xl font-bold text-medical-900 mb-6">Send Us a Message</h2>
      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-medical-700 mb-1.5">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-medical-200 bg-white text-medical-900 placeholder-medical-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-medical-700 mb-1.5">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-medical-200 bg-white text-medical-900 placeholder-medical-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-medical-700 mb-1.5">Inquiry Type</label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-medical-200 bg-white text-medical-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm">
            <option value="">Please select</option>
            <option value="product">Product Inquiry</option>
            <option value="order">Order Issue</option>
            <option value="cooperation">Research Collaboration</option>
            <option value="media">Media/Press</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-medical-700 mb-1.5">Message</label>
          <textarea
            required
            rows={5}
            className="w-full px-4 py-2.5 rounded-lg border border-medical-200 bg-white text-medical-900 placeholder-medical-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none"
            placeholder="Please describe your question or inquiry in detail..."
          />
        </div>
        <button type="submit" className="btn-primary !bg-emerald-600 hover:!bg-emerald-700 w-full !py-3">
          Send Message
        </button>
        <p className="text-xs text-medical-400 text-center">
          By submitting, you agree to our privacy policy. We will not use your information for any other purpose.
        </p>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-medical-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="container-page text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-medical-500 max-w-xl mx-auto">
            Whether you have a product question, research collaboration idea, or media inquiry — we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold text-medical-800 mb-1">Live Chat</h3>
                <p className="text-xs text-medical-400 mb-3">Mon–Sun 9:00–18:00 (SGT)</p>
                <button className="btn-primary !bg-emerald-600 hover:!bg-emerald-700 text-sm w-full !py-2.5">Start Chat</button>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-bold text-medical-800 mb-1">Email Us</h3>
                <p className="text-xs text-medical-400 break-all">hello@ubrain.sg</p>
                <p className="text-xs text-medical-400 mt-1">Response within 24h on weekdays</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold text-medical-800 mb-1">Visit Us</h3>
                <p className="text-xs text-medical-400">81 Ayer Rajah Crescent</p>
                <p className="text-xs text-medical-400">#03-70 Launchpad@OneNorth</p>
                <p className="text-xs text-medical-400 mt-1">Singapore 139967</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-medical-50 section-padding">
        <div className="container-page max-w-4xl text-center">
          <h2 className="section-title mb-6">Company Information</h2>
          <div className="card p-6 md:p-8 inline-block text-left max-w-lg mx-auto">
            <div className="space-y-3 text-sm text-medical-600">
              <div className="flex gap-3">
                <span className="font-medium text-medical-800 shrink-0 w-24">Company</span>
                <span>The Biolabs Pte Ltd</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-medical-800 shrink-0 w-24">Brand</span>
                <span>UBrain</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-medical-800 shrink-0 w-24">Address</span>
                <span>81 Ayer Rajah Crescent #03-70, Launchpad@OneNorth, Singapore 139967</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-medical-800 shrink-0 w-24">Research Partner</span>
                <span>Nanyang Technological University (NTU)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-medical-800 shrink-0 w-24">Certification</span>
                <span>GMP Certified by HSA Singapore</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
