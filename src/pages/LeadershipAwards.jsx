// Developer: Rakesh Kumar Patra for BEF WebApp
import {
  Award,
  GraduationCap,
  Handshake,
  Rocket,
  UploadCloud,
  User,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

// --- Award Categories ---
const awardCategories = [
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    title: 'Community Impact Leader',
    desc: 'Honoring those who drive positive change and uplift communities through dedication and vision.',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    title: 'Student Changemaker',
    desc: 'Celebrating students who inspire peers and create meaningful impact in their schools or colleges.',
  },
  {
    icon: <Handshake className="w-8 h-8 text-green-500" />,
    title: 'Outstanding Volunteer',
    desc: 'For those who selflessly give their time and energy to help others and build a better world.',
  },
  {
    icon: <User className="w-8 h-8 text-purple-500" />,
    title: 'Inspirational Mentor',
    desc: 'Recognizing mentors who guide, support, and empower the next generation of leaders.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
    title: 'Rising Star',
    desc: 'Spotlighting emerging leaders making waves with fresh ideas and bold action.',
  },
];

// --- Previous Awardees ---
const previousAwardees = [
  {
    name: 'Aarav Sharma',
    title: 'Student Changemaker 2024',
    summary: 'Launched a peer tutoring program reaching 500+ students.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Verma',
    title: 'Community Impact Leader 2024',
    summary: 'Organized city-wide clean-up drives and awareness campaigns.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rahul Mehta',
    title: 'Outstanding Volunteer 2024',
    summary: 'Volunteered 200+ hours for rural education initiatives.',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Sunita Rao',
    title: 'Inspirational Mentor 2024',
    summary: 'Mentored 30+ students into STEM careers.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Kabir Singh',
    title: 'Rising Star 2024',
    summary: 'Founded a youth-led climate action group.',
    img: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
];

export default function LeadershipAwards() {
  const [form, setForm] = useState({
    nominatorName: '',
    nominatorEmail: '',
    nomineeName: '',
    nomineeRole: '',
    category: '',
    reason: '',
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    email: '',
    company: '',
    program: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlePartnerChange = (e) => {
    const { name, value } = e.target;
    setPartnerForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    console.log(partnerForm); // You can connect this to a backend or email API
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />

      {/* --- Hero Section --- */}
      <section className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-600 text-white px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 flex items-center justify-center gap-2">
            BEF Leadership Awards <Award className="w-10 h-10 text-yellow-300" />
          </h1>
          <h2 className="text-2xl font-semibold text-yellow-200 mb-4">
            Honoring the changemakers shaping tomorrow.
          </h2>
          <p className="text-lg font-medium opacity-90">
            Celebrating the spirit of leadership, innovation, and community excellence. These awards honor
            individuals who’ve gone above and beyond to make a difference.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#nominate"
              className="bg-yellow-300 text-purple-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
            >
              Nominate a Leader
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-100 transition duration-300"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>



			{/* About Section */}
			<section className="max-w-6xl mx-auto py-20 px-6 flex flex-col gap-10">
  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
    {/* Left - Heading */}
    <div className="md:w-1/3 text-left">
      <h2 className="text-5xl md:text-6xl font-extrabold text-purple-800 leading-tight space-y-2">
        <div>Why</div>
        <div>Leadership</div>
        <div>Matters</div>
      </h2>
    </div>

    {/* Right - Animated Circles */}
    <div className="flex flex-row gap-8 md:w-2/3 justify-end items-center flex-wrap">
      
      {/* Circle 1 */}
      <div className="relative group">
        <div className="bg-yellow-300 text-purple-900 w-40 h-40 rounded-full flex items-center justify-center text-center text-sm md:text-base font-semibold shadow-lg animate-bounce-left group-hover:scale-105 transition-transform duration-300">
          Leaders inspire action.
        </div>
        <div className="absolute bottom-full mb-3 w-56 p-3 text-sm text-white bg-purple-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all duration-500 ease-in-out z-10 text-center pointer-events-none">
          They spark movements, drive change, and create impact that lasts.
        </div>
      </div>

      {/* Circle 2 */}
      <div className="relative group">
        <div className="bg-blue-300 text-blue-900 w-40 h-40 rounded-full flex items-center justify-center text-center text-sm md:text-base font-semibold shadow-lg animate-bounce-left delay-[200ms] group-hover:scale-105 transition-transform duration-300">
          Mentors shape journeys.
        </div>
        <div className="absolute bottom-full mb-3 w-56 p-3 text-sm text-white bg-blue-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all duration-500 ease-in-out z-10 text-center pointer-events-none">
          Through guidance, they empower others to reach their potential.
        </div>
      </div>

      {/* Circle 3 */}
      <div className="relative group">
        <div className="bg-green-300 text-green-900 w-40 h-40 rounded-full flex items-center justify-center text-center text-sm md:text-base font-semibold shadow-lg animate-bounce-left delay-[400ms] group-hover:scale-105 transition-transform duration-300">
          Change starts with vision.
        </div>
        <div className="absolute bottom-full mb-3 w-56 p-3 text-sm text-white bg-green-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all duration-500 ease-in-out z-10 text-center pointer-events-none">
          Visionary leaders ignite transformation by thinking beyond the now.
        </div>
      </div>
    </div>
  </div>

  {/* Paragraph below */}
  <p className="text-gray-700 text-center text-lg max-w-3xl mx-auto mt-4">
    Join us in honoring the visionaries, mentors, and changemakers shaping a brighter future for all.
  </p>
</section>	
      {/* --- Award Categories --- */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Award Categories
        </h2>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {awardCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-yellow-300 hover:shadow-2xl transition-all"
            >
              <div className="mb-2">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-center">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Previous Awardees --- */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
          Meet Our Trailblazers
        </h2>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {previousAwardees.map((a) => (
            <div
              key={a.name}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border-b-4 border-blue-300"
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-yellow-200"
              />
              <h4 className="text-lg font-bold text-blue-900 mb-1">{a.name}</h4>
              <span className="text-sm text-purple-700 font-semibold mb-1">{a.title}</span>
              <p className="text-gray-600 text-center text-sm">{a.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Nomination Form --- */}
      <section id="nominate" className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
          Nominate a Leader Today
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Know someone who's leading change? Nominate them below!
        </p>
        {!submitted ? (
          <form
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="nominatorName"
                placeholder="Your Name"
                value={form.nominatorName}
                onChange={handleChange}
                required
                className="flex-1 px-3 py-2 rounded border border-gray-300"
              />
              <input
                name="nominatorEmail"
                type="email"
                placeholder="Your Email"
                value={form.nominatorEmail}
                onChange={handleChange}
                required
                className="flex-1 px-3 py-2 rounded border border-gray-300"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="nomineeName"
                placeholder="Nominee Name"
                value={form.nomineeName}
                onChange={handleChange}
                required
                className="flex-1 px-3 py-2 rounded border border-gray-300"
              />
              <input
                name="nomineeRole"
                placeholder="Nominee Role / Affiliation"
                value={form.nomineeRole}
                onChange={handleChange}
                required
                className="flex-1 px-3 py-2 rounded border border-gray-300"
              />
            </div>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded border border-gray-300"
            >
              <option value="">Select Award Category</option>
              {awardCategories.map((cat) => (
                <option key={cat.title} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
            <textarea
              name="reason"
              rows="4"
              placeholder="Why are you nominating them?"
              value={form.reason}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded border border-gray-300"
            />
            <div>
              <label className="flex items-center gap-2 mb-1 text-sm font-medium text-gray-700">
                Upload Testimonial/Photo <UploadCloud className="w-4 h-4 text-blue-400" />
              </label>
              <input
                type="file"
                name="file"
                accept="image/*,.pdf"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Submit Nomination
            </button>
          </form>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Thank you for recognizing a leader!
            </h3>
            <p className="text-gray-700">
              Shortlisted nominees will be announced on{' '}
              <span className="font-semibold text-blue-700">August 15, 2025</span>.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 text-blue-600 hover:text-purple-700 font-semibold underline"
            >
              Back to Home
            </Link>
          </div>
        )}
      </section>

      {/* --- Partnership Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg relative">
            <button
              className="absolute top-2 right-4 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
              Become a Partner
            </h3>
            <form className="flex flex-col gap-4" onSubmit={handlePartnerSubmit}>
              <input
                name="name"
                value={partnerForm.name}
                onChange={handlePartnerChange}
                required
                placeholder="Your Full Name"
                className="border p-2 rounded-md"
              />
              <input
                name="email"
                type="email"
                value={partnerForm.email}
                onChange={handlePartnerChange}
                required
                placeholder="Your Email"
                className="border p-2 rounded-md"
              />
              <input
                name="company"
                value={partnerForm.company}
                onChange={handlePartnerChange}
                required
                placeholder="Company Name"
                className="border p-2 rounded-md"
              />
              <input
                name="program"
                value={partnerForm.program}
                onChange={handlePartnerChange}
                required
                placeholder="Partnership Program (e.g., Sponsor, Mentor)"
                className="border p-2 rounded-md"
              />
              <textarea
                name="description"
                value={partnerForm.description}
                onChange={handlePartnerChange}
                required
                placeholder="Tell us more about your interest..."
                rows={3}
                className="border p-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition font-semibold"
              >
                Submit Interest
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}   