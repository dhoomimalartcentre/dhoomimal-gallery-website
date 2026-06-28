import { useState, useEffect } from 'react'
import Link from 'next/link'
const links = [
  { href: '/artists', label: 'Artists' },
  { href: '/exhibitions', label: 'Exhibitions' },
  { href: '/collection', label: 'Collection' },
  { href: '/art-fairs', label: 'Art Fairs' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">dhoomimal</Link>
        <ul className="nav-links">
          {links.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
        </ul>
        <button className="nav-menu" onClick={() => setOpen(true)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`mob-nav${open ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setOpen(false)}>x</button>
        {links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
      </div>
    </>
  )
}
