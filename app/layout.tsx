import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio website',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* 导航栏 */}
        <nav className="bg-gray-100 p-4">
          <div className="max-w-4xl mx-auto flex gap-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/projects" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}