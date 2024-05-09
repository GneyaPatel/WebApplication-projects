export default function Testimonials(){
    return(
        <>
            <div class="testimonials">
                <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/testimonials.jpg" data-speed="0.8"></div>
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <div class="section_title_container">
                                <div class="section_subtitle page_subtitle">What they say</div>
                                <div class="section_title"><h1>Testimonials</h1></div>
                            </div>
                        </div>
                    </div>
                    <div class="row testimonials_row">
                        <div class="col-lg-10 offset-lg-1">
                            
                            <div class="test_slider_container">
                                <div class="owl-carousel owl-theme test_slider">
                                    
                                    <div class="owl-item text-center">
                                        <div class="quote ml-auto mr-auto"><img src="images/quote.png" alt=""/></div>
                                        <div class="test_text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.</p>
                                        </div>
                                        <div class="test_info">James Smith, <span>Client</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}