// import { useState } from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import 'react-responsive-carousel/lib/styles/carousel.css'

// interface Photo {
// 	img: string
// 	title: string
// }

// export function CarouselImg({ arrayPhotos }: { arrayPhotos: Photo[] }) {
// 	const [openCloseImg, setOpenCloseImg] = useState(false)
// 	const [showThumbs, setShowThumbs] = useState(false)

// 	const handleClick = () => {
// 		setOpenCloseImg(!openCloseImg)
// 		setShowThumbs(!openCloseImg)
// 		console.log(showThumbs)
// 	}

// 	return (
// 		<section
// 			className={`relative ${
// 				openCloseImg ? 'h-600' : 'h-315'
// 			} w-full max-w-full cursor-pointer overflow-hidden border-2`}
// 		>
// 			<Carousel
// 				className={`w-full ${
// 					openCloseImg ? 'h-600' : 'h-315'
// 				} border-2 border-sky-600`}
// 				autoPlay
// 				infiniteLoop
// 				interval={3000}
// 				showArrows={true}
// 				// centerMode={true}
// 				showThumbs={showThumbs}
// 				showStatus={false}
// 				showIndicators={false}
// 				onClickItem={handleClick}
// 				renderArrowPrev={(onClickHandler, hasPrev) =>
// 					hasPrev && (
// 						<button
// 							type='button'
// 							onClick={onClickHandler}
// 							title='Anterior'
// 							className='absolute border-2 top-0 left-0 z-10 p-2 h-full'
// 						>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='h-8 w-8 text-orangeDark border-2 p-1 hover:text-opacity-25'
// 								fill='none'
// 								viewBox='0 0 24 24'
// 								stroke='currentColor'
// 							>
// 								<path
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 									strokeWidth={2}
// 									d='M15 19l-7-7 7-7'
// 								/>
// 							</svg>
// 						</button>
// 					)
// 				}
// 				renderArrowNext={(onClickHandler, hasNext) =>
// 					hasNext && (
// 						<button
// 							type='button'
// 							onClick={onClickHandler}
// 							title='Siguiente'
// 							className='absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 border-2'
// 						>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='h-8 w-8 text-orangeDark border-2 p-1 hover:text-opacity-25'
// 								fill='none'
// 								viewBox='0 0 24 24'
// 								stroke='currentColor'
// 							>
// 								<path
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 									strokeWidth={2}
// 									d='M9 5l7 7-7 7'
// 								/>
// 							</svg>
// 						</button>
// 					)
// 				}
// 			>
// 				{arrayPhotos.map((item) => (
// 					<div className='border-2 border-amber-300 w-full h-315'>
// 						<img
// 							key={item.img}
// 							className={` w-full ${
// 								openCloseImg
// 									? 'h-5/6 aspect-square object-contain '
// 									: 'h-315 object-cover'
// 							}`}
// 							src={item.img}
// 							alt={item.title}
// 							loading='lazy'
// 						/>
// 					</div>
// 				))}
// 			</Carousel>
// 		</section>
// 	)
// }

// import ImageList from '@mui/material/ImageList'
// import ImageListItem from '@mui/material/ImageListItem'

