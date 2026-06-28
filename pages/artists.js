import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ARTISTS = [
  { name: 'M.F. Husain', origin: 'India', medium: 'Oil, Acrylic', initial: 'H', bio: 'One of India&#39;s most celebrated painters, known for his bold figurative work and vibrant use of colour.' },
  { name: 'Ram Kumar', origin: 'India', medium: 'Oil on Canvas', initial: 'R', bio: 'A leading figure in Indian modernism, Ram Kumar's landscapes are meditations on memory and solitude.' },
  { name: 'Akbar Padamsee', origin: 'India', medium: 'Oil, Watercolour', initial: 'A', bio: 'Pioneer of the Progressive Artists Group, known for his poetic abstraction and philosophical depth.' },
  { name: 'Manjit Bawa', origin: 'India', medium: 'Oil on Canvas', initial: 'B', bio: 'Renowned for luminous colour fields and figures drawn from Sufi and Punjabi traditions.' },
  { name: 'Krishen Khanna', origin: 'India', medium: 'Oil, Gouache', initial: 'K', bio: 'A humanist painter whose subjects encompass bandwallahs, street life, and the sacred.' },
  { name: 'Arpita Singh', origin: 'India', medium: 'Watercolour, Acrylic', initial: 'S', bio: 'Celebrated for her richly layered compositions combining domestic imagery with political commentary.' },
]

export default function Artists() {
  return (
    <>
      <Head><title>Artists – Dhoomimal Art Gallery</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section style={{ padding: '80px 48px 100px' }}>
          <div className="section-eyebrow">Our Roster</div>
          <h1 className="section-title" style={{ marginBottom: 60 }}>
            Artists we<br /><em>represent</em>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {ARTISTS.map((a, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--divider)', paddingTop: 24 }}>
                <div style={{
                  width: 64, height: 64, background: 'var(--ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                  fontFamily: 'var(--font-display)', fontSize: 28,
                  color: 'rgba(255,255,255,0.15)', fontStyle: 'italic'
                }}>{a.initial}</div>
                <div className="section-eyebrow" style={{ marginBottom: 6 }}>{a.medium}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, marginBottom: 8 }}>{a.name}</h3>
                <div style={{ fontSize: 12, color: 'var(--warm-gray)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{a.origin}</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--warm-gray)' }}>{a.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
