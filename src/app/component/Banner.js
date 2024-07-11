import React from "react";
const Banner = () => {
    return (
        <div className="main-bnr-one overflow-hidden relative">
            <div className="slider-pagination 2xl:left-[50px] xl:left-0 max-xl:left-auto max-xl:right-[20px] z-[2]">
                <div className="main-button-prev lg:block hidden mx-auto">
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="main-slider-pagination">
                    <span className="swiper-pagination-bullet">01</span>
                    <span className="swiper-pagination-bullet">02</span>
                    <span className="swiper-pagination-bullet">03</span>
                </div>
                <div className="main-button-next lg:block hidden mx-auto">
                    <i className="fa-solid fa-arrow-down"></i>
                </div>
            </div>
            <div className="main-slider-1  overflow-hidden z-[1]">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="banner-inner lg:pt-0 md:pt-[110px] pt-[110px] overflow-hidden">
                            <div className="container h-full">
                                <div className="row items-center md:justify-between justify-center h-full">
                                    <div className="md:w-7/12 px-[15px]">
                                        <div className="banner-content md:mb-[60px] mb-0">
                                            <span className="font-medium md:text-xl text-base text-[var(--secondary-dark)] mb-[10px] block">High Quality Test Station </span>
                                            <h1 className="font-lobster mb-2.5 text-black2">Choosing The<br /> Best <span className="text-primary">Quality Food</span></h1>
                                            <p className="max-w-[500px] lg:text-lg sm:text-base text-sm leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="banner-btn flex items-center lg:mt-10 mt-[25px] gap-[30px]">
                                                <a href="contact-us.html" className="btn btn-primary btn-md btn-hover-1"><span>Book a Table</span></a>
                                                <a href="about-us.html" className="btn btn-outline text-primary btn-md btn-hover-1"><span>View More</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-5/12 px-[15px]">
                                        <div className="banner-media">
                                            <img src="assets/images/main-slider/slider1/pic1.png" alt="/" className="xl:w-full lg:w-[450px] md:w-[100%] sm:w-[250px] w-[250px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/images/main-slider/slider1/img3.png" className="img1" alt="/" />
                            <img src="assets/images/main-slider/slider1/img1.png" className="img2" alt="/" />
                            <img src="assets/images/main-slider/slider1/img2.png" className="img3 animate-motion" alt="/" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="banner-inner lg:pt-0 md:pt-[110px] pt-[110px] overflow-hidden">
                            <div className="container">
                                <div className="row items-center md:justify-between justify-center">
                                    <div className="md:w-7/12 px-[15px]">
                                        <div className="banner-content md:mb-[60px] mb-0">
                                            <span className="font-medium md:text-xl text-base text-[var(--secondary-dark)] mb-[10px] block">The Best Food Stations</span>
                                            <h1 className="font-lobster mb-2.5 text-black2">Where Food <br /> Meets<span className="text-primary">Quality Food</span></h1>
                                            <p className="max-w-[500px] lg:text-lg sm:text-base text-sm leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="banner-btn flex items-center lg:mt-10 mt-[25px] gap-[30px]">
                                                <a href="contact-us.html" className="btn btn-primary btn-md btn-hover-1"><span>Book a Table</span></a>
                                                <a href="about-us.html" className="btn btn-outline text-primary btn-md shadow-primary btn-hover-1"><span>View More</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-5/12 px-[15px]">
                                        <div className="banner-media">
                                            <img src="assets/images/main-slider/slider1/pic1.png" alt="/" className="xl:w-full lg:w-[450px] md:w-[100%] sm:w-[250px] w-[250px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/images/main-slider/slider1/img3.png" className="img1" alt="/" />
                            <img src="assets/images/main-slider/slider1/img1.png" className="img2" alt="/" />
                            <img src="assets/images/main-slider/slider1/img2.png" className="img3 animate-motion" alt="/" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="banner-inner lg:pt-0 md:pt-[110px] pt-[110px] overflow-hidden">
                            <div className="container">
                                <div className="row items-center md:justify-between justify-center">
                                    <div className="md:w-7/12 px-[15px]">
                                        <div className="banner-content md:mb-[60px] mb-0">
                                            <span className="font-medium md:text-xl text-base text-[var(--secondary-dark)] mb-[10px] block">Exploring the Delicious World</span>
                                            <h1 className="font-lobster mb-2.5 text-black2">Delicious Eats <br /> And <span className="text-primary">Quality Food</span></h1>
                                            <p className="max-w-[500px] lg:text-lg sm:text-base text-sm leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="banner-btn flex items-center lg:mt-10 mt-[25px] gap-[30px]">
                                                <a href="contact-us.html" className="btn btn-primary btn-md btn-hover-1 shadow-primary"><span>Book a Table</span></a>
                                                <a href="about-us.html" className="btn btn-outline text-primary btn-md shadow-primary btn-hover-1"><span>View More</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-5/12 px-[15px]">
                                        <div className="banner-media">
                                            <img src="assets/images/main-slider/slider1/pic1.png" alt="/" className="xl:w-full lg:w-[450px] md:w-[100%] sm:w-[250px] w-[250px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/images/main-slider/slider1/img3.png" className="img1" alt="/" />
                            <img src="assets/images/main-slider/slider1/img1.png" className="img2" alt="/" />
                            <img src="assets/images/main-slider/slider1/img2.png" className="img3 animate-motion" alt="/" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container relative z-[1]">
                <div className="main-thumb1-area swiper-btn-lr">
                    <div className="swiper main-thumb1 w-[612px] h-auto overflow-hidden">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="food-card flex items-center">
                                    <div className="dz-media w-[80px] min-w-[80px] rounded-md relative overflow-hidden">
                                        <img src="assets/images/main-slider/slider1/thumb/pic1.jpg" alt="/" />
                                    </div>
                                    <div className="dz-content ml-[15px]">
                                        <h5 className="mb-1">BreakFast</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="food-card flex items-center">
                                    <div className="dz-media w-[80px] min-w-[80px] rounded-md relative overflow-hidden">
                                        <img src="assets/images/main-slider/slider1/thumb/pic2.jpg" alt="/" />
                                    </div>
                                    <div className="dz-content ml-[15px]">
                                        <h5 className="mb-1">Lunch</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="food-card flex items-center">
                                    <div className="dz-media w-[80px] min-w-[80px] rounded-md relative overflow-hidden">
                                        <img src="assets/images/main-slider/slider1/thumb/pic3.jpg" alt="/" />
                                    </div>
                                    <div className="dz-content ml-[15px]">
                                        <h5 className="mb-1">Dinner</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thumb-button-prev btn-prev-1 top-[50%] absolute translate-y-[-50%] h-[80px] rounded-md w-[27px] leading-[80px] text-center text-[#222222] text-sm duration-500 hover:bg-primary hover:text-white bg-[#2222221a] left-0 right-auto"><i className="fa-solid fa-angle-left"></i></div>
                    <div className="thumb-button-next btn-next-1 top-[50%] absolute translate-y-[-50%] h-[80px] rounded-md w-[27px] leading-[80px] text-center text-[#222222] text-sm duration-500 hover:bg-primary hover:text-white bg-[#2222221a] right-0"><i className="fa-solid fa-angle-right"></i></div>
                </div>
            </div>
        </div>
    )
}
export default Banner;