import { site } from '../content/site';

export default function SocialLinks({ compact = false }) {
	return (
		<div className={`social-links${compact ? ' social-links--compact' : ''}`}>
			{site.socials.map((social) => (
				<a
					key={social.name}
					href={social.href}
					target='_blank'
					rel='noreferrer'
					aria-label={`Follow Chequers9 on ${social.name}`}>
					<span
						className={`social-icon social-icon--${social.icon}`}
						aria-hidden='true'
					/>
					<span className='social-link-copy'>
						<strong>{social.name}</strong>
						{!compact && <small>{social.handle}</small>}
					</span>
				</a>
			))}
		</div>
	);
}
