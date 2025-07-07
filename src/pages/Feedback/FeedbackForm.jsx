// Developer: Boddupally Charitha – Enhanced by Rakesh for BEF WebApp
// Feature: Full Feedback UI with intro, testimonials, and improved styling

import { MessageCircle, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";

const demoFeedbacks = [
  {
    name: "Aarav S.",
    message: "Amazing initiative by BEF! Loved being part of the leadership summit. 💙",
    date: "July 5, 2025",
  },
  {
    name: "Meera T.",
    message: "Great platform to share and grow. The mentors were so helpful!",
    date: "July 3, 2025",
  },
  {
    name: "Kabir R.",
    message: "The award ceremony was inspiring. Can’t wait to contribute more.",
    date: "July 1, 2025",
  },
];

const emojiOptions = [
  { icon: "💙", label: "Inspired" },
  { icon: "✨", label: "Loved it" },
  { icon: "💡", label: "Suggestions" },
  { icon: "👍", label: "Supportive" },
];

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    anonymous: false,
    reaction: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [allFeedbacks, setAllFeedbacks] = useState([...demoFeedbacks]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReaction = (label) => {
    setFormData((prev) => ({ ...prev, reaction: label }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const newEntry = {
      name: formData.anonymous ? "Anonymous" : formData.name,
      message: `${formData.message} ${emojiOptions.find((e) => e.label === formData.reaction)?.icon || ""}`,
      date,
    };

    setAllFeedbacks([newEntry, ...allFeedbacks]);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 4000);

    setFormData({ name: "", email: "", message: "", anonymous: false, reaction: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-2 flex justify-center items-center gap-2">
            <MessageCircle className="w-8 h-8 text-cyan-500" /> We’d Love Your Feedback!
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Help us improve the BEF experience. Your feedback fuels our growth!
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {!formData.anonymous && (
                <>
                  <div>
                    <label className="block font-medium text-blue-800 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-blue-800 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-400"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </>
              )}

              {/* Anonymous Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                />
                <label className="text-gray-700 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Submit Anonymously
                </label>
              </div>

              <div>
                <label className="block font-medium text-blue-800 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-200"
                  placeholder="Your message"
                  rows="4"
                  required
                />
              </div>

              {/* Emoji Reaction */}
              <div>
                <label className="block font-medium text-blue-800 mb-2">Your Reaction</label>
                <div className="flex gap-3 flex-wrap">
                  {emojiOptions.map((emoji) => (
                    <button
                      type="button"
                      key={emoji.label}
                      onClick={() => handleReaction(emoji.label)}
                      className={`text-2xl px-4 py-2 rounded-full border ${
                        formData.reaction === emoji.label
                          ? "bg-yellow-200 border-yellow-500"
                          : "bg-gray-100 border-gray-300"
                      } hover:scale-110 transition-transform`}
                    >
                      {emoji.icon}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 transition duration-300"
              >
                Submit Feedback
              </button>
            </form>
          ) : (
            <div className="text-center text-green-700 font-semibold text-xl animate-bounce">
              ✅ Feedback submitted! Thank you!
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              <Star className="text-yellow-400" /> What Others Are Saying
            </h3>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full shadow-sm">
              {allFeedbacks.length} feedback received
            </span>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {allFeedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-300 hover:shadow-lg transition duration-300"
              >
                <p className="text-gray-700 italic mb-2">"{feedback.message}"</p>
                <p className="text-sm text-gray-500">{feedback.date}</p>
                <p className="font-semibold text-blue-800 mt-1">— {feedback.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stories from BEF Section */}
<section className="py-20 bg-white px-6 mt-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-purple-800 mb-4">
      Voices of BEF 🙌
    </h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Real stories from real changemakers. Here's what our community has to say about their journey with BEF.
    </p>

    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
      {/* Story 1 */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-400">
        <p className="text-gray-700 italic mb-4 text-sm md:text-base leading-relaxed">
          “When I first joined BEF, I had ideas but no direction. Through their programs and mentorship, I not only launched my own social impact initiative, but I also found a community that believed in me. I owe a lot of my confidence and growth to this amazing platform.”
        </p>
        <h4 className="font-semibold text-blue-900">— Ananya G., Student Leader</h4>
      </div>

      {/* Story 2 */}
      <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-yellow-400">
        <p className="text-gray-700 italic mb-4 text-sm md:text-base leading-relaxed">
          “Volunteering with BEF was one of the most fulfilling experiences I’ve ever had. I met incredible people, learned leadership skills in real-time, and felt like my efforts were truly valued. It wasn’t just volunteering—it felt like being part of a movement.”
        </p>
        <h4 className="font-semibold text-yellow-900">— Vivek M., Volunteer</h4>
      </div>

      {/* Story 3 */}
      <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-purple-400">
        <p className="text-gray-700 italic mb-4 text-sm md:text-base leading-relaxed">
          “I never imagined that someone like me could be recognized on such a big stage. Being nominated for the BEF Leadership Awards validated years of hard work and reminded me that every small act of leadership counts. It’s something I’ll carry with me forever.”
        </p>
        <h4 className="font-semibold text-purple-900">— Rina S., Awardee</h4>
      </div>
    </div>

    {/* Optional CTA */}
    <div className="mt-12">
      <p className="text-sm text-gray-500">
        Have a story to share?{' '}
        <a
          href="/contact"
          className="text-blue-700 font-medium underline hover:text-purple-700"
        >
          Tell us about your BEF journey
        </a>
        .
      </p>
    </div>
  </div>
</section>
{/* Get Involved Section */}
<section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-6 mt-20">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-purple-900 mb-4">Want to Get Involved?</h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-10">
      Whether you're a passionate volunteer, a driven leader, or someone with a vision — BEF is always looking for inspiring individuals to grow this movement.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a
        href="/leadership-awards"
        className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-800 transition"
      >
        Nominate a Leader
      </a>

      <a
        href="/join"
        className="bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition"
      >
        Join BEF Team
      </a>

      <a
        href="/volunteer"
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        Become a Volunteer
      </a>
    </div>

    <p className="text-sm text-gray-500 mt-8">
      Not sure where to start? <a href="/contact" className="underline text-blue-800 hover:text-purple-800">Contact us</a> — we’d love to help.
    </p>
  </div>
</section>

    </section>
    
  );
};

export default FeedbackForm;
