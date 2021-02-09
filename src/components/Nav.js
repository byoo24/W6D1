import React from 'react'
import { navLinks } from '@config'
import { Logo } from '@icons'


const Nav = () => {

    return (
        <div>
            <Logo />
            <ol>
                {navLinks.map(({name, url}, i) => (
                    <li key={i}>
                        <a href={url}>{name}</a>
                    </li>
                ))}
            </ol>
        </div>
    )
}


export default Nav