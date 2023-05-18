import './style/styleProjects.css'
import GifApp from './image/gifapp.jpg'
import BookingApp from './image/bookingApp.jpg'
import TodoList from './image/todo.jpg'
import Shop from './image/shop.jpg'

function Projects() {
  return (
    <div className='containerProjects' id='projects'>
      <h3 className='titleProjects'>Projects</h3>
      <p className=''></p>
      <div className='containerBoxGifApp'>
        <div className='boxGifApp'>
          <a target='_blank' href='https://jozefpv.github.io/To-Do-List/' rel='noreferrer'>
            <img className='photoGifApp' src={TodoList}></img>
            <p className='textGifApp'>To do list</p>
          </a>
        </div>

        <div className='boxGifApp'>
          <a target='_blank' href='https://jozefpv.github.io/React-Explorer/' rel='noreferrer'>
            <img className='photoGifApp' src={GifApp}></img>
            <p className='textGifApp'>GifApp</p>
          </a>
        </div>

        <div className='boxGifApp'>
          <a target='_blank' href='https://jozefpv.github.io/React-Shop/' rel='noreferrer'>
            <img className='photoGifApp' src={Shop}></img>
            <p className='textGifApp'>React Shop - UseContext</p>
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