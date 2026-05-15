export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <p className="mb-2">Hi, I'm Yanyan Wang 👋</p>
      <p className="mb-8">Computer Science Student | Frontend Developer</p>


      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>I'm passionate about building web applications with Next.js. This portfolio is my first project deployed on Vercel.</p>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Projects</h2>
        <div className="border p-4 rounded">
          <h3 className="font-medium">Portfolio Website</h3>
          <p className="text-sm text-gray-600">A simple personal portfolio built with Next.js and deployed to Vercel.</p>
        </div>
      </section>


      <footer className="text-sm text-gray-500">
        © 2026 Yanyan Wang | Contact: ywang172@example.com
      </footer>
    </main>
  );
}