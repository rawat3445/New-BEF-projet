import FeedbackForm from  './FeedbackForm'; // adjust the path as needed
import Footer from '../../components/Footer';
import Header from '../../components/Header';
export default function Home() {
  return (
    <div>
      {/* Other sections like header, about, etc. */}

      {/* Feedback section */}
      <section id="feedback" className="py-10 bg-white">
        <FeedbackForm />
      </section>

      {/* Other sections or footer */}
      <Footer/>
    </div>
  );
}
