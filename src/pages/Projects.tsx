const projects = [
  {
    title: "Project One",
    description: "A cool project using React and Tailwind.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another great project showcasing animations.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
