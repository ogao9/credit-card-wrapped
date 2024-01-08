import Image from 'next/image'
import FileUpload from './FileUpload'

export default function Home() {
  return (
    <main className="border-4 border-black rounded p-2 mt-4">
      <h1 className="text-2xl font-semibold mb-4 mt-8">Welcome to Credit Card Wrapped</h1>
      <p className="text-lg text-gray-600 mb-4">Spotify Wrapped but for your credit card transaction history</p>
      <Image src="/cc-wrapped.png" alt="Credit Card" width={400} height={400} />
      <FileUpload/>
    </main>
  )
}
