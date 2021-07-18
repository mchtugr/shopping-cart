import { Navbar, Nav, Container } from 'react-bootstrap'
import Router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { filterProducts } from '../actions'

const Header = (props) => {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.products.category)
  const cart = useSelector((state) => state.cart.cartItems)
  const totalCartItems = cart.reduce((acc, c) => acc + c.qty, 0)
  return (
    <Navbar
      bg='warning'
      variant='light'
      expand='sm'
      collapseOnSelect
      className='navbar sticky-top'
    >
      <Container>
        {/* Logo & BrandName */}
        <Link href='/'>
          <a>
            <Navbar.Brand className='logo-container'>
              <Image
                src='/mun.png'
                alt='mun-logo'
                width={40}
                height={40}
                className='logo'
              ></Image>
            </Navbar.Brand>
          </a>
        </Link>
        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='toggle' />
        <Navbar.Collapse id='basic-navbar-nav' className='toggle-items'>
          <Nav>
            <Nav.Link
              className={`navItem ${category === 'men' && 'active'}`}
              onClick={(e) => {
                e.preventDefault()
                // dispatch(filterProducts('men'))
                Router.push('/men')
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              MEN
            </Nav.Link>
            <Nav.Link
              className={`navItem ${category === 'women' && 'active'}`}
              onClick={(e) => {
                e.preventDefault()
                // dispatch(filterProducts('women'))
                Router.push('/women')
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              WOMEN
            </Nav.Link>
            <Nav.Link
              className={`navItem ${category === 'bags' && 'active'}`}
              onClick={(e) => {
                e.preventDefault()
                // dispatch(filterProducts('bags'))
                Router.push('/bags')
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              BAGS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {props.children}
      </Container>
    </Navbar>
  )
}

export default Header
