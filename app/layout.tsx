
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {  } from 'next/font/google'
import Context from './context/Context'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Red_Hat_Display } from 'next/font/google'
 const Redfont=Red_Hat_Display({subsets:["latin"]})

 
 
export const metadata = {
  title: 'Scissors',
  description: 'Scissors is your go-to URL shortener service, providing fast and reliable shortening of long URLs to make sharing links easier. Experience seamless and efficient URL management today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={Redfont.className} lang="en">
      <Context>
      <body className=''>
        <main className='App'>
          
         <div className='margin-main'>
         <Navbar/>
         </div>
          <div>
            {children}
          </div>
         <div className='footer-main mt-20'>
         <Footer/>
         </div>
         <ToastContainer/>

        </main>
      </body>
      </Context>
    </html>
  )
}
