import './style/styleProjects.css'
import Pintaloo from './image/pintaloo.png'
import TodoList from './image/todo.jpg'

function Projects() {
  return (
    <div className='containerProjects' id='projects'>
      <h3 className='titleProjects'>Projects</h3>
      <p className=''></p>
      <div className='containerBoxGifApp'>
        <div className='boxGifApp'>
          <a target='_blank' href='https://www.pintaloo.com/' rel='noreferrer'>
            <img className='photoGifApp' src={Pintaloo}></img>
            <p className='textGifApp'>Pintaloo</p>
          </a>
        </div>
        <div className='boxGifApp'>
          <a target='_blank' href='https://jozefpv.github.io/To-Do-List/' rel='noreferrer'>
            <img className='photoGifApp' src={TodoList}></img>
            <p className='textGifApp'>To do list</p>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Projects