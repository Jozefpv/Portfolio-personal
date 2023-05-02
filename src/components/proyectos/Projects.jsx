import './style/styleProjects.css'
import GifApp from './image/gifapp.jpg'

function Projects() {
  return (
    <div className='containerProjects' id='projects'>
      <h3 className='titleProjects'>Projects</h3>
      <p className=''></p>
      <div className='boxGifApp'>
      <a target='_blank' href='https://jozefpv.github.io/React-Explorer/' rel='noreferrer'>
        <img className='photoGifApp' src={GifApp}></img>
        <p className='textGifApp'>GifApp</p>
        </a>
      </div>
    </div>
  )
}

export default Projects