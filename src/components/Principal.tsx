import { useState } from 'react'
import { Card } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export function Principal() {
	const [isClicked, setIsClicked] = useState(false)
	const [showFullText, setShowFullText] = useState(false)

	const handleClick = () => {
		setIsClicked(!isClicked)
	}

	const toggleFullText = () => {
		setShowFullText(!showFullText)
	}

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
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/478872983.jpg?k=b3ae07da65bb39dd2956c82918cd3601bdccb9492362b36be85a842697949bb2&o=&hp=1',
			title: 'Candle',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518584134.jpg?k=85af33e41961ae21fb1105759245dd36288141c5990acf3dc17614134365aa7a&o=&hp=1',
			title: 'Laptop',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/524271615.jpg?k=587f362885e6d329043b05d79f26a5e387c7de3858820629d69782b4c4aee2be&o=&hp=1',
			title: 'Doors',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518584141.jpg?k=118e4d9faaede253fe7bcee5756f794330f2cc0083c98977142b05d1b1766f79&o=&hp=1',
			title: 'Coffee',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/474620113.jpg?k=793c12b96531b1a8a9bcd3ffc9d5aad53ebe87475c57ea6e90b6f39e36a569be&o=&hp=1',
			title: 'Storage',
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
		<section className='flex flex-col justify-center items-center overflow-y-auto  p-2 m-auto w-full'>
			<h2 className='text-orange font-semibold text-center p-2 sm:mt-16 underline'>
				ALQUILERES TEMPORARIOS
			</h2>
			<main className='w-full flex flex-col-reverse sm:flex-col sm:mt-5 items-center m-auto lg:pl-10 sm:overflow-y-auto sm:h-70v lg:h-50'>
				{/* IMAGENES EN CHICO - VERTICAL*/}
				<section className='w-fit h-full sm:hidden'>
					<div
						className={`p-1 cursor-pointer ${
							isClicked
								? 'fixed top-20 left-0 rounded-xl w-full h-full bg-black z-50 overflow-y-auto'
								: 'relative'
						}`}
						style={{
							width: isClicked ? '100vw' : '310px',
							height: isClicked ? '80vh' : '400px',
							margin: isClicked ? 'auto' : 'auto',
						}}
						onClick={handleClick}
					>
						<ImageList
							sx={{
								width: '100%',
								height: '100%',
							}}
							variant='woven'
							cols={3}
							gap={8}
						>
							{itemData.map((item) => (
								<ImageListItem key={item.img}>
									<img
										srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
										src={`${item.img}?w=161&fit=crop&auto=format`}
										alt={item.title}
										loading='lazy'
									/>
								</ImageListItem>
							))}
						</ImageList>
					</div>
				</section>
				{/* IMAGENES EN GRANDE - HORIZONTAL */}
				<section className='w-fit h-full hidden sm:flex sm:mb-4'>
					<div
						className={`p-1 cursor-pointer ${
							isClicked
								? 'fixed top-20 left-0 rounded-xl w-full h-full bg-black z-50'
								: 'relative'
						}`}
						style={{
							width: isClicked ? '100vw' : '85vw',
							height: isClicked ? '80vh' : '45vh',
							margin: isClicked ? 'auto' : 'auto',
							overflowX: 'auto',
						}}
						onClick={handleClick}
					>
						<ImageList
							sx={{
								display: 'flex',
								flexWrap: 'nowrap',
								width: 'max-content',
								height: '100%',
							}}
							variant='quilted'
							cols={5}
							gap={4}
						>
							{itemData.map((item) => (
								<ImageListItem key={item.img}>
									<img
										srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 1x`}
										src={`${item.img}?w=161&fit=crop&auto=format`}
										alt={item.title}
										loading='lazy'
										style={{ height: '100%' }}
									/>
								</ImageListItem>
							))}
						</ImageList>
					</div>
				</section>
				<section className='w-11/12 mx-auto lg:w-3/4  mb-7 sm:mb-0'>
					<Card
						className='cardShadow'
						style={{
							margin: 'auto',
							padding: '10px',
							borderRadius: '8px',
						}}
					>
						<h3 className='text-base text-center p-2 text-orangeDark'>
							Texto descriptivo
						</h3>
						<p className='text-sm mb-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
							accusantium similique. Praesentium earum itaque provident ut, odio
							dolores dicta voluptate voluptas quae magnam minus optio
							repellendus rem temporibus enim nemo!
						</p>
						<p className='text-sm mb-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
							repellendus rem temporibus enim nemo!
						</p>
						<button
							className='w-full text-sm text-slate-600 hover:text-orange lg:hidden'
							onClick={toggleFullText}
						>
							{showFullText ? 'Mostrar menos' : 'Mostrar más'}
						</button>
						<p
							className={`lg:flex ${
								showFullText ? 'flex text-sm mb-2' : 'hidden'
							}`}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
							accusantium similique. Praesentium earum itaque provident ut, odio
							dolores dicta voluptate voluptas quae magnam minus optio
							repellendus rem temporibus enim nemo!
						</p>
						<p
							className={`lg:flex ${
								showFullText ? 'flex text-sm mb-2' : 'hidden'
							}`}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
							repellendus rem temporibus enim nemo!
						</p>
						<p
							className={` lg:flex ${
								showFullText ? 'flex text-sm mb-2' : 'hidden'
							}`}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
							accusantium similique. Praesentium earum itaque provident ut, odio
							dolores dicta voluptate voluptas quae magnam minus optio
							repellendus rem temporibus enim nemo!
						</p>
					</Card>
				</section>
			</main>
		</section>
	)
}
