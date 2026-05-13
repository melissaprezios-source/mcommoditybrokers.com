import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  FileText,
  Handshake,
  Ship,
  Fuel,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  BadgeCheck,
  LockKeyhole,
  ClipboardCheck,
  MessageCircle,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MPCommodityBrokersWebsite() {
  const services = [
    {
      icon: <Fuel className="h-7 w-7" />,
      title: "Energy Commodity Facilitation",
      text: "Structured intermediary support for EN590 10ppm, Jet A1, D6, crude oil, LNG and selected petroleum products."
    },
    {
      icon: <ClipboardCheck className="h-7 w-7" />,
      title: "Buyer Qualification Funnel",
      text: "We filter enquiries by product, quantity, port, preferred procedure, payment instrument and proof of capability before introductions."
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Document Alignment",
      text: "Supporting orderly review of LOI, ICPO, SCO, FCO, NCNDA/IMFPA, corporate profile and transaction procedure expectations."
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Intermediary Protection",
      text: "Clear commission positioning, written protection and controlled introduction steps to reduce the risk of being bypassed."
    }
  ];

  const products = ["EN590 10ppm Diesel", "Jet A1 Aviation Fuel", "D6 Virgin Fuel Oil", "Crude Oil", "LNG", "Petroleum By-Products"];

  const qualification = [
    "Company profile or trade background",
    "Product, quantity and destination port",
    "Preferred procedure: FOB, CIF, TTO or other",
    "Payment instrument: LC, SBLC, DLC, TT or escrow pathway",
    "Proof of funds or bank capability where applicable",
    "Clear role: buyer, seller, mandate, facilitator or trader"
  ];

  const process = [
    "Submit buyer or seller enquiry",
    "MP reviews commercial seriousness and documentation readiness",
    "Procedure, port, quantity and payment terms are compared",
    "Protection documents are agreed before sensitive introductions",
    "Parties progress toward direct commercial engagement"
  ];

  const redFlags = [
    "No company email or verifiable business identity",
    "Refusal to disclose role in the deal chain",
    "Pressure to introduce contacts before protection is signed",
    "Unrealistic pricing far below market without proof",
    "Requests for upfront fees without transparent basis"
  ];

  const handleSubmitEnquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Enquiry submitted successfully! We will review and contact you soon.");
        e.currentTarget.reset();
      } else {
        alert("Error submitting enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting enquiry. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_35%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-400/20">MP</div>
              <div>
                <p className="text-lg font-semibold tracking-wide">MP Commodity Brokers</p>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Energy • Trade • Facilitation</p>
              </div>
            </div>
            <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
              <a href="#services" className="hover:text-amber-300">Services</a>
              <a href="#qualify" className="hover:text-amber-300">Qualify</a>
              <a href="#process" className="hover:text-amber-300">Process</a>
              <a href="#contact" className="hover:text-amber-300">Contact</a>
            </nav>
          </header>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-32">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-sm text-amber-200 backdrop-blur">
                <Globe2 className="h-4 w-4" /> Global commodity deal facilitation
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Serious energy buyers. Credible sellers. Protected introductions.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                MP Commodity Brokers helps qualified parties structure legitimate petroleum and energy commodity conversations — with disciplined documentation, role clarity and intermediary protection before sensitive introductions are made.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-2xl bg-amber-400 px-7 py-6 text-base font-semibold text-slate-950 hover:bg-amber-300">
                  Submit Qualified Enquiry <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-7 py-6 text-base text-white hover:bg-white/10">
                  Request WhatsApp Review <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="mt-5 text-sm text-slate-400">For serious buyers, sellers, mandates, traders and facilitators only.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <Card className="rounded-[2rem] border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <CardContent className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-8">
                  <BadgeCheck className="mb-6 h-12 w-12 text-amber-300" />
                  <h2 className="text-2xl font-bold text-white">Qualified Deal Intake</h2>
                  <p className="mt-4 text-slate-300">Before introductions, we review the essentials that serious commodity parties expect.</p>
                  <div className="mt-8 space-y-4">
                    {qualification.slice(0, 5).map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-white/5 p-3 text-sm text-slate-200">
                        <CheckCircle2 className="h-5 w-5 text-amber-300" /> {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center md:grid-cols-4 lg:px-8">
          <div><p className="text-3xl font-bold text-amber-300">Energy</p><p className="text-sm text-slate-300">Petroleum product focus</p></div>
          <div><p className="text-3xl font-bold text-amber-300">Filtered</p><p className="text-sm text-slate-300">Qualified enquiries only</p></div>
          <div><p className="text-3xl font-bold text-amber-300">Protected</p><p className="text-sm text-slate-300">Intermediary-safe approach</p></div>
          <div><p className="text-3xl font-bold text-amber-300">Global</p><p className="text-sm text-slate-300">Buyer and seller network</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Positioning</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Built for credibility in a market full of noise.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Commodity brokerage requires more than forwarding offers. It requires commercial discipline, clear roles, document control, realistic procedures and protection for every legitimate party involved.
            </p>
            <p>
              MP Commodity Brokers positions itself as a professional facilitation partner for serious energy commodity conversations. We do not present unverified claims as fact. We help parties structure the next step with clarity, caution and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Services</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Deal support for buyers, sellers and intermediaries.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="rounded-3xl border-white/10 bg-white/5 text-white shadow-xl shadow-black/10">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="qualify" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white">
            <CardContent className="p-8">
              <Users className="mb-6 h-11 w-11 text-amber-300" />
              <h2 className="text-3xl font-bold">Who we work with</h2>
              <div className="mt-8 grid gap-3">
                {products.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950 p-4 text-slate-200">
                    <Fuel className="h-5 w-5 text-amber-300" /> {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-amber-300/20 bg-amber-300/10 text-white">
            <CardContent className="p-8">
              <LockKeyhole className="mb-6 h-11 w-11 text-amber-300" />
              <h2 className="text-3xl font-bold">Anti-time-waster filter</h2>
              <p className="mt-4 text-slate-300">To protect all parties, we prioritise enquiries that can answer the following:</p>
              <div className="mt-8 space-y-3">
                {qualification.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/80 p-4 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" /> {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="process" className="bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Our Process</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">A safer pathway from enquiry to introduction.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                We encourage parties to slow down, verify the basics and protect the commercial position before exchanging sensitive contacts or moving documents forward.
              </p>
            </div>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-950">{index + 1}</div>
                  <p className="pt-2 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Card className="rounded-[2rem] border-red-400/20 bg-red-950/20 text-white">
          <CardContent className="p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <AlertTriangle className="mb-5 h-12 w-12 text-amber-300" />
                <h2 className="text-3xl font-bold">Red flags we screen for</h2>
                <p className="mt-4 text-slate-300">The energy commodity space attracts genuine operators and opportunists. We help keep conversations disciplined.</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {redFlags.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-950/80 p-4 text-sm text-slate-200">{item}</div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="bg-amber-400 py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-bold">Have a real buyer, seller or offer?</h2>
              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-800">
                Send the product, quantity, port, procedure, payment instrument and your exact role. We will review whether the enquiry is ready for a structured next step.
              </p>
            </div>
            <Button className="rounded-2xl bg-slate-950 px-7 py-6 text-white hover:bg-slate-800">
              Start Enquiry <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Contact</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Submit a qualified commodity enquiry.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The more complete your information, the faster we can assess whether the opportunity is suitable for next-step review.
            </p>
            <div className="mt-10 space-y-4 text-slate-300">
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-300" /> info@mpcommoditybrokers.com</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-300" /> +61 XXX XXX XXX</p>
              <p className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-amber-300" /> WhatsApp: +61 XXX XXX XXX</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-300" /> Sydney, Australia • Global Network</p>
            </div>
          </div>

          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white">
            <CardContent className="p-8">
              <form className="space-y-5" onSubmit={handleSubmitEnquiry}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Full Name</label>
                    <input name="fullName" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Company Email</label>
                    <input name="email" type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Your Role</label>
                    <input name="role" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="Buyer, seller, mandate, facilitator..." required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Product</label>
                    <input name="product" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="EN590, Jet A1, D6, LNG..." required />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Quantity / Contract</label>
                    <input name="quantity" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="Trial + monthly quantity" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Port / Delivery Term</label>
                    <input name="port" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="FOB Rotterdam, CIF China..." required />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Procedure / Payment Instrument</label>
                  <input name="procedure" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="DIP & Pay, LC, SBLC, DLC, TT..." required />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Message</label>
                  <textarea name="message" className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-300" placeholder="Briefly explain the opportunity, available documents, price indication and what you need from MP Commodity Brokers..." required />
                </div>
                <button type="submit" className="w-full rounded-2xl bg-amber-400 py-6 text-base font-semibold text-slate-950 hover:bg-amber-300">Send Qualified Enquiry</button>
                <p className="text-xs leading-6 text-slate-400">By submitting, you confirm the information is accurate to the best of your knowledge and understand that all transactions require independent verification and legal review.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2026 MP Commodity Brokers. All rights reserved.</p>
        <p className="mt-2">Disclaimer: MP Commodity Brokers provides intermediary and facilitation support only. All transactions are subject to independent due diligence, verification and legal review. No representation is made that product availability, mandate authority, pricing or transaction terms are verified until confirmed through proper documentation.</p>
      </footer>
    </div>
  );
}
