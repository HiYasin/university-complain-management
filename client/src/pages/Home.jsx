import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvNO3b84Ew6Yx4en6-EYvirMiFHsEpPWPhQ&s",
    alt: "University Campus 1",
  },
  {
    src: "https://images.unsplash.com/photo-1564869736285-fdceca8d43e8?auto=format&fit=crop&w=800&q=80",
    alt: "University Campus 2",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    alt: "University Campus 3",
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  function prevImage() {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }
  function nextImage() {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }

  function onSignup() {
    alert("Navigate to Sign Up page")
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        {/* Carousel */}
        <div className="relative w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden max-h-96">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-72 object-cover"
          />
          <button
            aria-label="Previous Image"
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/60 transition"
          >
            ‹
          </button>
          <button
            aria-label="Next Image"
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/60 transition"
          >
            ›
          </button>
        </div>

        {/* Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            IIUC Complaint Management System
          </h1>
          <p className="text-lg text-muted-foreground">
            Students securely login with their university GSuite accounts to file complaints directly to authorities.
          </p>
          <p className="text-lg text-muted-foreground">
            Prevents reputation damage caused by social media posts, encouraging constructive problem solving.
          </p>
          <Button size="lg" onClick={onSignup}>
            Get Started
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Login", desc: "Sign in using your IIUC GSuite account for secure access." },
            { step: "2", title: "Submit Complaint", desc: "Fill out the complaint form and send directly to the authority." },
            { step: "3", title: "Track & Get Feedback", desc: "Monitor status updates and receive official responses." },
          ].map((item) => (
            <div key={item.step} className="p-6 bg-muted rounded-lg shadow hover:shadow-md transition">
              <div className="text-5xl font-bold text-primary mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground rounded-lg py-12 px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          { number: "500+", label: "Complaints Resolved" },
          { number: "95%", label: "Satisfaction Rate" },
          { number: "1000+", label: "Active Users" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-extrabold">{stat.number}</div>
            <p className="text-lg opacity-90">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Rahim", text: "This system made it so easy to file and track my complaint. Quick response!" },
            { name: "Karim", text: "Very transparent process. No more confusion about complaint status." },
            { name: "Ayesha", text: "I feel my issues are heard and taken seriously. Highly recommended!" },
          ].map((t) => (
            <div key={t.name} className="bg-muted p-6 rounded-lg shadow hover:shadow-md transition">
              <p className="italic mb-4">"{t.text}"</p>
              <div className="font-semibold">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I file a complaint?</AccordionTrigger>
            <AccordionContent>
              Login using your IIUC GSuite account, go to “Submit Complaint” and fill out the form.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I track my complaint status?</AccordionTrigger>
            <AccordionContent>
              Yes, you can view complaint status in your dashboard after logging in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Will my complaint be anonymous?</AccordionTrigger>
            <AccordionContent>
              No, but details remain confidential and are only visible to authorities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Your Voice Heard?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join IIUC Complaint Management System today and help improve our campus.
        </p>
        <Button size="lg" onClick={onSignup}>
          Get Started Now
        </Button>
      </section>

    </div>
  )
}
