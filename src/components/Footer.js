import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h3 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/seascapeprojects/">@seascapeprojects</a>
    </h3>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://seascapeprojects.com.au">Seascape Projects</a>.
        </span>
      </div>
    </footer>
  </div>
)
