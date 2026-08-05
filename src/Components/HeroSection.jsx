import { lazy, Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceTitles, site } from '../content/site';

const Hero3D = lazy(() => import('./Hero3D'));

export default function HeroSection() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const enable = () => setReady(true);
		if ('requestIdleCallback' in window) {
			const id = window.requestIdleCallback(enable, { timeout: 1400 });
			return () => window.cancelIdleCallback(id);
		}
		const id = window.setTimeout(enable, 900);
		return () => window.clearTimeout(id);
	}, []);

	return (
		<section className='hero'>
			<div className='hero-line-study' aria-hidden='true'>
				<span />
				<span />
				<span />
				<span />
				<span />
			</div>
			{ready && (
				<Suspense fallback={null}>
					<Hero3D />
				</Suspense>
			)}
			<div className='shell hero-content'>
				<p className='hero-kicker'>
					{serviceTitles.join(' · ')} · {site.location}
				</p>
				<h1>
					Spaces that
					<br />
					<em>breathe.</em>
				</h1>
				<div className='hero-bottom'>
					<p>
						Chequers9 creates thoughtful places where form, light and nature
						find a considered balance.
					</p>
					<Link className='text-link' to='/projects'>
						Explore selected work <span aria-hidden='true'>↘</span>
					</Link>
				</div>
			</div>
			<div className='hero-scroll' aria-hidden='true'>
				<span /> Scroll to explore
			</div>
		</section>
	);
}
