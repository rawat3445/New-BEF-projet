import React from 'react';

const partners = [
	{
		name: 'Times Now',
		logo: '/src/assets/img/logo.png',
		tagline: 'Leading News Channel',
	},
	{
		name: 'Nasscom',
		logo: '/src/assets/img/collaborateimg.jpg',
		tagline: 'Empowering IT Industry',
	},
	{
		name: 'Startup India',
		logo: '/src/assets/img/discover.png',
		tagline: 'Fueling Innovation',
	},
	{
		name: 'Indian Express',
		logo: '/src/assets/img/influence.png',
		tagline: 'Trusted Media House',
	},
	{
		name: 'TechCrunch',
		logo: '/src/assets/img/collabrate.png',
		tagline: 'Tech News Leader',
	},
	{
		name: 'YourStory',
		logo: '/src/assets/img/logo.png',
		tagline: 'Startup Stories',
	},
];

const Partners = () => (
	<section className="relative py-16 px-4 overflow-hidden bg-white" id="partners">
		<div className="absolute inset-0 pointer-events-none" />
		<div className="relative max-w-4xl mx-auto">
			<div className="text-center mb-12">
				<div className="flex justify-center items-center mb-6">
					<div className="relative">
						<div className="absolute -inset-3 bg-gradient-to-r from-slate-600/10 via-blue-600/10 to-purple-600/10 blur-2xl rounded-full"></div>
						<div className="relative p-3 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/70 shadow-xl">
							<svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3v6a1 1 0 001 1h6a1 1 0 001-1v-6h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1z" />
							</svg>
						</div>
					</div>
				</div>
				<h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
					<span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
						Our Esteemed Partners
					</span>
				</h2>
				<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
					Collaborating with visionaries, innovators, and industry leaders to shape the future together.
				</p>
				<div className="flex justify-center mt-8">
					<div className="relative">
						<div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
						<div
							className="absolute inset-0 w-32 h-0.5 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-500 opacity-60"
							style={{
								animation: 'shimmerLine 4s ease-in-out infinite',
								background: 'linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.8), transparent)',
								backgroundSize: '200% 100%',
							}}
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{partners.map((partner, i) => (
					<div
						key={i}
						className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 transition-transform hover:scale-105 hover:shadow-2xl border border-white/40"
					>
						<img
							src={partner.logo}
							alt={partner.name + ' logo'}
							className="w-20 h-20 object-contain mb-4 rounded-full border-2 border-slate-200 bg-gray-50"
						/>
						<h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">
							{partner.name}
						</h3>
						<p className="text-sm text-slate-700 text-center font-light">
							{partner.tagline}
						</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Partners;