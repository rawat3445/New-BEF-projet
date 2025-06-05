import invest1 from "../assets/network.jpg";
import invest2 from "../assets/presenting.jpg";
import invest3 from "../assets/workshop.jpg";
import invest4 from "../assets/mediaco.jpg";
import "./Pricing.css";

const delegateData = [
	{
		title: "Standard Delegate",
		price: "₹35,000",
		benefits: [
			"Access 2 dialogues of your choice",
			"All meals & networking sessions",
			"Delegate kit with event materials",
			"Certificate of participation",
		],
		color: "blue",
		btn: "Register as Standard Delegate",
	},
	{
		title: "VIP Delegate",
		price: "₹55,000",
		benefits: [
			"Access to all sessions & roundtables",
			"VIP seating & lounge access",
			"Concierge service throughout event",
			"Exclusive networking dinner",
			"Premium delegate kit",
		],
		color: "gold",
		tag: "Best Value",
		btn: "Register as VIP Delegate",
	},
];

const pricingData = [
	{
		title: "Title Sponsor – Health & Pharma",
		price: "₹5,00,000",
		benefits: [
			"Exclusive branding at Health & Pharma roundtables",
			"Speaking slot during industry session",
			"5 VIP delegate passes",
			"Dedicated feature in industry PR",
			"Custom networking booth",
		],
		tag: "Most Popular",
		color: "gold",
		btn: "Become Title Sponsor",
	},
	{
		title: "Knowledge Partner – MedTech & Wellness",
		price: "₹3,00,000",
		benefits: [
			"Sponsor expert panel & AI-insight presentation",
			"Logo on session materials",
			"3 VIP delegate passes",
			"Media and podcast shout-outs",
			"Brand showcase on event website",
		],
		color: "purple",
		btn: "Become Knowledge Partner",
	},
	{
		title: "Innovation Sponsor – Health Startups",
		price: "₹2,00,000",
		benefits: [
			'Highlight your solution in "Viksit Bharat Dialogues"',
			"Logo + profile in printed & digital kits",
			"Feature in dedicated startup showcase",
			"2 delegate passes",
			"Industry blog feature post-event",
		],
		color: "pink",
		btn: "Become Innovation Sponsor",
	},
	{
		title: "Delegate Kit Sponsor – Wellness Category",
		price: "₹1,00,000",
		benefits: [
			"Branding on all health delegate kits",
			"Logo on official website",
			"2 standard delegate passes",
			"Digital promo story on social media",
		],
		color: "blue",
		btn: "Become Kit Sponsor",
	},
];

const whyInvestPoints = [
	{
		icon: invest1,
		text: "Network with 500+ industry leaders, policymakers, and innovators.",
	},
	{
		icon: invest2,
		text: "Gain exclusive access to roundtables and workshops.",
	},
	{
		icon: invest3,
		text: "Showcase your brand to a national audience.",
	},
	{
		icon: invest4,
		text: "Unlock media coverage and post-event opportunities.",
	},
];

const Pricing = () => (
	<div className="pricing-container">
		<section className="pricing-hero">
			<h1>Delegate & Sponsorship Pricing</h1>
			<p>
				Unlock unparalleled opportunities to connect, collaborate, and celebrate at
				the BEF Industry Conclave 2025. Choose your delegate pass or partner with
				us as a sponsor to maximize your impact.
			</p>
		</section>

		<section className="pricing-cards-section">
			<h2 className="pricing-section-title">Delegate Options</h2>
			<div className="pricing-card-grid">
				{delegateData.map((card, idx) => (
					<div key={idx} className={`pricing-card ${card.color}-theme`}>
						{card.tag && <span className="tag">{card.tag}</span>}
						<h3>{card.title}</h3>
						<ul>
							{card.benefits.map((benefit, i) => (
								<li key={i}>{benefit}</li>
							))}
						</ul>
						<div className="price">{card.price}</div>
						<button
							className="partner-btn"
							onClick={() =>
								(window.location.href = `mailto:dialogues@bharateconomicforum.org?subject=${encodeURIComponent(
									card.btn
								)}`)
							}
						>
							{card.btn}
						</button>
					</div>
				))}
			</div>
		</section>

		<section className="pricing-cards-section">
			<h2 className="pricing-section-title">
				Partnership & Sponsorship Opportunities
			</h2>
			<div className="pricing-card-grid">
				{pricingData.map((card, idx) => (
					<div key={idx} className={`pricing-card ${card.color}-theme`}>
						{card.tag && <span className="tag">{card.tag}</span>}
						<h3>{card.title}</h3>
						<ul>
							{card.benefits.map((benefit, i) => (
								<li key={i}>{benefit}</li>
							))}
						</ul>
						<div className="price">{card.price}</div>
						<button
							className="partner-btn"
							onClick={() =>
								(window.location.href = `mailto:dialogues@bharateconomicforum.org?subject=${encodeURIComponent(
									card.btn
								)}`)
							}
						>
							{card.btn}
						</button>
					</div>
				))}
			</div>
		</section>

		{/* Why Invest Section */}
		<section className="pricing-value-section">
			<h2>Why Invest in BEF 2025?</h2>
			<ul className="why-invest-list">
				{whyInvestPoints.map((point, idx) => (
					<li key={idx} className="why-invest-item">
						<img src={point.icon} alt="" className="why-invest-icon" />
						<span>{point.text}</span>
					</li>
				))}
			</ul>
		</section>

		{/* Need Help Section */}
		<section className="pricing-contact-section">
			<h2>Need Help?</h2>
			<p>
				For any queries regarding pricing, sponsorship, or registration, contact us at:<br />
				<a href="mailto:dialogues@bharateconomicforum.org">dialogues@bharateconomicforum.org</a><br />
				+91 98765 43210
			</p>
		</section>
	</div>
);

export default Pricing;
