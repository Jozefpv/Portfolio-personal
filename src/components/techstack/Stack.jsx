import './style/styleStack.css'
import Git from './image/git.png'
import Sql from './image/sql.png'
import Angular from './image/angular.png'
import React from './image/react.png'
import Net from './image/net.png'


function Stack() {
    return (
        <div className='containerStack' id='tech'>
            <h3 className='titleStack'>Tech Stack</h3>
            <p className='descriptionStack'>These are the technologies I am most comfortable working with, although I am still learning new ones. There are only two things, the ones I already know and the ones I am going to know.</p>
            <div className='iconBox'>
                <img src={React}></img>
                <img src={Angular}></img>
                <img src={Net}></img>
                <img src={Sql}></img>
                <img src={Git}></img>

            </div>
        </div>
    )
}

export default Stack