// const itemData = [
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=125XAakMpCVEPsAcFmC0Q5AOdl5EkJi6v',
// 		title: 'Frente del edificio',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1_La5MTgeMBxoSJ3wPJgtaHSsIJS979Mf',
// 		title: 'Logo edificio farfalle ubicado en la cochera',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ldK3uNTOl_3DDthNEISMaQVIvMQrFHMP',
// 		title: 'Frente del edificio',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1_srbM9-HHMsg0L3Tbk9nIZOQ26eLdXLg',
// 		title: 'Escaleras internas del edificio, vistas de frente',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=11a95G-Tc5iWoPKL76QGdwXwpyQuEQQoX',
// 		title: 'Escaleras internas del edificio, vista desde arriba',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=17vtoqjmEmqAPU8V3piknUG_x_6JDB7Ol',
// 		title: 'Escaleras internas del edificio, desde el primer piso',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ErEBI3_Odqi35G5YgTIAUV4yG0K1MDt7',
// 		title: 'Escaleras internas del edificio, desde el segundo piso',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=10VxtaLVMMVqEb7AA2SFIKerAdjtDm0Qx',
// 		title: 'Rejas porton con el logo Edificio Farfalle',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1O7v9cABr7TZzFOHHWsMatQVoMhUxoXoE',
// 		title: 'Porton del edificio Farfalle',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1SQqprR0I8xyfITqkWLd92FrRkuCTXI_r',
// 		title: 'Porton del edificio Farfalle',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=115Q-j5HNudWJ1Sdi_WjNjznIadzmLNno',
// 		title: 'Entrada de la cochera desde el interior del edificio',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=16u78Roi2FYu-L8B1iymrAOTVR78sQu1i',
// 		title: 'Entrada de la cochera',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1SawoMvdalXPgpR8QSrYOQeTrGq1c8plb',
// 		title: 'Contrafrente',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1TAasyfuKus0_MPovsTxH1sHOzSyyFf2T',
// 		title: 'Contrafrente',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1APotsqWtLtA-l-V0COz21al_IPSiDJI3',
// 		title: 'Cochera',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1i_bJJLTZzkjNZ2K6CMOCd4n_nnfKy-rj',
// 		title: 'Cochera vista desde arriba',
// 	},
// 	{
// 		img: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1seNaRQfTWhbDDpBLFZI_WlK_0kEK4Y5n',
// 		title: 'Cochera con palmera',
// 	},
// ]
// export function CarouselImg() {
// 	return (
// 		<ImageList
// 			sx={{ width: 500, height: 450 }}
// 			variant='woven'
// 			cols={3}
// 			gap={8}
// 		>
// 			{itemData.map((item) => (
// 				<ImageListItem key={item.img}>
// 					<img
// 						srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
// 						src={`${item.img}?w=161&fit=crop&auto=format`}
// 						alt={item.title}
// 						loading='lazy'
// 					/>
// 				</ImageListItem>
// 			))}
// 		</ImageList>
// 	)
// }

// const itemData = [
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/478872983.jpg?k=b3ae07da65bb39dd2956c82918cd3601bdccb9492362b36be85a842697949bb2&o=&hp=1',
// 		title: 'Contrafrente del edificio',
// 	},
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591872.jpg?k=ab1a0a33e6078b352c2f6e0c48b7a4247257461a671841d7779dddf430c55535&o=&hp=1',
// 		title: 'Frente del edificio',
// 	},
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433392854.jpg?k=3ee6d04326997d3ed092a2a45e74d8213bc902d7cd903c623fa49a624cae0d18&o=&hp=1',
// 		title: 'Pasillo a la cochera',
// 	},
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591845.jpg?k=7c43b9a2fef2686fa1124e2027d97d38c0884ea42c42cf5e8e7a2fbff815bd5c&o=&hp=1',
// 		title: 'Escaleras internas desde arriba',
// 	},
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433393030.jpg?k=f1e7d6302d8bade2a7fe77ad19d076d8685c8be373cf787d7baa1c00edf5619c&o=&hp=1',
// 		title: 'Cochera',
// 	},
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591846.jpg?k=84dc94bda00a2d53c3268ffb812d34c9216525c03c3d60bf9618452cc8a2a461&o=&hp=1',
// 		title: 'Escaleras internas',
// 	},
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591810.jpg?k=100198841408ff28e9451d954493b535450e7983a08f903b5aa9f1ea061be5b2&o=&hp=1',
// 		title: 'Cochera desde arriba',
// 	},
// 	{
// 		img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/474623212.jpg?k=9db3d1b4597a171051d7c27292b24f4081dbdd4b1cee9d25d0410a092b516e3a&o=&hp=1',
// 		title: 'Cartel bienvenida',
// 	},
// ]
