import { useEffect, useRef } from 'react'

export function VideoLazyLoad({ src, type }: { src: string; type: string }) {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		}

		const callback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const video = videoRef.current
					if (video) {
						video.load()
					}
				}
			})
		}

		const observer = new IntersectionObserver(callback, options)
		const target = videoRef.current
		if (target) {
			observer.observe(target)
		}

		return () => {
			if (target) {
				observer.unobserve(target)
			}
		}
	}, [])

	return (
		<video
			ref={videoRef}
			autoPlay
			muted
			className='w-full h-full object-cover block mx-auto z-0 object-center'
		>
			<source src={src} type={type} />
		</video>
	)
}
