import React from "react"
export default function ProductDetail() {
    return (
        <div className="page-wraper">
            {/* Header */}
            <header className="site-header main-bar-wraper main-bar-wraper top-0 left-0 w-full z-[999]">
                <div className="main-bar">
                    <div className="container">
                        {/* Website Logo */}
                        <div className="logo-header w-[180px] h-[64px] items-center relative flex float-left">
                            <a
                                href="index.html"
                                className=" pt-[5px] relative logo-white anim-logo-white"
                            >
                                <img
                                    src="/assets/images/logo2.png"
                                    alt="/"
                                    className="lg:w-full sm:w-[165px] w-[150px]"
                                />
                            </a>
                            <a href="index.html" className="anim-logo logo-black ">
                                <img
                                    src="/assets/images/logo.png"
                                    alt="/"
                                    className="lg:w-full sm:w-[165px] w-[150px]"
                                />
                            </a>
                        </div>
                        {/* Toggle button */}
                        <button className="togglebtn lg:hidden block bg-primary w-[45px] h-[45px] relative rounded-md float-right mt-2">
                            <span className="bar1" />
                            <span className="bar2" />
                            <span className="bar3" />
                        </button>
                        {/* EXTRA NAV */}
                        <div className="extra-nav float-right items-center h-[64px] lg:flex relative hidden pl-[70px]">
                            <div className="extra-cell flex items-center">
                                <ul className="flex items-center gap-[10px]">
                                    <li className="inline-block">
                                        <a
                                            className="bg-white user-btn white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)] text-black2"
                                            href="#offcanvasLogin"
                                        >
                                            <i className="flaticon-user text-2xl inline-flex" />
                                        </a>
                                    </li>
                                    <li className="inline-block">
                                        <button className="cart-btn bg-white white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)]">
                                            <i className="flaticon-shopping-bag-1 text-2xl inline-flex ping-bag-1" />
                                            <span className="badge absolute top-[3px] right-[-6px] p-0 h-5 w-5 font-medium text-xs leading-5 bg-[#666666] text-white rounded-[10px]">
                                                6
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu cart-list mt-2.5">
                                            <li className="cart-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <a href="product-detail.html">
                                                            <img
                                                                alt="/"
                                                                className="media-object"
                                                                src="/assets/images/shop/pic2.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="dz-title">
                                                            <a
                                                                href="product-detail.html"
                                                                className="media-heading"
                                                            >
                                                                Double Burger
                                                            </a>
                                                        </h6>
                                                        <span className="dz-price">$28.00</span>
                                                        <span className="item-close">×</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <a href="product-detail.html">
                                                            <img
                                                                alt="/"
                                                                className="media-object"
                                                                src="/assets/images/shop/pic3.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="dz-title">
                                                            <a
                                                                href="product-detail.html"
                                                                className="media-heading"
                                                            >
                                                                Cheese Burger
                                                            </a>
                                                        </h6>
                                                        <span className="dz-price">$20.00</span>
                                                        <span className="item-close">×</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <a href="product-detail.html">
                                                            <img
                                                                alt="/"
                                                                className="media-object"
                                                                src="/assets/images/shop/pic4.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="dz-title">
                                                            <a
                                                                href="product-detail.html"
                                                                className="media-heading"
                                                            >
                                                                Burger
                                                            </a>
                                                        </h6>
                                                        <span className="dz-price">$15.00</span>
                                                        <span className="item-close">×</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="cart-item text-center flex justify-between">
                                                <h6 className="text-primary mb-0">Total:</h6>
                                                <h6 className="text-primary mb-0">$63</h6>
                                            </li>
                                            <li className="text-center d-flex">
                                                <a
                                                    href="shop/shopcart"
                                                    className="btn btn-primary me-2 w-100 d-block btn-hover-1"
                                                >
                                                    <span>View Cart</span>
                                                </a>
                                                <a
                                                    href="our-menu-1.html"
                                                    className="btn btn-outline w-100 d-block btn-hover-1"
                                                >
                                                    <span>Menu</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* EXTRA NAV */}
                        {/* Header Nav */}
                        <div className="header-nav lg:justify-end lg:flex-row flex-col lg:gap-0 gap-5 flex">
                            <div className="logo-header lg:hidden">
                                <a href="index.html" className="anim-logo">
                                    <img src="/assets/images/logo.png" alt="/" />
                                </a>
                            </div>
                            <ul className="nav white navbar-nav navbar lg:flex items-center float-right">
                                <li className="">
                                    <a href="javascript:void(0);">Home</a>
                                   
                                </li>
                                <li className="has-mega-menu sub-menu-down">
                                    <a href="javascript:void(0);">Pages</a>
                                    <ul className="mega-menu sub-menu left-0 p-0 max-w-[1100px] max-xl:max-w-[990px] w-full mx-auto">
                                        <li>
                                            <a href="javascript:;">Pages</a>
                                            <ul className="sub-part lg:mt-[15px]">
                                                <li>
                                                    <a href="about-us.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">FAQ</a>
                                                </li>
                                                <li>
                                                    <a href="team.html">Team</a>
                                                </li>
                                                <li>
                                                    <a href="team-detail.html">Team Detail</a>
                                                </li>
                                                <li>
                                                    <a href="testimonial.html">Testimonial</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">Pages</a>
                                            <ul className="lg:mt-[15px] sub-part">
                                                <li>
                                                    <a href="services.html">Services</a>
                                                </li>
                                                <li>
                                                    <a href="service-detail.html">Service Detail</a>
                                                </li>
                                                <li>
                                                    <a href="error-404.html">Error 404</a>
                                                </li>
                                                <li>
                                                    <a href="coming-soon.html">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="under-maintenance.html">Under Maintenance</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">Our Menus</a>
                                            <ul className="lg:mt-[15px] sub-part">
                                                <li>
                                                    <a href="our-menu-1.html">Menu Style 1</a>
                                                </li>
                                                <li>
                                                    <a href="our-menu-2.html">Menu Style 2</a>
                                                </li>
                                                <li>
                                                    <a href="our-menu-3.html">Menu Style 3</a>
                                                </li>
                                                <li>
                                                    <a href="our-menu-4.html">Menu Style 4</a>
                                                </li>
                                                <li>
                                                    <a href="our-menu-5.html">Menu Style 5</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="header-adv lg:table-cell hidden pt-[30px] px-2.5 pb-5 relative align-top w-1/4">
                                            <img src="/assets/images/adv-media.jpg" alt="/" />
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-down">
                                    <a href="javascript:void(0);">Shop</a>
                                    <ul className="sub-menu">
                                        <li className="py-[5px] px-5 relative">
                                            <a href="shop-style-1.html">Shop Style 1</a>
                                        </li>
                                        <li className="py-[5px] px-5 relative">
                                            <a href="shop-style-2.html">Shop Style 2</a>
                                        </li>
                                        <li className="py-[5px] px-5 relative">
                                            <a href="shop-cart.html">Shop Cart</a>
                                        </li>
                                        <li className="py-[5px] px-5 relative">
                                            <a href="shop-wishlist.html">Shop Wishlist</a>
                                        </li>
                                        <li className="py-[5px] px-5 relative">
                                            <a href="shop-checkout.html">Shop Checkout</a>
                                        </li>
                                        <li className="py-[5px] px-5 relative">
                                            <a href="product-detail.html">Product Detail</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-down has-mega-menu">
                                    <a href="javascript:void(0);">Blogs</a>
                                    <ul className="mega-menu sub-menu p-0 left-0 lg:table">
                                        <li>
                                            {" "}
                                            <a href="javascript:;">Blog Grid</a>
                                            <ul className="sub-part lg:mt-[15px]">
                                                <li>
                                                    <a href="blog-grid-2.html">Blog Grid 2</a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-3.html">Blog Grid 3</a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-left-sidebar.html">
                                                        Blog Grid Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-right-sidebar.html">
                                                        Blog Grid Right Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            {" "}
                                            <a href="javascript:;">Blog List</a>
                                            <ul className="sub-part lg:mt-[15px]">
                                                <li>
                                                    <a href="blog-list.html">Blog List</a>
                                                </li>
                                                <li>
                                                    <a href="blog-list-left-sidebar.html">
                                                        Blog List Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-list-right-sidebar.html">
                                                        Blog List Right Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-both-sidebar.html">Blog Both Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            {" "}
                                            <a href="javascript:;">Blog Single</a>
                                            <ul className="sub-part lg:mt-[15px]">
                                                <li>
                                                    <a href="blog-standard.html">Blog Detail</a>
                                                </li>
                                                <li>
                                                    <a href="blog-open-gutenberg.html">Blog Open Gutenberg</a>
                                                </li>
                                                <li>
                                                    <a href="blog-detail-left-sidebar.html">
                                                        Blog Details Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-detail-right-sidebar.html">
                                                        Blog Details Right Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            {" "}
                                            <a href="javascript:void(0);">Blog Masonry</a>
                                            <ul className="sub-part lg:mt-[15px]">
                                                <li>
                                                    <a href="blog-grid-3-masonary.html">
                                                        Blog Grid 3 Masonry
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-4-masonary.html">
                                                        Blog Grid 4 Masonry
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-wide-list-sidebar.html">
                                                        Blog Wide List Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-wide-grid-sidebar.html">
                                                        Blog Wide Grid Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact-us.html">Contact Us</a>
                                </li>
                            </ul>
                            <div className="dz-social-icon">
                                <ul>
                                    <li>
                                        <a
                                            target="_blank"
                                            className="fab fa-facebook-f"
                                            href="https://www.facebook.com/"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            className="fab fa-twitter"
                                            href="https://twitter.com/"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            className="fab fa-linkedin-in"
                                            href="https://www.linkedin.com/"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            className="fab fa-instagram"
                                            href="https://www.instagram.com/"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header */}
            {/* Banner  */}
            <section className="bg-banner4 bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0  pt-[50px] lg:h-[450px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center">
                <div className="container table h-full relative z-[1] text-center">
                    <div className="dz-bnr-inr-entry align-middle table-cell">
                        <h2 className="font-lobster text-white mb-5 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">
                            Product Detail
                        </h2>
                        {/* Breadcrumb Row */}
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb bg-primary shadow-[0px_10px_20px_rgba(0,0,0,0.05)] rounded-[10px] inline-block lg:py-[13px] md:py-[10px] sm:py-[5px] py-[7px] lg:px-[30px] md:px-[18px] sm:px-5 px-3.5 m-0">
                                <li className="breadcrumb-item p-0 inline-block text-[15px] font-normal">
                                    <a href="index.html" className="text-white ">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item text-white p-0 inline-block text-[15px] font-normal pl-2 active">
                                    Product Detail
                                </li>
                            </ul>
                        </nav>
                        {/* Breadcrumb Row End */}
                    </div>
                </div>
            </section>
            {/* Banner End */}
            {/* Product Detail Section */}
            <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] pb-[50px] relative bg-white overflow-hidden">
                <div className="container">
                    <div className="row product-detail">
                        <div className="lg:w-1/3 md:w-5/12 w-full px-[15px]">
                            <div className="detail-media rounded-[10px] overflow-hidden w-full mb-[30px]">
                                <img
                                    src="/assets/images/modal/pic1.jpg"
                                    alt="/"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-8/12 md:w-7/12 w-full px-[15px]">
                            <div className="detail-info relative">
                                <span className="badge mb-[10px] p-[2px] font-medium text-sm leading-5 text-[#666666] flex items-center rounded-[10px]">
                                    <svg
                                        className="mr-2"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect x="0.5" y="0.5" width={16} height={16} stroke="#0F8A65" />
                                        <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                    </svg>
                                    Pure veg
                                </span>
                                <div className="dz-head">
                                    <h2 className="mb-2 lg:text-4xl sm:text-[2rem] text-[1.75rem] font-semibold">
                                        Double Patty Veg Burger
                                    </h2>
                                    <div className="rating text-sm leading-[21px]">
                                        <i className="fa-solid fa-star text-[var(--secondary-dark)]" />{" "}
                                        <span className="text-bodycolor">
                                            <strong className="font-medium">4.5</strong> - 20 Reviews
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[15px] mt-5 mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book.
                                </p>
                                <ul className="detail-list flex my-[25px]">
                                    <li className="mr-[45px] text-[15px] font-medium leading-[22px] text-bodycolor">
                                        Price{" "}
                                        <span className="text-primary flex text-xl font-semibold leading-[30px] mt-[5px]">
                                            $20.00
                                        </span>
                                    </li>
                                    <li className="mr-[45px] text-[15px] font-medium leading-[22px] text-bodycolor">
                                        Quantity
                                        <div className="input-group mt-[5px] flex flex-wrap items-stretch h-[31px] relative w-[105px] min-w-[105px]">
                                            <input
                                                type="number"
                                                step={1}
                                                defaultValue={1}
                                                name="quantity"
                                                className="quantity-field"
                                            />
                                            <span className="flex justify-between p-[2px] absolute w-full">
                                                <input
                                                    type="button"
                                                    defaultValue="-"
                                                    className="button-minus"
                                                    data-field="quantity"
                                                />
                                                <input
                                                    type="button"
                                                    defaultValue="+"
                                                    className="button-plus"
                                                    data-field="quantity"
                                                />
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                <h6 className="mb-2">Add On</h6>
                                <ul className="add-product flex flex-wrap mx-[-5px] mb-[30px] w-full">
                                    <li className="p-[5px] sm:w-[50%] w-full">
                                        <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
                                            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
                                                <img
                                                    src="/assets/images/modal/mini/pic1.jpg"
                                                    alt="/"
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                            <div className="dz-content ml-[15px] flex justify-between w-full">
                                                <p className="font-medium text-black2 text-base">
                                                    French Frise
                                                </p>
                                                <div className="form-check search-content block">
                                                    <input
                                                        className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary"
                                                        type="checkbox"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-[5px] sm:w-[50%] w-full">
                                        <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
                                            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
                                                <img
                                                    src="/assets/images/modal/mini/pic2.jpg"
                                                    alt="/"
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                            <div className="dz-content ml-[15px] flex justify-between w-full">
                                                <p className="font-medium text-black2 text-base">
                                                    Extra Cheese
                                                </p>
                                                <div className="form-check search-content block">
                                                    <input
                                                        className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary"
                                                        type="checkbox"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-[5px] sm:w-[50%] w-full">
                                        <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
                                            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
                                                <img
                                                    src="/assets/images/modal/mini/pic3.jpg"
                                                    alt="/"
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                            <div className="dz-content ml-[15px] flex justify-between w-full">
                                                <p className="font-medium text-black2 text-base">
                                                    Coca Cola
                                                </p>
                                                <div className="form-check search-content block">
                                                    <input
                                                        className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary"
                                                        type="checkbox"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-[5px] sm:w-[50%] w-full">
                                        <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
                                            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
                                                <img
                                                    src="/assets/images/modal/mini/pic4.jpg"
                                                    alt="/"
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                            <div className="dz-content ml-[15px] flex justify-between w-full">
                                                <p className="font-medium text-black2 text-base">
                                                    Choco Lava
                                                </p>
                                                <div className="form-check search-content block">
                                                    <input
                                                        className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary"
                                                        type="checkbox"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="lg:flex justify-between">
                                    <ul className="modal-btn-group sm:flex block mx-[-7px]">
                                        <li className="mx-[7px] lg:mb-0 mb-[10px]">
                                            <a
                                                href="shop-cart.html"
                                                className="btn shadow-none btn-primary btn-hover-1"
                                            >
                                                <span>
                                                    Add To Cart{" "}
                                                    <i className="flaticon-shopping-bag-1 text-xl ml-[10px] inline-flex" />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mx-[7px] lg:mb-0 mb-[10px]">
                                            <a
                                                href="shop-checkout.html"
                                                className="btn shadow-none btn-outline-secondary btn-hover-1 text-yellow"
                                            >
                                                <span>
                                                    Buy Now{" "}
                                                    <i className="flaticon-shopping-cart text-xl ml-[10px] inline-flex" />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="avatar-list avatar-list-stacked flex">
                                        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                                            <img
                                                src="/assets/images/testimonial/small/pic1.jpg"
                                                alt=""
                                                className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                                            />
                                        </li>
                                        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                                            <img
                                                src="/assets/images/testimonial/small/pic2.jpg"
                                                alt=""
                                                className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                                            />
                                        </li>
                                        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                                            <img
                                                src="/assets/images/testimonial/small/pic3.jpg"
                                                alt=""
                                                className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                                            />
                                        </li>
                                        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                                            <img
                                                src="/assets/images/testimonial/small/pic4.jpg"
                                                alt=""
                                                className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                                            />
                                        </li>
                                        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
                                            <img
                                                src="/assets/images/testimonial/small/pic5.jpg"
                                                alt=""
                                                className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"
                                            />
                                        </li>
                                        <li className="avatar inline-block relative duration-300 hover:z-[1]">
                                            <span className="bg-primary h-[2.735rem] w-[2.735rem] leading-[2.735rem] text-center inline-block text-xs rounded-full text-white">
                                                150+
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pt-0 lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
                <div className="container">
                    <div className="row">
                        <div className="w-full px-[15px]">
                            <ul className="nav nav-tabs tabs-style-1 flex flex-wrap mb-[30px] border-b-2 border-[#EAEAEA]">
                                <li className="nav-item mr-[3px] mb-[-1px] rounded-ss-md rounded-se-md overflow-hidden">
                                    <button
                                        className="nav-link border-2 border-transparent px-4 py-2 block active web-design-1"
                                        href="#web-design-1"
                                    >
                                        <i className="icon-globe" />
                                        <span className="hidden md:inline-block ml-[10px]">
                                            Description
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item mr-[3px] mb-[-1px] rounded-ss-md rounded-se-md overflow-hidden">
                                    <button
                                        className="nav-link border-2 border-transparent px-4 py-2 block graphic-design-1"
                                        href="#graphic-design-1"
                                    >
                                        <i className="icon-image" />
                                        <span className="hidden md:inline-block ml-[10px]">
                                            Additional Information
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item mr-[3px] mb-[-1px] rounded-ss-md rounded-se-md overflow-hidden">
                                    <button
                                        className="nav-link border-2 border-transparent px-4 py-2 block developement-1"
                                        href="#developement-1"
                                    >
                                        <i className="icon-settings" />
                                        <span className="hidden md:inline-block ml-[10px]">
                                            Product Review
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="web-design-1" className="tab-pane duration-500 active">
                                    <p className="mb-[10px] lg:text-base text-[15px]">
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour, or randomised words which don't look even
                                        slightly believable. If you are going to use a passage of Lorem
                                        Ipsum, you need to be sure there isn't hidden in the middle of
                                        text.
                                    </p>
                                    <p className="lg:text-base text-[15px] mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <ul className="list-check primary">
                                        <li className="relative lg:text-base text-[15px] py-[6px] pr-[5px] pl-[30px] text-bodycolor">
                                            But I must explain to you how all this mistaken idea of
                                            denouncing pleasure and praising pain was born and I will give
                                            you a complete account of the system, and{" "}
                                        </li>
                                        <li className="relative lg:text-base text-[15px] py-[6px] pr-[5px] pl-[30px] text-bodycolor">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book.{" "}
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    id="graphic-design-1"
                                    className="tab-pane duration-500"
                                    style={{ display: "none" }}
                                >
                                    <table className="mb-5 border border-[#00000020] align-middle w-full">
                                        <tbody>
                                            <tr>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Cheese Burger
                                                </td>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Small, Medium &amp; Large
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Toppings
                                                </td>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Onion, Tomato, Olives
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Rating
                                                </td>
                                                <td className="p-[15px] font-medium text-yellow border border-[#00000020] ">
                                                    <span className="rating-bx">
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="far fa-star text-yellow" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Shipping Charges
                                                </td>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Free Shipping
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Add More
                                                </td>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Coke, Cheese, Choco lava
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    Delivery Time
                                                </td>
                                                <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">
                                                    30 mins
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    id="developement-1"
                                    className="tab-pane duration-500"
                                    style={{ display: "none" }}
                                >
                                    <div className="comments-area" id="comments">
                                        <ul className="comment-list md:mb-[60px] mb-10">
                                            <li className="comment">
                                                <div className="comment-body relative min-h-[95px] border-b border-[#2222221a] md:pl-[100px] pl-[75px] md:pb-[30px] pb-[15px] md:mb-[30px] mb-5">
                                                    <div className="comment-author vcard">
                                                        <img
                                                            className="md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full left-0 absolute"
                                                            src="/assets/images/testimonial/mini/pic1.jpg"
                                                            alt="/"
                                                        />
                                                        <cite className="not-italic text-base font-semibold mb-2 block">
                                                            Monsur Rahman Lito
                                                        </cite>
                                                    </div>
                                                    <div
                                                        className="star-rating mb-[10px] text-sm"
                                                        data-rating={2}
                                                    >
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="far fa-star text-yellow" />
                                                        <i className="far fa-star text-yellow" />
                                                        <i className="far fa-star text-yellow" />
                                                    </div>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                                {/* list END */}
                                            </li>
                                            <li className="comment">
                                                <div className="comment-body relative min-h-[95px] border-b border-[#2222221a] md:pl-[100px] pl-[75px] md:pb-[30px] pb-[15px] md:mb-[30px] mb-5">
                                                    <div className="comment-author vcard">
                                                        <img
                                                            className="md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full left-0 absolute"
                                                            src="/assets/images/testimonial/mini/pic2.jpg"
                                                            alt="/"
                                                        />
                                                        <cite className="not-italic text-base font-semibold mb-2 block">
                                                            Jake Johnson
                                                        </cite>
                                                    </div>
                                                    <div
                                                        className="star-rating mb-[10px] text-sm"
                                                        data-rating={3}
                                                    >
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="far fa-star text-yellow" />
                                                        <i className="far fa-star text-yellow" />
                                                    </div>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="comment">
                                                <div className="comment-body relative min-h-[95px] border-b border-[#2222221a] md:pl-[100px] pl-[75px] md:pb-[30px] pb-[15px] md:mb-[30px] mb-5">
                                                    <div className="comment-author vcard">
                                                        <img
                                                            className="md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full left-0 absolute"
                                                            src="/assets/images/testimonial/mini/pic3.jpg"
                                                            alt="/"
                                                        />
                                                        <cite className="not-italic text-base font-semibold mb-2 block">
                                                            John Doe
                                                        </cite>
                                                    </div>
                                                    <div
                                                        className="star-rating mb-[10px] text-sm"
                                                        data-rating={4}
                                                    >
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="fas fa-star text-yellow" />
                                                        <i className="far fa-star text-yellow" />
                                                    </div>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="comment-respond style-1" id="respond">
                                        <h3
                                            className="widget-title xl:mb-[30px] mb-5 pb-3 relative text-2xl"
                                            id="reply-title"
                                        >
                                            Add a review
                                        </h3>
                                        <form
                                            className="flex flex-wrap mx-[-10px]"
                                            id="commentform"
                                            method="post"
                                        >
                                            <p className="mb-[30px] px-[10px] sm:w-[50%] w-full comment-form-author">
                                                <label className="hidden" htmlFor="author">
                                                    Name <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
                                                    name="dzName"
                                                    placeholder="Author"
                                                    id="author"
                                                />
                                            </p>
                                            <p className="mb-[30px] px-[10px] sm:w-[50%] w-full comment-form-email">
                                                <label className="hidden" htmlFor="email">
                                                    Email <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
                                                    placeholder="Email"
                                                    name="dzEmail"
                                                    id="email"
                                                />
                                            </p>
                                            <div className="comment-form-rating flex text-bodycolor px-[10px]">
                                                <label className="pull-left mr-[10px] mb-5">
                                                    Your Rating
                                                </label>
                                                <div className="rating-widget">
                                                    {/* Rating Stars Box */}
                                                    <div className="rating-stars">
                                                        <ul id="stars">
                                                            <li
                                                                className="star inline-block"
                                                                title="Poor"
                                                                data-value={1}
                                                            >
                                                                <i className="fas fa-star fa-fw text-sm text-[#ccc]" />
                                                            </li>
                                                            <li
                                                                className="star inline-block"
                                                                title="Fair"
                                                                data-value={2}
                                                            >
                                                                <i className="fas fa-star fa-fw text-sm text-[#ccc]" />
                                                            </li>
                                                            <li
                                                                className="star inline-block"
                                                                title="Good"
                                                                data-value={3}
                                                            >
                                                                <i className="fas fa-star fa-fw text-sm text-[#ccc]" />
                                                            </li>
                                                            <li
                                                                className="star inline-block"
                                                                title="Excellent"
                                                                data-value={4}
                                                            >
                                                                <i className="fas fa-star fa-fw text-sm text-[#ccc]" />
                                                            </li>
                                                            <li
                                                                className="star inline-block"
                                                                title="WOW!!!"
                                                                data-value={5}
                                                            >
                                                                <i className="fas fa-star fa-fw text-sm text-[#ccc]" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="comment-form-comment mb-5 px-[10px] w-full">
                                                <label className="hidden" htmlFor="comment">
                                                    Comment
                                                </label>
                                                <textarea
                                                    rows={10}
                                                    name="comment"
                                                    placeholder="Type Review Here"
                                                    id="comment"
                                                    className="resize-none h-[120px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
                                                    defaultValue={""}
                                                />
                                            </p>
                                            <p className="form-submit mb-5 px-[10px] w-full">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-hover-2"
                                                    id="submit"
                                                >
                                                    Submit Now
                                                </button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-0 lg:pb-[100px] pb-[70px] relative bg-white overflow-hidden">
                <div className="container">
                    <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
                        <h2 className="font-lobster">Special Menu</h2>
                    </div>
                    <div className="swiper-btn-lr">
                        <div className="swiper portfolio-swiper">
                            <div className="swiper-wrapper p-b5">
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1] active">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic1.jpg"
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
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1] active">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic2.jpg"
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
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1] active">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic3.jpg"
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
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic9.jpg"
                                                alt=""
                                                className="rounded-full group-hover:animate-spin"
                                            />
                                        </div>
                                        <div className="mt-auto">
                                            <h4 className="mb-2.5">
                                                <a href="product-detail.html">Aloo Sticks</a>
                                            </h4>
                                            <p className="mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipiscing.
                                            </p>
                                            <h5 className="text-primary">$36.00</h5>
                                            <a
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic4.jpg"
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
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic5.jpg"
                                                alt=""
                                                className="rounded-full group-hover:animate-spin"
                                            />
                                        </div>
                                        <div className="mt-auto">
                                            <h4 className="mb-2.5">
                                                <a href="product-detail.html">Momose</a>
                                            </h4>
                                            <p className="mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipiscing.
                                            </p>
                                            <h5 className="text-primary">$25.00</h5>
                                            <a
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic6.jpg"
                                                alt=""
                                                className="rounded-full group-hover:animate-spin"
                                            />
                                        </div>
                                        <div className="mt-auto">
                                            <h4 className="mb-2.5">
                                                <a href="product-detail.html">Panner</a>
                                            </h4>
                                            <p className="mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipiscing.
                                            </p>
                                            <h5 className="text-primary">$60.00</h5>
                                            <a
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1]">
                                        <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                                            <img
                                                src="/assets/images/gallery/small/pic7.jpg"
                                                alt=""
                                                className="rounded-full group-hover:animate-spin"
                                            />
                                        </div>
                                        <div className="mt-auto">
                                            <h4 className="mb-2.5">
                                                <a href="product-detail.html">Macrony</a>
                                            </h4>
                                            <p className="mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipiscing.
                                            </p>
                                            <h5 className="text-primary">$22.00</h5>
                                            <a
                                                href="shop-cart.html"
                                                className="btn btn-primary mt-[18px] btn-hover-2"
                                            >
                                                Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Detail Section */}

            <section className="site-footer style-1 bg-black2 relative">
                <div className="xl:pt-[85px] md:pt-[80px] pt-[60px] lg:pb-10 md:pb-5 pb-0 relative z-[2]">
                    <div className="container">
                        <div className="row">
                            <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full px-[15px]">
                                <div className=" sm:mb-[30px] mb-2.5">
                                    <h5 className="footer-title lg:mb-[30px] mb-5 text-white lg:text-2xl text-xl uppercase font-semibold">
                                        Contact
                                    </h5>
                                    <ul>
                                        <li className="relative mb-[25px] pl-10">
                                            <i className="flaticon-placeholder absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]" />
                                            <p className="text-[#CCCCCC] tracking-wide leading-6">
                                                1247/Plot No. 39, 15th Phase, Colony, sankarankovil,Tenkasi
                                            </p>
                                        </li>
                                        <li className="relative mb-[25px] pl-10">
                                            <i className="flaticon-telephone absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]" />
                                            <p className="text-[#CCCCCC] tracking-wide leading-6">
                                                +91 987-654-3210
                                                <br />
                                                +91 123-456-7890
                                            </p>
                                        </li>
                                        <li className="relative mb-[25px] pl-10">
                                            <i className="flaticon-email-1 absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]" />
                                            <p className="text-[#CCCCCC] tracking-wide leading-6">
                                                info@example.com
                                                <br />
                                                info@example.com
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="xl:w-3/12 lg:w-2/12 sm:w-6/12 w-full px-[15px]">
                                <div className="widget widget_services mb-[30px]">
                                    <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                                        Our Links
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="index.html">
                                                <span>Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-us.html">
                                                <span>About Us</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="services.html">
                                                <span>Services</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="team.html">
                                                <span>Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-standard.html">
                                                <span>Blog</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full px-[15px]">
                                <div className="widget widget_services mb-[30px]">
                                    <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                                        OUR SERVICES
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="blog-open-gutenberg.html">
                                                <span>Strategy &amp; Research</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="services.html">
                                                <span>Fast Delivery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">
                                                <span>Seat Reservation</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-style-1.html">
                                                <span>Pickup In Store</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="our-menu-1.html">
                                                <span>Our Menu</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full px-[15px]	">
                                <div className="widget widget_services mb-[30px]">
                                    <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                                        Help Center
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="faq.html">
                                                <span>FAQ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-style-1.html">
                                                <span>Shop</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-style-2.html">
                                                <span>Category Filter</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="testimonial.html">
                                                <span>Testimonials</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">
                                                <span>Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-bottom relative py-5 border-t border-[#ffffff1a]">
                        <div className="row">
                            <div className="md:w-1/2 w-full md:text-left text-center px-[15px]">
                                <p className="text-sm text-[#999999]">
                                    Copyright 2024 All rights reserved.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full md:text-right text-center px-[15px] md:mt-0 mt-[15px]">
                                <span className="text-sm text-[#999999]">
                                    Crafted With{" "}
                                    <span className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px]" />{" "}
                                    by{" "}
                                    <a
                                        href="https://dexignzone.com/"
                                        target="_blank"
                                        className="text-primary"
                                    >
                                        DexignZone
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="/assets/images/background/pic5.png"
                    alt=""
                    className="bg1 bottom-[10px] left-0 absolute max-2xl:hidden animate-dz"
                />
                <img
                    src="/assets/images/background/pic6.png"
                    alt=""
                    className="top-[15px] right-[10px] absolute max-2xl:hidden animate-dz"
                />
            </section>

        </div>

    )
};