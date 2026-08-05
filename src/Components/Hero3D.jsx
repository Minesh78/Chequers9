import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { shouldUseReducedHero3D } from '../utils/heroCapability';

function SquareFrame({ size, depth, rotation, opacity }) {
	const rail = 0.032;
	const geometry = useMemo(() => {
		const half = size / 2;
		const inner = half - rail;
		const frame = new THREE.Shape();
		frame.moveTo(-half, -half);
		frame.lineTo(-half, half);
		frame.lineTo(half, half);
		frame.lineTo(half, -half);
		frame.closePath();

		const opening = new THREE.Path();
		opening.moveTo(-inner, -inner);
		opening.lineTo(inner, -inner);
		opening.lineTo(inner, inner);
		opening.lineTo(-inner, inner);
		opening.closePath();
		frame.holes.push(opening);

		const continuousFrame = new THREE.ExtrudeGeometry(frame, {
			depth: rail,
			bevelEnabled: false,
			curveSegments: 1,
		});
		continuousFrame.center();
		return continuousFrame;
	}, [size]);

	return (
		<mesh
			geometry={geometry}
			position={[0, 0, depth]}
			rotation={[0, 0, rotation]}>
			<meshStandardMaterial
				color='#d8dedc'
				transparent
				opacity={opacity}
				roughness={0.58}
				metalness={0.18}
			/>
		</mesh>
	);
}

function ConstructionLines({ reduced }) {
	const geometry = useMemo(() => {
		const vertices = [];
		const runs = reduced ? 5 : 9;
		const steps = reduced ? 18 : 34;
		for (let run = 0; run < runs; run += 1) {
			const offset = (run - (runs - 1) / 2) * 0.16;
			for (let step = 0; step < steps; step += 1) {
				const a = step / steps;
				const b = (step + 1) / steps;
				const point = (t) => [
					(t - 0.5) * 4.8,
					Math.sin(t * Math.PI * 2 + run * 0.32) * 0.32 + offset,
					-0.75 + Math.cos(t * Math.PI * 2) * 0.15,
				];
				vertices.push(...point(a), ...point(b));
			}
		}
		const buffer = new THREE.BufferGeometry();
		buffer.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(vertices, 3),
		);
		return buffer;
	}, [reduced]);

	return (
		<lineSegments geometry={geometry} rotation={[0, 0, -0.62]}>
			<lineBasicMaterial color='#c79a2b' transparent opacity={0.13} />
		</lineSegments>
	);
}

function LogoSculpture({ reduced }) {
	const sculpture = useRef();
	const core = useRef();
	const pointerTarget = useRef({ x: 0, y: 0 });
	const { viewport } = useThree();
	const frameCount = reduced ? 5 : 9;
	const baseScale = reduced ? 0.66 : 0.76;
	const restingRotationY = 0.22;

	useEffect(() => {
		if (reduced) return undefined;
		const trackPointer = (event) => {
			pointerTarget.current.x = (event.clientX / window.innerWidth) * 2 - 1;
			pointerTarget.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
		};
		const resetPointer = () => {
			pointerTarget.current.x = 0;
			pointerTarget.current.y = 0;
		};
		window.addEventListener('pointermove', trackPointer, { passive: true });
		window.addEventListener('pointerleave', resetPointer);
		return () => {
			window.removeEventListener('pointermove', trackPointer);
			window.removeEventListener('pointerleave', resetPointer);
		};
	}, [reduced]);

	useFrame((state, delta) => {
		if (!sculpture.current || !core.current) return;
		const scroll = Math.min(
			window.scrollY / Math.max(window.innerHeight, 1),
			1.2,
		);
		const pointer = pointerTarget.current;
		const targetX =
			reduced ? -0.12 + scroll * 0.18 : -0.12 + pointer.y * 0.3 + scroll * 0.34;
		const targetY =
			reduced
				? restingRotationY + scroll * 0.16
				: restingRotationY + pointer.x * 0.42 + scroll * 0.24;
		sculpture.current.rotation.x = THREE.MathUtils.lerp(
			sculpture.current.rotation.x,
			targetX,
			0.035,
		);
		sculpture.current.rotation.y = THREE.MathUtils.lerp(
			sculpture.current.rotation.y,
			targetY,
			0.035,
		);
		sculpture.current.rotation.z += delta * 0.025;
		sculpture.current.position.x = THREE.MathUtils.lerp(
			sculpture.current.position.x,
			reduced ? 0 : pointer.x * viewport.width * 0.025,
			0.04,
		);
		sculpture.current.position.y = THREE.MathUtils.lerp(
			sculpture.current.position.y,
			Math.sin(state.clock.elapsedTime * 0.42) * 0.07 -
				scroll * 0.42 +
				(reduced ? 0 : pointer.y * 0.08),
			0.04,
		);
		sculpture.current.position.z = THREE.MathUtils.lerp(
			sculpture.current.position.z,
			scroll * 0.7,
			0.035,
		);
		const scrollScale = baseScale * (1 - Math.min(scroll, 1) * 0.08);
		sculpture.current.scale.setScalar(
			THREE.MathUtils.lerp(sculpture.current.scale.x, scrollScale, 0.035),
		);
		core.current.rotation.x += delta * 0.08;
		core.current.rotation.y += delta * 0.14;
		core.current.rotation.z += delta * 0.42;
	});

	return (
		<group ref={sculpture} rotation={[-0.12, restingRotationY, -0.13]} scale={baseScale}>
			{Array.from({ length: frameCount }, (_, index) => {
				const progress = index / Math.max(frameCount - 1, 1);
				return (
					<SquareFrame
						key={index}
						size={1.72 + progress * 1.34}
						depth={(progress - 0.5) * 1.7}
						rotation={(progress - 0.5) * 0.52}
						opacity={0.22 + progress * 0.32}
					/>
				);
			})}
			<mesh ref={core} position={[0, 0, 0.34]} scale={reduced ? 0.62 : 0.72}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial
					color='#c79a2b'
					emissive='#9b7119'
					emissiveIntensity={0.55}
					roughness={0.3}
					metalness={0.36}
				/>
			</mesh>
			<ConstructionLines reduced={reduced} />
		</group>
	);
}

export default function Hero3D() {
	const reduced = shouldUseReducedHero3D({
		mobile: window.matchMedia('(max-width: 767px)').matches,
		hardwareConcurrency: navigator.hardwareConcurrency,
	});
	return (
		<div className='hero-canvas' aria-hidden='true'>
			<Canvas
				frameloop='always'
				dpr={reduced ? [0.75, 1] : [1, 1.5]}
				camera={{
					position: [0, 0, reduced ? 5.7 : 5.3],
					fov: reduced ? 50 : 42,
				}}
				gl={{
					antialias: !reduced,
					alpha: true,
					powerPreference: reduced ? 'low-power' : 'high-performance',
				}}>
				<ambientLight intensity={0.72} />
				<directionalLight
					position={[3, 4, 5]}
					intensity={1.15}
					color='#fff8e7'
				/>
				<pointLight
					position={[-2, -1, 2]}
					intensity={1.1}
					color='#fff4d4'
					distance={7}
				/>
				<LogoSculpture reduced={reduced} />
			</Canvas>
		</div>
	);
}
