import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head><title>About – Dhoomimal Art Gallery</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section style={{ padding: '80px 48px 60px' }}>
          <div className="section-eyebrow">Our Story</div>
          <h1 className="section-title" style={{ marginBottom: 40 }}>
            About<br /><em>Dhoomimal</em>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--warm-gray)', marginBottom: 24 }}>
                Established in 1936, Dhoomimal Art Gallery is one of India&#39;s oldest and most respected fine art galleries. 
                Located in the heart of Connaught Place, New Delhi, the gallery has been at the forefront of promoting 
                modern and contemporary Indian art for nearly nine decades.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--warm-gray)', marginBottom: 24 }}>
                The gallery has championed artists of the Progressive Artists Group and continues to discover and represent 
                a new generation of Indian artists whose work speaks to universal themes through a distinctly Indian lens.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--warm-gray)' }}>
                From intimate drawings to monumental canvases, the collection spans mediums and movements, 
                offering collectors a rare opportunity to engage with the full spectrum of Indian artistic expression.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #2C2A26, #4A3F2F)',
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.15)',
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>Gallery Interior</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
