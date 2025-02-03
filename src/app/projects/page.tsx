import Link from 'next/link';

const Projects = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/a1.jpg')" }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
        {/*<p className="text-xl text-white mb-6">Here are some of the amazing projects I’ve worked on.</p>*/}

        <div className="flex space-x-6">
          <Link href="/" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Home</Link>
          <Link href="/about" className="bg-blue-500 text-white py-2 px-6 rounded-lg">About Me</Link>
          <Link href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
