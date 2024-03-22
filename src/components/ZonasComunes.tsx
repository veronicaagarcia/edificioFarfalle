import { DeptoModel } from './comon/DeptoModel'
import cartel from '../assets/videos/Comunes/Cartel.mp4'
import escaleras from '../assets/videos/Comunes/Escaleras.mp4'
import escaleras2 from '../assets/videos/Comunes/Escaleras2.mp4'
import estacionamiento from '../assets/videos/Comunes/Estacionamiento.mp4'

export function ZonasComunes() {
	const imageNames = [
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1_srbM9-HHMsg0L3Tbk9nIZOQ26eLdXLg',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=11a95G-Tc5iWoPKL76QGdwXwpyQuEQQoX',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=10VxtaLVMMVqEb7AA2SFIKerAdjtDm0Qx',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1O7v9cABr7TZzFOHHWsMatQVoMhUxoXoE',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=17vtoqjmEmqAPU8V3piknUG_x_6JDB7Ol',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ErEBI3_Odqi35G5YgTIAUV4yG0K1MDt7',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=115Q-j5HNudWJ1Sdi_WjNjznIadzmLNno',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1TAasyfuKus0_MPovsTxH1sHOzSyyFf2T',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1_La5MTgeMBxoSJ3wPJgtaHSsIJS979Mf',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1APotsqWtLtA-l-V0COz21al_IPSiDJI3',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=16u78Roi2FYu-L8B1iymrAOTVR78sQu1i',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=125XAakMpCVEPsAcFmC0Q5AOdl5EkJi6v',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ldK3uNTOl_3DDthNEISMaQVIvMQrFHMP',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1i_bJJLTZzkjNZ2K6CMOCd4n_nnfKy-rj',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1seNaRQfTWhbDDpBLFZI_WlK_0kEK4Y5n',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=11Yj4f5Ujk6puFI4f7oNlaFQSpVGfqPpV',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1SawoMvdalXPgpR8QSrYOQeTrGq1c8plb',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1G9YZ67Cf_1kIXqDHLgyFy4QiUYzOisRt',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1SQqprR0I8xyfITqkWLd92FrRkuCTXI_r',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1LAgsHHkgGa5KsPzNhtos7NQq-Z3qaSRc',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1FjmsJTjzd98S4DJaRF--Vj-j0UYI3eTH',
	]
	return (
		<div className='w-full h-screen overflow-y-auto p-2'>
			<h2 className='font-thin font-serif italic text-base md:text-lg text-center text-orangeDark pt-2'>
				Zonas comunes
			</h2>
			<DeptoModel
				numVideos={4}
				videoNames={[cartel, escaleras, escaleras2, estacionamiento]}
				videoSizeMultiplier={1}
				imageNames={imageNames}
			/>
		</div>
	)
}
