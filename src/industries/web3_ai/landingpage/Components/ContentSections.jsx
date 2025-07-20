import { Mail, MapPin, Phone, Globe } from "lucide-react"; // can remove this import if not used elsewhere

export default function ContentSections() {
  return (
    <section className="relative z-10 px-6 py-16 space-y-24">
      {/* About Us */}
      <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-pink-500/20 rounded-xl p-8 shadow-[0_0_20px_rgba(255,0,150,0.3)]">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-center drop-shadow-lg">
          About Us
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed text-center">
          The Bharath Economic Forum is committed to driving India's
          technological transformation in Web3, AI, and DeepTech. Our mission is
          to foster innovation, growth, and economic leadership through
          cutting-edge technologies.
        </p>
      </div>

      {/* Industries We Focus On */}
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 border border-purple-500/20 rounded-xl p-8 shadow-[0_0_20px_rgba(180,0,255,0.3)]">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">
          Industries We Focus On
        </h2>
        <div className="grid gap-6 md:grid-cols-3 text-gray-200">
          {[
            {
              title: "Web3",
              color: "text-pink-400",
              border: "border-pink-500/20",
              shadow: "shadow-[0_0_15px_rgba(255,0,150,0.4)]",
              desc: "Decentralized technology shaping financial transactions and digital ownership.",
            },
            {
              title: "AI",
              color: "text-purple-400",
              border: "border-purple-500/20",
              shadow: "shadow-[0_0_15px_rgba(180,0,255,0.4)]",
              desc: "Advancing automation, intelligence, and efficiency in various sectors.",
            },
            {
              title: "DeepTech",
              color: "text-blue-400",
              border: "border-blue-500/20",
              shadow: "shadow-[0_0_15px_rgba(0,150,255,0.4)]",
              desc: "Pioneering breakthroughs in biotech, nanotech, and quantum computing.",
            },
          ].map(({ title, color, border, shadow, desc }) => (
            <div
              key={title}
              className={`bg-gray-900/40 backdrop-blur rounded-lg p-6 border ${border} ${shadow}`}
            >
              <h3 className={`text-xl font-bold mb-2 ${color}`}>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Development */}
      <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-blue-500/20 rounded-xl p-8 shadow-[0_0_20px_rgba(0,150,255,0.3)]">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">
          Technology Development in India
        </h2>
        <div className="space-y-4 text-gray-300">
          {[
            {
              label: "Web3",
              color: "text-pink-400",
              desc: "Blockchain adoption in financial services & decentralized applications.",
            },
            {
              label: "AI",
              color: "text-purple-400",
              desc: "Transforming industries including healthcare, finance, and education.",
            },
            {
              label: "DeepTech",
              color: "text-blue-400",
              desc: "Innovations in scientific and engineering fields shaping the future.",
            },
          ].map(({ label, color, desc }) => (
            <details
              key={label}
              className="bg-gray-900/40 backdrop-blur rounded-lg p-4 border border-white/10"
            >
              <summary className={`cursor-pointer font-semibold ${color}`}>
                {label}
              </summary>
              <p className="mt-2">{desc}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Removed Contact Us Section */}
    </section>
  );
}
