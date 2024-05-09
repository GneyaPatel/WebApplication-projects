export default function SignatureDish() {
  const sigImageStyle = {
    backgroundImage: 'url(images/sig.jpg)',
  };

  return (
    <div className="sig">
      <div className="sig_content_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="sig_content">
                <div className="sig_subtitle page_subtitle">Must try</div>
                <div className="sig_title">
                  <h1>Our Signature Dish</h1>
                </div>
                <div className="rating_r sig_rating rating_r_5">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="sig_name_container d-flex flex-row align-items-start justify-content-start">
                  <div className="sig_name">Chana Masala</div>
                  <div className="sig_price ml-auto">$20</div>
                </div>
                <div className="sig_content_list">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li>Chickpea</li>
                    <li>Onions</li>
                    <li>Tamoto</li>
                    <li>Spices</li>
                  </ul>
                </div>
                <div className="button sig_button trans_200">
                  Order Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sig_image_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-5">
              <div className="sig_image">
                <div className="background_image" style={sigImageStyle}></div>
                <img src="images/sig.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
