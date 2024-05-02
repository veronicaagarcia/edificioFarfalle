export function SkeletonLoader() {
	return (
		<div className='border border-gray-200 rounded-xl p-4 animate-pulse'>
			{/* Placeholder para la imagen */}
			<div className='bg-gray-300 h-40 mb-4'></div>
			{/* Placeholder para el texto */}
			<div className='bg-gray-300 h-6 w-3/4'></div>
		</div>
	)
}
