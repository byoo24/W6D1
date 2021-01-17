import React from 'react'


const Nav = () => {

    return (
        <div>
            <ol>
                {['About', 'Experience', 'Projects'].map(text => {
                    return <li>{text}</li>
                })}
            </ol>
        </div>
    )
}


export default Nav