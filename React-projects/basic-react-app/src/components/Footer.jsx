import footerStyle from '../scss/footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <p className={footerStyle['title']}>
        Copyright by FS_TEAM {new Date().getFullYear()}
      </p>
      <div className='text-end'>
        <p><small>Created By </small> <em className='text-warning'>Erhan</em> </p>
      </div>
    </footer>
  );
}

export default Footer;