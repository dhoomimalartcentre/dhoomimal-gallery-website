import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Head><title>Contact – Dhoomimal Art Gallery</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section style={{ padding: '80px 48px 100px', maxWidth: 900, margin: '0 auto' }}>
          <div className="section-eyebrow">Get in Touch</div>
          <h1 className="section-title" style={{ marginBottom: 60 }}>
            Contact<br /><em>the Gallery</em>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: 40 }}>
                <div className="section-eyebrow" style={{ marginBottom: 8 }}>Address</div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--warm-gray)' }}>
                  Connaught Place<br />New Delhi – 110001<br />India
                </p>
              </div>
              <div style={{ marginBottom: 40 }}>
                <div className="section-eyebrow" style={{ marginBottom: 8 }}>Hours</div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--warm-gray)' }}>
                  Tuesday – Saturday<br />11:00 AM – 7:00 PM<br />Sunday & Monday: Closed
                </p>
              </div>
              <div>
                <div className="section-eyebrow" style={{ marginBottom: 8 }}>Contact</div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--warm-gray)' }}>
                  <a href="mailto:info@dhoomimalgallery.com" style={{ color: 'var(--gold)' }}>info@dhoomimalgallery.com</a><br />
                  +91 11 2341 0000
                </p>
              </div>
            </div>

            <div>
              {sent ? (
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--gold)' }}>
                  Thank you. We'll be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {['name', 'email'].map(field => (
                    <div key={field}>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8, color: 'var(--warm-gray)' }}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%', padding: '14px 0', background: 'none',
                          border: 'none', borderBottom: '1px solid var(--divider)',
                          fontSize: 15, color: 'var(--ink)', outline: 'none',
                          fontFamily: 'var(--font-body)'
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8, color: 'var(--warm-gray)' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      style={{
                        width: '100%', padding: '14px 0', background: 'none',
                        border: 'none', borderBottom: '1px solid var(--divider)',
                        fontSize: 15, color: 'var(--ink)', outline: 'none',
                        fontFamily: 'var(--font-body)', resize: 'none'
                      }}
                    />
                  </div>
                  <button type="submit" style={{
                    alignSelf: 'flex-start',
                    background: 'var(--ink)', color: 'var(--cream)',
                    border: 'none', padding: '14px 36px',
                    fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
                    cursor: 'pointer', marginTop: 8,
                    fontFamily: 'var(--font-body)'
                  }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
