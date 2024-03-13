import { PlayArrow } from '@mui/icons-material'
import {
	CircularProgress,
	IconButton,
	ImageList,
	ImageListItem,
} from '@mui/material'
import video from '../assets/videos/video.mp4'
import { useEffect, useState } from 'react'

export function PbA() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	const itemData = [
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518583833.jpg?k=17a40af84272443eecac8e49ae1a4cea7accfd3eea1e248e5c985923f7974b25&o=&hp=1',
			title: 'Bed',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518584125.jpg?k=6b38b2ebdf229b19e675fbc81bab5b40972760a8acc68206361bd46f7a892940&o=&hp=1',
			title: 'Kitchen',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518583846.jpg?k=649cf52ff1a7a6d1fd2663eb4dcf1bf6e98436dcb7c630af090299034233fb0e&o=&hp=1',
			title: 'Sink',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518584138.jpg?k=b9be0b31afb40a1b3faff6aeb685a322202685bc0110141fe0c332fdfed2339a&o=&hp=1',
			title: 'Books',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518584136.jpg?k=a76090a386e674c70810542d407162b87aeb9edb5407c2eabe7be46531e07768&o=&hp=1',
			title: 'Chairs',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518584134.jpg?k=85af33e41961ae21fb1105759245dd36288141c5990acf3dc17614134365aa7a&o=&hp=1',
			title: 'Laptop',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518584141.jpg?k=118e4d9faaede253fe7bcee5756f794330f2cc0083c98977142b05d1b1766f79&o=&hp=1',
			title: 'Coffee',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/433392854.jpg?k=3ee6d04326997d3ed092a2a45e74d8213bc902d7cd903c623fa49a624cae0d18&o=&hp=1',
			title: 'Coffee table',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518583842.jpg?k=533565e338d3ca9ad2e9338c0321518db3c4d07fdb7aa292d44afac681055556&o=&hp=1',
			title: 'Blinds',
		},
	]
	return (
		<section className='w-full flex flex-col mt-4 lg:mt-16 h-80v lg:h-90v overflow-scroll'>
			<h2 className='text-orange font-semibold text-center p-2 underline'>
				DEPARTAMENTO PB A
			</h2>
			<div className='relative w-10/12 md:w-1/2 bg-orangeDark opacity-90 mx-auto pt-36 md:pt-64 rounded-xl overflow-hidden cursor-pointer'>
				<video
					className='absolute top-0 left-0 w-full h-full'
					src={video}
					controls
				/>
				<IconButton className='absolute top-40 left-40 translate-x-56 bg-orangeDark rounded-xl'>
					<PlayArrow className='text-orange' />
				</IconButton>
			</div>
			<section className='mt-4 mb-8 m-auto rounded-xl hidden md:flex'>
				{loading ? (
					<CircularProgress color='secondary' />
				) : (
					<ImageList
						sx={{ width: 770, height: 1000 }}
						cols={3}
						rowHeight={'auto'}
					>
						{itemData.map((item) => (
							<ImageListItem key={item.img}>
								<img
									srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
									alt={item.title}
									loading='lazy'
								/>
							</ImageListItem>
						))}
					</ImageList>
				)}
			</section>
			<section className='mt-4 mb-20 m-auto rounded-xl flex md:hidden'>
				{loading ? (
					<CircularProgress color='secondary' />
				) : (
					<ImageList
						sx={{ width: 300, height: 500 }}
						cols={2}
						rowHeight={'auto'}
					>
						{itemData.map((item) => (
							<ImageListItem key={item.img}>
								<img
									srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
									alt={item.title}
									loading='lazy'
								/>
							</ImageListItem>
						))}
					</ImageList>
				)}
			</section>
		</section>
	)
}
