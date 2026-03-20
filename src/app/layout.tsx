import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MotorBid | The Digital Curator for Automotive Excellence',
  description: 'The world’s most transparent marketplace for vintage, classic, and prestige automobiles. Curated by experts, trusted by enthusiasts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary antialiased">
        {children}
      </body>
    </html>
  )
}
