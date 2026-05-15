export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Portfolio</h1>
      <p>Hi, I'm Yanyan Wang 👋</p>
      <p>Computer Science Student | Frontend Developer</p>


      <section style={{ marginTop: '2rem' }}>
        <h2>About Me</h2>
        <p>I'm passionate about building web applications with Next.js. This portfolio is my first project deployed on Vercel.</p>
      </section>


      <section style={{ marginTop: '2rem' }}>
        <h2>My Projects</h2>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
          <h3>Portfolio Website</h3>
          <p>A simple personal portfolio built with Next.js and deployed to Vercel.</p>
        </div>
      </section>


      <footer style={{ marginTop: '3rem', color: '#666' }}>
        <p>© 2026 Yanyan Wang | Contact: ywang172@example.com</p>
      </footer>
    </div>
  );
}