import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '{{PROJECT_NAME}} - Transform Your Text Tone Instantly',
  description: 'Turn any email, message, or post into a professional, casual, or witty version in one click — no account, no wait, no nonsense.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* Built with Cleo HQ */}
        <a href="https://cleohq.com" target="_blank" rel="noopener noreferrer" style={{position:'fixed',bottom:'16px',right:'16px',zIndex:9999,display:'flex',alignItems:'center',gap:'5px',padding:'5px 10px',background:'rgba(8,12,16,0.85)',border:'1px solid rgba(255,179,64,0.25)',borderRadius:'20px',textDecoration:'none',fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',fontSize:'11px',color:'rgba(255,179,64,0.9)',backdropFilter:'blur(8px)'}}>
          ⬡ Built with Cleo HQ
        </a>
      </body>
    </html>
  )
}