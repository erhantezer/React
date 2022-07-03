import headerStyle from '../scss/header.module.scss';

const Header = () => {
  return (
    <header className='container text-center mt-5 bg-warning'>
      <h1 className={headerStyle['title']}>COMMENTS</h1>
    </header>
  )
}

export default Header