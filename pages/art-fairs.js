import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FAIRS = [
  { name: 'India Art Fair 2024', location: 'New Delhi, India', date: 'Feb 2024', desc: 'South Asia&#39;s leading contemporary and modern art fair.' },
  { name: 'TEFAF Maastricht', location: 'Maastricht, Netherlands', date: 'Mar 2023', desc: 'One of the world\'s most prestigious art and antiques fairs.' },
  { name: 'Art Basel Hong Kong', location: 'Hong Kong', date: 'May 2023', desc: 'Asia&#39;s flagship art fair, presenting Indian modernism to an international audience.' },
  { name: 'India Art Fair 2023', location: 'New Delhi, India', date: 'Feb 2023', desc: 'Annual showcase of the best in contemporary Indian art.' },
]

export default function ArtFairs() {
  return (
    <>
      <Head><title>Art Fairs – Dhoomimal Art Gallery</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section className="art-fairs" style={{ paddingTop: 80 }}>
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Global Presence</div>
              <h1 className="section-title">Art Fairs</h1>
            </div>
          </div>
          <div className="fairs-list">
            {FAIRS.map((f, i) => (
              <div key={i} className="fair-item">
                <div>
                  <div className="fair-name">{f.name}</div>
                  <div className="fair-detail">{f.date} · {f.location}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 8, maxWidth: 500 }}>{f.desc}</p>
                </div>
                <div className="fair-arrow">→</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
