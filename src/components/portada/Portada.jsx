import Photo from './image/photo.jpg'
import './styles/stylePortada.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';


function Portada() {
    return (
        <div className="containerPortada" id='about'>
            <div className="containerTextSection">
                <h3 className='titleText'>
                    FullStack Developer
                </h3>
                <p className='descriptionText'>
                    I am Jozef, passionate about development and constant learning.✌
                </p>
                <div className='containerIcons'>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jozef-pohorelec-vi%C3%B1a-1293ab257/'><BsLinkedin size={25} className='iconItem' /></a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Jozefpv'><BsGithub size={25} className='iconItem'/></a>
                </div>
            </div>
            <div className='containerPhotoSection'>
                <img className="profilePhoto" src={Photo} alt="Profile photo"></img>
            </div>
        </div>
    )
}

export default Portada