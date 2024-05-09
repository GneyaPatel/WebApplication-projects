import { Link } from "react-router-dom";

export default function Header1(){
    return(
        <>
		<div class="super_container">
            <header class="header">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="header_content d-flex flex-row align-items-center justify-content-start">
								<div class="logo">
									<div>The Venue</div>
									<div>restaurant</div>
								</div>
								<nav class="main_nav">
								<ul class="d-flex flex-row align-items-center justify-content-start">
									<li class="nav-item active">
									<a class="nav-link" href="index.html"><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
									</li>
									
									<li class="nav-item @@about__active">
									<a class="nav-link" href="about.html"><Link to="/about">About Us</Link></a>
									</li>

									<li class="nav-item @@menu__active">
									<a href="menu.html"><Link to="/menu">Menu</Link></a>
									</li>

									<li class="nav-item @@element__active">
									<a href="element.html"><Link to="/highlight">Highlight</Link></a>
									</li>
									<li class="nav-item @@blog__active">
									<a href="blog.html"><Link to="/blog">Blog</Link></a>
									</li>
									
									<li class="nav-item @@contact__active">
									<a class="nav-link" href="contact.html"><Link to="path=/contact">Contact</Link></a>
									</li>
									
									<nav class="ml-lg-3">
									<div>Reservations:+34 586 778 8892</div>
									</nav>
								</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
        </>
    );
}