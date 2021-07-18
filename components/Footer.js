const Footer = () => {
  return (
    <footer className='text-center bg-dark p-3 text-light'>
      <div>All Rights Reserved</div>
      <div>&copy; {new Date().getFullYear()}</div>
      <div>
        Designed by{' '}
        <a
          href='https://github.com/murtazaaylak'
          target='_blank'
          rel='noreferrer'
        >
          <strong>MurtazaAylak</strong>
        </a>
      </div>
    </footer>
  )
}

export default Footer
