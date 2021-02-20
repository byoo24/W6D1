import React, { useState, useEffect } from 'react'
import { navLinks } from '@config'
import { Logo } from '@icons'
import { navDelay } from '@util'


const Nav = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, navDelay);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

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