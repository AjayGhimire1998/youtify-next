import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" h-screen flex justify-center items-center " >
      <p>Welcome to <span className='text-red-500'>Youtify</span></p>
    </div>
  )
}
