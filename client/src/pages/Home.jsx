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

      
    </div>
  )
}
