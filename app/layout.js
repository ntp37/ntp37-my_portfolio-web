import { Inter, Jost, Poppins } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
// const poppins = Poppins({ weight: ['400', '500', '600'] ,subsets: ['latin'] })
const jost = Jost({ weight: ['400', '500', '600'] ,subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Nithipan P.',
  description: 'My portfolio by Nithipan P.(github.com/ntp37)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={jost.className}>
        {children}
      </body>
    </html>
  )
}
