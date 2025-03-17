export default function Home() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-start text-left px-12 py-16 bg-white text-gray-900">
      <p className="mt-8 text-lg md:text-2xl text-gray-700">
        Frontend Engineer | UI/UX Enthusiast | Problem Solver
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold">
        Hello, I'm <span className="text-blue-500">Your Name</span>
      </h1>
      <a
        href="/projects"
        className="mt-8 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white transition text-lg rounded-lg shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
}
