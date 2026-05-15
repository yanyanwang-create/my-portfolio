export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">yanyan wang</h1>
      <p className="text-xl text-gray-600 mb-2">Computer Science Student</p>
      <p className="text-lg text-gray-500 mb-6">Building web apps with Next.js & React</p>
      <a href="/about" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Learn More About Me</a>
    </main>
  );
}