import Image from "next/image";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import HeaderTop from "./component/HeaderTop";

export default function Home() {
  return (
    <div className="page-wraper">
    
      <Banner />
      {/* Special Menu Start */}
      <section className="lg:pt-[100px] pt-[50px] lg:pb-[70px] pb-[40px] bg-white relative overflow-hidden section-wrapper-2">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">Special Menu</h2>
          </div>
          <div className="row">
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1] active">
                <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                  <img
                    src="assets/images/gallery/small/pic1.jpg"
                    alt=""
                    className="rounded-full relative group-hover:animate-spin"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="mb-2.5">
                    <a href="product-detail.html">Pizza</a>
                  </h4>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </p>
                  <h5 className="text-primary">$55.00</h5>
                  <a
                    href="shop/shopcart"
                    className="btn btn-primary btn-hover-2 mt-[18px]"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                  <img
                    src="assets/images/gallery/small/pic2.jpg"
                    alt=""
                    className="rounded-full group-hover:animate-spin"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="mb-2.5">
                    <a href="product-detail.html">Rice</a>
                  </h4>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </p>
                  <h5 className="text-primary">$50.00</h5>
                  <a
                    href="shop/shopcart"
                    className="btn btn-primary btn-hover-2 mt-[18px]"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                  <img
                    src="assets/images/gallery/small/pic3.jpg"
                    alt=""
                    className="rounded-full group-hover:animate-spin"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="mb-2.5">
                    <a href="product-detail.html">Green Salad</a>
                  </h4>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </p>
                  <h5 className="text-primary">$45.00</h5>
                  <a
                    href="shop/shopcart"
                    className="btn btn-primary btn-hover-2 mt-[18px]"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                  <img
                    src="assets/images/gallery/small/pic4.jpg"
                    alt=""
                    className="rounded-full group-hover:animate-spin"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="mb-2.5">
                    <a href="product-detail.html">Pasta</a>
                  </h4>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </p>
                  <h5 className="text-primary">$35.00</h5>
                  <a
                    href="shop/shopcart"
                    className="btn btn-primary btn-hover-2 mt-[18px]"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/background/pic2.png"
          alt=""
          className="bg1 bottom-0 left-[-275px] absolute max-2xl:hidden animate-move"
        />
        <img
          src="assets/images/background/pic3.png"
          alt=""
          className="bg2 right-[40px] max-2xl:right-0 top-[100px] max-2xl:top-[28px] absolute 2xl:block hidden"
        />
      </section>
      {/* Special Menu End */}
      {/* Today's Menu Start */}
      <section className="bg-light content-inner pb-0 relative overflow-hidden">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">Today's Menu</h2>
          </div>
          <div className="row">
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                <div className="w-full min-w-full h-full">
                  <img
                    src="assets/images/gallery/grid2/pic2.jpg"
                    alt=""
                    className="w-full block"
                  />
                </div>
                <span className="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">
                  top seller
                </span>
                <div className="content bg-white text-center py-[23px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                  <h5 className="mb-2.5">
                    <a href="javascript:void(0);">Pasta</a>
                  </h5>
                  <p className="mb-[2px]">
                    Lorem ipsum dolor sit amet, dipiscing elit, sed
                  </p>
                </div>
                <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                  <div className="info relative">
                    <h5 className="mb-0">
                      <a className="text-white" href="our-menu-1.html">
                        Pasta
                      </a>
                    </h5>
                    <span className="text-xl text-[var(--secondary-dark)] font-bold leading-[30px]">
                      $35.00
                    </span>
                  </div>
                  <a href="shop-cart.html">
                    <i className="flaticon-shopping-cart bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex items-center relative justify-center text-2xl text-center" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                <div className="w-full min-w-full h-full">
                  <img
                    src="assets/images/gallery/grid2/pic5.jpg"
                    alt=""
                    className="w-full block"
                  />
                </div>
                <span className="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">
                  top seller
                </span>
                <div className="content bg-white text-center py-[23px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                  <h5 className="mb-2.5">
                    <a href="javascript:void(0);">Oreo Shake</a>
                  </h5>
                  <p className="mb-[2px]">
                    Lorem ipsum dolor sit amet, dipiscing elit, sed
                  </p>
                </div>
                <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                  <div className="info relative">
                    <h5 className="mb-0">
                      <a className="text-white" href="our-menu-1.html">
                        Shake
                      </a>
                    </h5>
                    <span className="text-xl text-[var(--secondary-dark)] font-bold leading-[30px]">
                      $35.00
                    </span>
                  </div>
                  <a href="shop-cart.html">
                    <i className="flaticon-shopping-cart bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex items-center relative justify-center text-2xl text-center" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                <div className="w-full min-w-full h-full">
                  <img
                    src="assets/images/gallery/grid2/pic4.jpg"
                    alt=""
                    className="w-full block"
                  />
                </div>
                <span className="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">
                  top seller
                </span>
                <div className="content bg-white text-center py-[23px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                  <h5 className="mb-2.5">
                    <a href="javascript:void(0);">Dal Fry</a>
                  </h5>
                  <p className="mb-[2px]">
                    Lorem ipsum dolor sit amet, dipiscing elit, sed
                  </p>
                </div>
                <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                  <div className="info relative">
                    <h5 className="mb-0">
                      <a className="text-white" href="our-menu-1.html">
                        Dal
                      </a>
                    </h5>
                    <span className="text-xl text-[var(--secondary-dark)] font-bold leading-[30px]">
                      $25.00
                    </span>
                  </div>
                  <a href="shop-cart.html">
                    <i className="flaticon-shopping-cart bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex items-center relative justify-center text-2xl text-center" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
              <div className="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                <div className="w-full min-w-full h-full">
                  <img
                    src="assets/images/gallery/grid2/pic6.jpg"
                    alt=""
                    className="w-full block"
                  />
                </div>
                <span className="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">
                  top seller
                </span>
                <div className="content bg-white text-center py-[23px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                  <h5 className="mb-2.5">
                    <a href="javascript:void(0);">Pizza</a>
                  </h5>
                  <p className="mb-[2px]">
                    Lorem ipsum dolor sit amet, dipiscing elit, sed
                  </p>
                </div>
                <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                  <div className="info relative">
                    <h5 className="mb-0">
                      <a className="text-white" href="our-menu-1.html">
                        Pizza
                      </a>
                    </h5>
                    <span className="text-xl text-[var(--secondary-dark)] font-bold leading-[30px]">
                      $90.00
                    </span>
                  </div>
                  <a href="shop-cart.html">
                    <i className="flaticon-shopping-cart bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex items-center relative justify-center text-2xl text-center" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full text-center mt-[10px]">
              <a
                href="our-menu-2.html"
                className="btn btn-md btn-primary btn-hover-1"
              >
                <span>See All Dishes</span>
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/background/pic4.png"
          alt=""
          className="2xl:right-[20px] xl:right-[20px] 2xl:top-[20px] xl:top-[10px] absolute xl:block hidden"
        />
      </section>
      {/* Quality Service Start */}
      <section className="bg-light relative section-wrapper-3  after:content-[''] after:h-[200px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:z-[0] sm:py-[100px] py-[50px]">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">Quality Service's</h2>
          </div>
          <div className="icon-wrapper1 bg-white rounded-[15px] relative z-[1]">
            <div className="row">
              <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                <div className="bg-gallery-grid-pic1 icon-box-wrapper group text-center">
                  <div className="inner-content relative z-[1]">
                    <div className="mb-[10px]">
                      <i className="flaticon-restaurant text-7xl text-yellow" />
                    </div>
                    <div className="icon-content overflow-hidden text-center">
                      <h5 className="mb-2">Restaurant</h5>
                      <p className="sm:text-base text-[15px] group-hover:text-white">
                        Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                <div className="bg-gallery-grid-pic2 icon-box-wrapper group text-center">
                  <div className="inner-content relative z-[1]">
                    <div className="mb-[10px]">
                      <i className="flaticon-martini text-7xl text-yellow" />
                    </div>
                    <div className="icon-content overflow-hidden text-center">
                      <h5 className="mb-2">Bar</h5>
                      <p className="sm:text-base text-[15px] group-hover:text-white">
                        Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                <div className="bg-gallery-grid-pic3 icon-box-wrapper group text-center">
                  <div className="inner-content relative z-[1]">
                    <div className="mb-[10px]">
                      <i className="flaticon-coffee-cup text-7xl text-yellow" />
                    </div>
                    <div className="icon-content overflow-hidden text-center">
                      <h5 className="mb-2">Cafe</h5>
                      <p className="sm:text-base text-[15px] group-hover:text-white">
                        Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                <div className="bg-gallery-grid-pic4 icon-box-wrapper group text-center">
                  <div className="inner-content relative z-[1]">
                    <div className="mb-[10px]">
                      <i className="flaticon-cake text-7xl text-yellow" />
                    </div>
                    <div className="icon-content overflow-hidden text-center">
                      <h5 className="mb-2">Dessert</h5>
                      <p className="sm:text-base text-[15px] group-hover:text-white">
                        Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/background/pic3.png"
          alt=""
          className="2xl:left-[20px] 2xl:top-[20px] absolute 2xl:block hidden"
        />
      </section>
      {/* Quality Service End*/}
      {/* From Our Menu Start  */}
      <section className="sm:pb-[100px] pb-[40px] relative">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">From Our Menu</h2>
          </div>
          <div className="slider-frame relative">
            <div className="swiper menu-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic1.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Burger
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic2.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Pasta
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic3.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Tandoor
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic4.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Dal
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic1.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Burger
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic2.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Pasta
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic3.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Tandoor
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-box">
                    <div className="dz-img-box2 group">
                      <div className="w-full min-w-full h-full">
                        <img
                          src="assets/images/gallery/grid2/pic4.jpg"
                          alt=""
                          className="block w-full"
                        />
                      </div>
                      <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">
                        top seller
                      </span>
                      <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                        <div className="info relative">
                          <h5 className="mb-0">
                            <a className="text-white" href="our-menu-1.html">
                              Dal
                            </a>
                          </h5>
                          <span className="text-xl text-yellow font-bold leading-[30px]">
                            $50.00
                          </span>
                        </div>
                        <a href="shop-cart.html">
                          <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex relative justify-center text-2xl text-center" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-prev prev1 group hover:before:animate-spin">
                <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative" />
              </div>
              <div className="swiper-button-next next1 group hover:before:animate-spin">
                <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reservation Start  */}

      <section className="bg-background-pic1 bg-fixed sm:py-[100px] py-[40px] relative z-[2] after:content-[''] after:absolute after:z-[-1] after:bg-black-blur after:opacity-100 after:w-full after:h-full after:top-0 after:left-0 after:backdrop-blur-[6px]">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster text-white">Reservation</h2>
          </div>
          <form>
            <div className="row">
              <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
                <div className="relative flex gap-5 items-center w-full border-b border-white">
                  <div className="w-[35px] h-[50px] leading-10">
                    <i className="flaticon-user text-white text-2xl align-middle inline-flex" />
                  </div>
                  <input
                    name="dzName"
                    required=""
                    type="text"
                    className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
                <div className="relative flex gap-5 items-center w-full border-b border-white">
                  <div className="w-[35px] h-[50px] leading-10">
                    <i className="flaticon-phone-call text-white text-2xl align-middle inline-flex" />
                  </div>
                  <input
                    name="dzPhoneNumber"
                    required=""
                    type="number"
                    className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
                <div className="relative flex gap-5 items-center w-full border-b border-white">
                  <div className="w-[35px] h-[50px] leading-10">
                    <i className="flaticon-email-1 text-white text-2xl align-middle inline-flex" />
                  </div>
                  <input
                    name="dzEmail"
                    required=""
                    type="email"
                    className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
                <div className="relative flex gap-3 items-center w-full border-b border-white">
                  <div className="w-[35px] h-[50px] leading-10">
                    <i className="flaticon-two-people text-white text-2xl align-middle inline-flex" />
                  </div>
                  <select className="nice-select style-1 text-white flex-1 bg-transparent border-0 text-lg font-normal outline-none relative focus:ring-0">
                    <option value="Member">Number Of People</option>
                    <option value="Member1">Member1</option>
                    <option value="Member2">Member2</option>
                    <option value="Member3">Member3</option>
                    <option value="Member4">Member4</option>
                    <option value="Member5">Member5</option>
                  </select>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
                <div className="relative flex gap-5 items-center w-full border-b border-white">
                  <div className="w-[35px] h-[50px] leading-10">
                    <i className="flaticon-calendar-date text-white text-2xl align-middle inline-flex" />
                  </div>
                  <input
                    id="datePickerOnly"
                    name="dzName"
                    required=""
                    type="text"
                    className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full form-control filled"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
                <div className="relative flex gap-5 items-center w-full border-b border-white">
                  <div className="w-[35px] h-[50px] leading-10">
                    <i className="flaticon-clock text-white text-2xl align-middle inline-flex" />
                  </div>
                  <input
                    id="timePickerOnly"
                    name="dzName"
                    required=""
                    type="text"
                    className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
                    placeholder="Time"
                  />
                </div>
              </div>
              <div className="w-full text-center">
                <button
                  type="submit"
                  name="submit"
                  value="submit"
                  className="btn btn-lg btn-white btn-hover-1 py-[18px] px-[50px] font-medium text-base leading-2xl overflow-hidden z-[1] text-black2 rounded-[6px] relative inline-flex items-center justify-center duration-500 focus:ring-0"
                >
                  <span>Book a Table</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Reservation End */}
      {/* Testimonial's Start  */}
      <section className="sm:py-[100px] py-[40px] bg-white relative overflow-hidden">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">Customer's Comment</h2>
          </div>
          <div className="row mx-0">
            <div className="lg:w-7/12 w-full">
              <div className="swiper testimonial-one-thumb w-full">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="assets/images/testimonial/small/pic1.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/testimonial/small/pic2.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/testimonial/small/pic3.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/testimonial/small/pic4.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/testimonial/small/pic5.jpg" alt="/" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/images/testimonial/small/pic6.jpg" alt="/" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <div className="swiper testimonial-one-swiper h-100">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
                      <div className="testimonial-text relative mb-[10px]">
                        <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going to
                          use a passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                        <h5 className="testimonial-name font-bold leading-[32px] text-white">
                          John Doe
                        </h5>
                        <span className="testimonial-position text-white leading-[21px] text-sm block">
                          Food Expert
                        </span>
                      </div>
                      <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
                      <div className="testimonial-text relative mb-[10px]">
                        <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going to
                          use a passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                        <h5 className="testimonial-name font-bold leading-[32px] text-white">
                          Jolly Roy
                        </h5>
                        <span className="testimonial-position text-white leading-[21px] text-sm block">
                          Food Expert
                        </span>
                      </div>
                      <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
                      <div className="testimonial-text relative mb-[10px]">
                        <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going to
                          use a passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                        <h5 className="testimonial-name font-bold leading-[32px] text-white">
                          Thomas Hed
                        </h5>
                        <span className="testimonial-position text-white leading-[21px] text-sm block">
                          Food Expert
                        </span>
                      </div>
                      <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
                      <div className="testimonial-text relative mb-[10px]">
                        <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going to
                          use a passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                        <h5 className="testimonial-name font-bold leading-[32px] text-white">
                          Kally Mint
                        </h5>
                        <span className="testimonial-position text-white leading-[21px] text-sm block">
                          Food Expert
                        </span>
                      </div>
                      <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
                      <div className="testimonial-text relative mb-[10px]">
                        <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going to
                          use a passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                        <h5 className="testimonial-name font-bold leading-[32px] text-white">
                          Ronny Joy
                        </h5>
                        <span className="testimonial-position text-white leading-[21px] text-sm block">
                          Food Expert
                        </span>
                      </div>
                      <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
                      <div className="testimonial-text relative mb-[10px]">
                        <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going to
                          use a passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of text.
                        </p>
                      </div>
                      <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                        <h5 className="testimonial-name font-bold leading-[32px] text-white">
                          Dolly kom
                        </h5>
                        <span className="testimonial-position text-white leading-[21px] text-sm block">
                          Food Expert
                        </span>
                      </div>
                      <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/background/pic2.png"
          alt=""
          className="bottom-0 right-[-355px] absolute 2xl:block hidden animate-move"
        />
      </section>
      {/*  Testimonial's End */}
      {/* Master Chef */}
      <section className="bg-light sm:py-[100px] py-[40px] relative overflow-hidden">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">Master Chefs</h2>
          </div>
          <div className="swiper team-swiper overflow-visible swiper-visible">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic1.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">Sarah Albert</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic2.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">John Doe</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic3.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">Jemy carline</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social group">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fab fa-facebook-f bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fab fa-twitter bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fab fa-instagram bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fa-brands fa-linkedin-in bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic4.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">Cotline Care</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic1.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">Sarah Albert</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white items pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fab fa-facebook-f bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fab fa-twitter bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fab fa-instagram bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white inline-block duration-500 text-center h-10 w-10 leading-10 text-lg"
                              >
                                <i className="fa-brands fa-linkedin-in bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic2.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">Sarah Albert</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic3.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">Sarah Albert</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                    <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                      <img
                        src="assets/images/team/pic4.jpg"
                        alt="/"
                        className="group-hover:scale-110 duration-500 block w-full"
                      />
                    </div>
                    <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                      <div className="clearfix">
                        <h6>
                          <a href="team-detail.html">Sarah Albert</a>
                        </h6>
                        <span className="font-normal text-sm leading-5 text-primary">
                          Senior Chef
                        </span>
                      </div>
                      <ul className="team-social">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]"
                          >
                            <i className="flaticon-share" />
                          </a>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li className="mb-2 relative">
                              <a
                                href="javascript:void(0);"
                                className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg"
                              >
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-prev team-button-prev group hover:before:animate-spin">
                <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative" />
              </div>
              <div className="swiper-button-next team-button-next group hover:before:animate-spin">
                <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Master Chef End */}
      {/* News & Blog */}
      <section className="content-inner sm:pb-[100px] pb-[40px] relative overflow-hidden">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">News &amp; Blog</h2>
          </div>
          <div className="swiper swiper-visible blog-swiper overflow-visible">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="card rela overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex w-full bg-white group">
                    <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                      <a href="javascript:void(0);" className="block h-full">
                        <img
                          src="assets/images/blog/grid/pic1.jpg"
                          alt="/"
                          className="h-full object-cover w-full group-hover:scale-110 duration-500"
                        />
                      </a>
                    </div>
                    <div className="content flex-col flex py-[25px] px-[30px] relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              30 Nov 2024
                            </a>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              3.5K{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">
                        <a href="blog-standard.html">Taste of Paradise Dishes</a>
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <a
                          href="blog-standard.html"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="card rela overlay-shine overflow-hidden rounded-lg shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group">
                    <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                      <a href="javascript:void(0);" className="block h-full">
                        <img
                          src="assets/images/blog/grid/pic2.jpg"
                          alt="/"
                          className="h-full object-cover w-full group-hover:scale-110 duration-500"
                        />
                      </a>
                    </div>
                    <div className="content flex-col flex py-[25px] px-[30px] relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              30 Nov 2024
                            </a>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              3.5K{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">
                        <a href="blog-standard.html">The Fork &amp; Knife</a>
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <a
                          href="blog-standard.html"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="card rela overlay-shine overflow-hidden rounded-lg shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group">
                    <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                      <a href="javascript:void(0);" className="block h-full">
                        <img
                          src="assets/images/blog/grid/pic3.jpg"
                          alt="/"
                          className="h-full object-cover w-full group-hover:scale-110 duration-500"
                        />
                      </a>
                    </div>
                    <div className="content flex-col flex py-[25px] px-[30px] relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              30 Nov 2024
                            </a>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              3.5K{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">
                        <a href="blog-standard.html">Flavors Of The World</a>
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <a
                          href="blog-standard.html"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="card rela overlay-shine overflow-hidden rounded-lg shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group">
                    <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                      <a href="javascript:void(0);" className="block h-full">
                        <img
                          src="assets/images/blog/grid/pic4.jpg"
                          alt="/"
                          className="h-full object-cover w-full group-hover:scale-110 duration-500"
                        />
                      </a>
                    </div>
                    <div className="content flex-col flex py-[25px] px-[30px] relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              30 Nov 2024
                            </a>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              3.5K{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">
                        <a href="blog-standard.html">The Spices Route Taste</a>
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <a
                          href="blog-standard.html"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="card rela overlay-shine overflow-hidden rounded-lg shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group">
                    <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                      <a href="javascript:void(0);" className="block h-full">
                        <img
                          src="assets/images/blog/grid/pic1.jpg"
                          alt="/"
                          className="h-full object-cover w-full group-hover:scale-110 duration-500"
                        />
                      </a>
                    </div>
                    <div className="content flex-col flex py-[25px] px-[30px] relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              30 Nov 2024
                            </a>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              3.5K{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">
                        <a href="blog-standard.html">Taste of Paradise Dishes</a>
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <a
                          href="blog-standard.html"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-box">
                  <div className="card rela overlay-shine overflow-hidden rounded-lg shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group">
                    <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                      <a href="javascript:void(0);" className="block h-full">
                        <img
                          src="assets/images/blog/grid/pic2.jpg"
                          alt="/"
                          className="h-full object-cover w-full group-hover:scale-110 duration-500"
                        />
                      </a>
                    </div>
                    <div className="content flex-col flex py-[25px] px-[30px] relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              30 Nov 2024
                            </a>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <a className="text-inherit" href="javascript:void(0);">
                              <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}
                              3.5K{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">
                        <a href="blog-standard.html">The Fork &amp; Knife</a>
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <a
                          href="blog-standard.html"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-prev blog-button-prev group hover:before:animate-spin">
                <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative" />
              </div>
              <div className="swiper-button-next blog-button-next group hover:before:animate-spin">
                <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News & Blog End */}
      {/* Map Iframe */}
      <div className="map-iframe style-1 relative">
        <iframe
          className="w-full lg:h-[400px] sm:h-[350px] h-[300px] mb-[-10px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244934.17139458598!2d75.27787773507539!3d25.125368923263647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678086292169!5m2!1sen!2sin"
          style={{ border: 0 }}
        />
      </div>
      {/* Map Iframe End */}
      <Footer />
    </div>
  );
}
