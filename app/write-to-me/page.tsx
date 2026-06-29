"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import Link from "next/link"
import { FaPaperPlane } from "react-icons/fa"

export default function WriteToMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send your message."
      setSubmitMessage(message)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="grid-tex" aria-hidden />
      <div className="bg-decor" aria-hidden="true" />

      <div className="wrap mx-auto">
        <Link href="/links" className="back inline-flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back to links
        </Link>

        <header className="mb-9">
          <div className="mark inline-flex items-center gap-2 mb-4">
            <span className="dot" />DIRECT MESSAGE
          </div>
          <h1 className="text-4xl font-semibold leading-tight">Write to me.</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400 max-w-xl">
            Share whatever is on your mind, even a short note — your message goes straight to my inbox.
          </p>
        </header>

        <div className="note mb-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1">
            <path d="M3 7l9 6 9-6" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
          </svg>
          <p>
            <strong className="email-highlight">Add your email</strong> so I can reply to your message directly.
          </p>
        </div>

        <form className="grid gap-4" onSubmit={handleFormSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me what's on your mind..."
              value={formData.message}
              onChange={handleFormChange}
              required
              minLength={8}
            />
          </div>

          <button className="submit" type="submit" disabled={isSending}>
            <span>{isSending ? "Sending..." : "Send it over"}</span>
            <FaPaperPlane className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>

        <div className="privacy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block mr-1 align-middle">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          Your email stays private and is only used to respond.
        </div>

        <footer>Crafted with care · <span>Raihanul Islam</span></footer>
      </div>
    </main>
  )
}
