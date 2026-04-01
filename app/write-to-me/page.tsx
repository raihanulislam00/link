"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import Link from "next/link"
import { FaPaperPlane } from "react-icons/fa"

export default function WriteToMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const isSuccess = submitMessage.toLowerCase().includes("success")

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage("")
    setIsSending(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message || "Could not send your message. Please try again.")
      }

      setSubmitMessage("Message sent successfully. I will get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send your message."
      setSubmitMessage(message)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(115,245,225,0.14),transparent_40%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[var(--blob-sky)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-6 h-80 w-80 rounded-full bg-[var(--blob-gold)] blur-3xl" />

      <section className="scene relative mx-auto w-full max-w-5xl">
        <div className="card-3d card-glow rounded-[2rem] border border-white/30 bg-white/12 p-8 backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(125deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.03)_100%)]" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
            <Link href="/links" className="pill-btn pill-btn-ghost">
              ← Back to links
            </Link>
          </div>

          <div className="relative z-10 mt-8 text-left text-white">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl [font-family:var(--font-display)]">
              Write to me
            </h1>
            <div className="helper-card mt-4">
              <p className="text-sm text-white/80 sm:text-base">
                Share whatever is on your mind, even a short note.
              </p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-white/75 sm:text-base">
                <span className="inline-flex items-center gap-2">
                  <span className="helper-dot" aria-hidden />
                  Your message goes straight to my inbox.
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="helper-dot" aria-hidden />
                  Add your email so I can reply to your message.
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10">
            <div className="contact-box relative rounded-2xl border border-white/25 bg-white/10 p-5 sm:p-6">
              <form className="grid gap-3" onSubmit={handleFormSubmit}>
                <label className="field-label" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="contact-field"
                  placeholder="Share your name"
                  required
                />

                <label className="field-label" htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="contact-field"
                  placeholder="you@example.com"
                  required
                />

                <label className="field-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="contact-field contact-area"
                  placeholder="Tell me what’s on your mind..."
                  required
                  minLength={8}
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="send-button"
                >
                  <FaPaperPlane aria-hidden />
                  {isSending ? "Sending..." : "Send it over"}
                </button>
              </form>

              {submitMessage && (
                <div
                  className={`alert ${isSuccess ? "alert-success" : "alert-error"}`}
                  role="status"
                  aria-live="polite"
                >
                  {submitMessage}
                </div>
              )}

              {!submitMessage && (
                <p className="mt-3 text-xs text-white/60">Your email stays private and is only used to respond.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
