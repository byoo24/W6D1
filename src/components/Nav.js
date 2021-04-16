import React, { useState, useEffect } from 'react'
import { navLinks } from '@config'
import { Logo } from '@icons'
import { navDelay } from '@util'
import styled from 'styled-components'
import { Link } from 'gatsby'


const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledList = styled.ol`
  display: flex;
  margin: 0;
  list-style: none;

  li {
    margin: 0;
    margin-right: 5px;
    counter-increment: item 1;

    a {
      padding: 10px;
      text-decoration: none;

      &::before {
        content: '0' counter(item) '.';
        color: var(--color-yellow);
        margin-right: 5px;
      }
    }
  }
`

const StyledLogo = styled.div`
  ${p => p.theme.mixins.flexCenter}
  width: 50px;
`


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
    <StyledNav>
        <StyledLogo>
          <Logo />
        </StyledLogo>

        <StyledList>
            {navLinks.map(({name, url}, i) => (
                <li key={i}>
                    <Link href={url}>{name}</Link>
                </li>
            ))}
        </StyledList>
    </StyledNav>
  )
}


export default Nav