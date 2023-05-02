import './style/styleProjects.css'
import GifApp from './image/gifapp.jpg'
import BookingApp from './image/bookingApp.jpg'

function Projects() {
  return (
    <div className='containerProjects' id='projects'>
      <h3 className='titleProjects'>Projects</h3>
      <p className=''></p>
      <div className='containerBoxGifApp'>
        <div className='boxGifApp'>
          <a target='_blank' href='https://jozefpv.github.io/React-Explorer/' rel='noreferrer'>
            <img className='photoGifApp' src={GifApp}></img>
            <p className='textGifApp'>GifApp</p>
          </a>
        </div>
        <div className='boxGifAppNotAviable'>
          <a target='_blank' href='' rel='noreferrer'>
            <img className='photoGifApp' src={BookingApp}></img>
            <p className='textGifApp'>BookingApp</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects