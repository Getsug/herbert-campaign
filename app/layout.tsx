import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Herbert Okuthe | The Voice of Your Vision',description:'Herbert Okuthe for CMU-Africa Communications Minister. Communication that opens doors, connects students, and leaves a legacy.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
