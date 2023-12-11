import './styles.sass'

export const Footer = () => {
  return (
    <div className="footer__container">
      <p data-testid="footer-text">
        © Flash 2023. All rights reserved. Developed with ♡ by{' '}
        <a href="https://github.com/kyotodevIndie" className="footer__link">
          Kyoto
        </a>
        .
      </p>
    </div>
  )
}
