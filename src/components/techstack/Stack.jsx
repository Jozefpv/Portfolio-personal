import './style/styleStack.css'
import Git from './image/git.png'
import Mongo from './image/mongodb.png'
import Mysql from './image/mysql.png'
import Node from './image/nodejs.png'
import React from './image/react.png'
import Java from './image/java.png'


function Stack() {
    return (
        <div className='containerStack' id='tech'>
            <h3 className='titleStack'>Tech Stack</h3>
            <p className='descriptionStack'>These are the technologies I am most comfortable working with, although I am still learning new ones. There are only two things, the ones I already know and the ones I am going to know.</p>
            <div className='iconBox'>
                <img src={React}></img>
                <img src={Node}></img>
                <img src={Java}></img>
                <img src={Mysql}></img>
                <img src={Mongo}></img>
                <img src={Git}></img>

            </div>
        </div>
    )
}

export default Stack