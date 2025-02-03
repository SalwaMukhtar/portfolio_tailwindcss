// pages/about.tsx
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/a1.jpg')" }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-xl text-white mb-6">I am Salwa</p>
        <p className="text-xl text-white mb-6">I am learning artificial intelligence</p>
        <p className="text-xl text-white mb-6">I am a frontend developer and leveling up more skills in the field of IT</p>
        <p className="text-xl text-white mb-6">I am studying in Governor Initiative for Artificial Intelligence and Computing.</p>

        <div className="flex space-x-6">
          <Link href="/" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Home</Link>
          <Link href="/projects" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Projects</Link>
          <Link href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
