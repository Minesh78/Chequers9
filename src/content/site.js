export const site = {
	name: 'Chequers9',
	legalName: 'Chequers9 Architectural Design Studio',
	description:
		'Architecture and interior design studio in Kolhapur creating thoughtful, environmentally responsive spaces.',
	location: 'Kolhapur, Maharashtra',
	phoneDisplay: '+91 99229 54436',
	phoneHref: 'tel:+919922954436',
	whatsappHref: 'https://wa.me/919922954436',
	website: 'https://www.chequers9.com',
	socials: [
		{
			name: 'Instagram',
			handle: '@chequers9architects',
			href: 'https://www.instagram.com/chequers9architects/',
			icon: 'instagram',
		},
		{
			name: 'YouTube',
			handle: '@chequers9architects879',
			href: 'https://www.youtube.com/@chequers9architects879',
			icon: 'youtube',
		},
	],
	navigation: [
		{ label: 'Home', href: '/', shortLabel: 'Home' },
		{ label: 'Studio', href: '/about', shortLabel: 'Studio' },
		{ label: 'Projects', href: '/projects', shortLabel: 'Work' },
		{ label: 'Services', href: '/services', shortLabel: 'Services' },
		{ label: 'Contact', href: '/contact', shortLabel: 'Contact' },
	],
	services: [
		{
			number: '01',
			title: 'Architecture',
			summary:
				'Homes and places shaped around climate, proportion, natural light and the rhythms of everyday life.',
		},
		{
			number: '02',
			title: 'Interior Design',
			summary:
				'Quiet, tactile interiors where material, light and function work as one considered whole.',
		},
		{
			number: '03',
			title: 'Environmentally Responsive Design',
			summary:
				'Environmentally conscious decisions that connect each project to its site and natural setting.',
		},
	],
};

export const serviceTitles = site.services.map((service) => service.title);

export const studioPrinciples = [
	{
		title: 'Thoughtful light',
		text: 'We use daylight and illumination to define space, evoke emotion and support wellbeing.',
	},
	{
		title: 'Responsible design',
		text: 'We prioritise considered resources and environmentally sensitive design choices.',
	},
	{
		title: 'Harmonious living',
		text: 'We shape spaces that nurture everyday life and strengthen a connection with nature.',
	},
];
