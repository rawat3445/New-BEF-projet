import { Link } from "react-router-dom";
import useInView from '../hooks/useInView';
import './Home.css';

// Import your local images from assets
import benefit1 from '../assets/media.png';
import benefit2 from '../assets/policy.jpg';
import benefit3 from '../assets/podcast.jpg';
import benefit4 from '../assets/award.jpg';

const sponsorshipData = [
	{
		title: 'Title Sponsor – Health & Pharma',
		price: '₹5,00,000',
		benefits: [
			'Exclusive branding at Health & Pharma roundtables',
			'Speaking slot during industry session',
			'5 VIP delegate passes',
			'Dedicated feature in industry PR',
			'Custom networking booth',
		],
		tag: 'Most Popular',
		color: 'gold',
	},
	{
		title: 'Knowledge Partner – MedTech & Wellness',
		price: '₹3,00,000',
		benefits: [
			'Sponsor expert panel & AI-insight presentation',
			'Logo on session materials',
			'3 VIP delegate passes',
			'Media and podcast shout-outs',
			'Brand showcase on event website',
		],
		color: 'purple',
	},
	{
		title: 'Innovation Sponsor – Health Startups',
		price: '₹2,00,000',
		benefits: [
			'Highlight your solution in "Viksit Bharat Dialogues"',
			'Logo + profile in printed & digital kits',
			'Feature in dedicated startup showcase',
			'2 delegate passes',
			'Industry blog feature post-event',
		],
		color: 'pink',
	},
	{
		title: 'Delegate Kit Sponsor – Wellness Category',
		price: '₹1,00,000',
		benefits: [
			'Branding on all health delegate kits',
			'Logo on official website',
			'2 standard delegate passes',
			'Digital promo story on social media',
		],
		color: 'blue',
	},
];

const benefits = [
	{
		title: 'Media Spotlights on Health Impact',
		description:
			'Gain national and regional media coverage for your health initiatives, with dedicated press releases, interviews, and feature stories highlighting your brand’s impact on the healthcare sector.',
		image: benefit1,
	},
	{
		title: 'Direct Access to Policymakers',
		description:
			'Participate in exclusive roundtables and networking sessions with key government officials and policy influencers, giving your organization a voice in shaping the future of healthcare in India.',
		image: benefit2,
	},
	{
		title: 'Featured in Health Podcasts & Blogs',
		description:
			'Be featured in our official event podcasts and blogs, sharing your expertise, innovations, and success stories with a wide audience of healthcare professionals and enthusiasts.',
		image: benefit3,
	},
	{
		title: 'Award Nominations & Speaking Slots',
		description:
			'Get nominated for prestigious awards and secure speaking opportunities at the event, positioning your brand as a thought leader and innovator in the health and pharma industry.',
		image: benefit4,
	},
];

const HealthSponsorship = () => {
	return (
		<section className="sponsorship-page">
			<div className="intro-section">
				<h1 className="fade-in">Empowering Health Innovation at BEF 2025</h1>
				<p className="fade-in delay-1">
					Join us in shaping India’s healthcare revolution. Showcase your brand, build partnerships, and align with the national vision for a healthier, more innovative Bharat.
				</p>
				<div className="cta-buttons fade-in delay-2">
					<button className="primary-btn">Partner With Us</button>
					<button className="secondary-btn">Explore Delegate Options</button>
				</div>
			</div>

			<div className="cards-section">
				<h2>Partnership Opportunities</h2>
				<div className="card-grid">
					{sponsorshipData.map((sponsor, idx) => (
						<div key={idx} className={`sponsor-card ${sponsor.color}-theme bounce-in`}>
							{sponsor.tag && <span className="tag">{sponsor.tag}</span>}
							<h3>{sponsor.title}</h3>
							<ul>
								{sponsor.benefits.map((benefit, i) => (
									<li key={i}>{benefit}</li>
								))}
							</ul>
							<div className="sponsor-card-bottom">
								<div className="price">{sponsor.price}</div>
								<button className="partner-btn">Become a Partner</button>
							</div>
						</div>
					))}
				</div>
				<div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
					<Link to="/pricing">
						<button className="primary-btn">Explore All Options</button>
					</Link>
				</div>
				<hr className="section-underline" />
			</div>

			<div className="benefits-section fade-in">
				<h2>Exclusive Health Partner Benefits</h2>
				<div className="benefits-grid">
					{benefits.map((benefit, idx) => {
						const [ref, inView] = useInView({ threshold: 0.2 });
						const direction = idx % 2 === 0 ? 'left' : 'right';
						return (
							<section
								key={idx}
								ref={ref}
								className={`benefit-full-section slide-benefit ${direction} ${inView ? `in ${direction}` : ''}`}
								style={{ background: idx % 2 === 0 ? '#f7fafc' : '#e0f7fa' }}
							>
								<div className={`benefit-content-row ${idx % 2 === 1 ? 'reverse' : ''}`}>
									<div className="benefit-image-col">
										<img
											src={benefit.image}
											alt={benefit.title}
											className="benefit-image"
										/>
									</div>
									<div className="benefit-text-col">
										<h2>{benefit.title}</h2>
										<p>{benefit.description}</p>
									</div>
								</div>
							</section>
						);
					})}
				</div>
			</div>

			<div className="call-to-action-section fade-in delay-1">
				<p>Ready to influence India’s health revolution? Let’s discuss a custom partnership package that suits your goals.</p>
				<div className="cta-buttons">
					<button className="primary-btn">Schedule a Health Partnership Call</button>
					<button className="secondary-btn">Download Sponsorship Deck</button>
				</div>
			</div>
		</section>
	);
};

export default HealthSponsorship;
