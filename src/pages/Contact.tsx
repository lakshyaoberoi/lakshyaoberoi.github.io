export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-300 mb-8">
        Feel free to reach out if you’d like to collaborate or just say hi!
      </p>
      <a
        href="mailto:your.email@example.com"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-lg rounded-lg shadow-lg"
      >
        Say Hello
      </a>
    </section>
  );
}
