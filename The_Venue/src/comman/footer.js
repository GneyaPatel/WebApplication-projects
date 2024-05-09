export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 footer_col">
            <div className="footer_logo">
              <div className="footer_logo_title">The Venue</div>
              <div className="footer_logo_subtitle">restaurant</div>
            </div>
            <div className="copyright">
              <p style={{ lineHeight: 1.2 }}>
                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with{' '}
                <i className="fa fa-heart-o" aria-hidden="true"></i> 
              </p>
            </div>
          </div>

          <div className="col-lg-6 footer_col">
            <div className="footer_about">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
                ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio.
              </p>
            </div>
          </div>

          <div className="col-lg-3 footer_col">
            <div className="footer_contact">
              <ul>
                <li className="d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="footer_contact_title">Address:</div>
                  </div>
                  <div className="footer_contact_text">481 Sangini Aspire, Pal, Adajan, Surat, Gujarat 395009</div>
                </li>
                <li className="d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="footer_contact_title">Phone:</div>
                  </div>
                  <div className="footer_contact_text">+91 98765 43210</div>
                </li>
                <li className="d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="footer_contact_title">Email:</div>
                  </div>
                  <div className="footer_contact_text">thevenuerestaurant@gmail.com</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
