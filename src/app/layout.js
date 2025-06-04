import { Poppins } from "next/font/google";
import "./globals.css";
import "./index.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // tu choisis les variantes nécessaires
  display: 'swap',
})

export const metadata = {
  title: "URBANITÉS",
  description: "Urbanités est une présentation de résidence par promoteur immobilier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.className}>
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
