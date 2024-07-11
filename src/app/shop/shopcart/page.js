"use client"
import React from 'react';
import { useState } from 'react';
import { useRouter} from 'next/navigation';
export default function ShopCartes() {
    const router = useRouter()
    return (
        <div id="bg" class="box-border m-0 selection:bg-primary selection:text-white font-poppins">
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
                                                        href="shop-cart.html"
                                                        className="btn btn-primary mr-2 w-100 block btn-hover-1"
                                                    >
                                                        <span>View Cart</span>
                                                    </a>
                                                    <a
                                                        href="our-menu-1.html"
                                                        className="btn btn-outline w-100 block btn-hover-1"
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
                                                <a href="/shop/productdetail">Product Detail</a>
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


                <section className="bg-banner1 bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0  pt-[50px] lg:h-[450px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center">
                    <div className="container table h-full relative z-[1] text-center">
                        <div className="dz-bnr-inr-entry align-middle table-cell">
                            <h2 className="font-lobster text-white mb-5 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">
                                Shop Cart
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
                                        Shop Cart
                                    </li>
                                </ul>
                            </nav>
                            {/* Breadcrumb Row End */}
                        </div>
                    </div>
                </section>
                {/* Banner End */}
                {/* Search Section */}
                <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="lg:w-2/3 w-full px-[15px]">
                                <div className="flex justify-between items-center">
                                    <h5 className="lg:mb-[15px] mb-5">Related Products</h5>
                                    <a
                                        href="#offcanvasFilter"
                                        id="filter-button2"
                                        className="btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white"
                                    >
                                        Filter
                                    </a>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <img
                                            src="/assets/images/shop/pic1.jpg"
                                            alt="/"
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg
                                                    className="mr-[10px]"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width={16}
                                                        height={16}
                                                        stroke="#0F8A65"
                                                    />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="product-detail.html">Double Patty Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star" /> 4.5
                                            </div>
                                        </div>
                                        <div className="dz-body sm:flex block justify-between">
                                            <ul className="dz-meta flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    By{" "}
                                                    <span className="text-primary font-medium">
                                                        {" "}
                                                        Burger Farm
                                                    </span>
                                                </li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    <i className="flaticon-scooter mr-1 text-xl text-primary" />{" "}
                                                    30 min
                                                </li>
                                            </ul>
                                            <p className="mb-0">
                                                <span className="text-primary font-weight-500">$15.00</span>{" "}
                                                For a one
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <img
                                            src="/assets/images/shop/pic2.jpg"
                                            alt="/"
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg
                                                    className="mr-[10px]"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width={16}
                                                        height={16}
                                                        stroke="#0F8A65"
                                                    />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="product-detail.html">Chicken Patty Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star" /> 4.5
                                            </div>
                                        </div>
                                        <div className="dz-body sm:flex block justify-between">
                                            <ul className="dz-meta flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    By{" "}
                                                    <span className="text-primary font-medium">
                                                        {" "}
                                                        Burger Farm
                                                    </span>
                                                </li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    <i className="flaticon-scooter mr-1 text-xl text-primary" />{" "}
                                                    20 min
                                                </li>
                                            </ul>
                                            <p className="mb-0">
                                                <span className="text-primary font-weight-500">$10.00</span>{" "}
                                                For a one
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <img
                                            src="/assets/images/shop/pic3.jpg"
                                            alt="/"
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg
                                                    className="mr-[10px]"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width={16}
                                                        height={16}
                                                        stroke="#0F8A65"
                                                    />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="product-detail.html">Veg Cripsy Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star" /> 4.5
                                            </div>
                                        </div>
                                        <div className="dz-body sm:flex block justify-between">
                                            <ul className="dz-meta flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    By{" "}
                                                    <span className="text-primary font-medium">
                                                        {" "}
                                                        Burger Farm
                                                    </span>
                                                </li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    <i className="flaticon-scooter mr-1 text-xl text-primary" />{" "}
                                                    40 min
                                                </li>
                                            </ul>
                                            <p className="mb-0">
                                                <span className="text-primary font-weight-500">$25.00</span>{" "}
                                                For a one
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <img
                                            src="/assets/images/shop/pic4.jpg"
                                            alt="/"
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg
                                                    className="mr-[10px]"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width={16}
                                                        height={16}
                                                        stroke="#0F8A65"
                                                    />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="product-detail.html">Aloo Tikki Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star" /> 4.5
                                            </div>
                                        </div>
                                        <div className="dz-body sm:flex block justify-between">
                                            <ul className="dz-meta flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    By{" "}
                                                    <span className="text-primary font-medium">
                                                        {" "}
                                                        Burger Farm
                                                    </span>
                                                </li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    <i className="flaticon-scooter mr-1 text-xl text-primary" />{" "}
                                                    15 min
                                                </li>
                                            </ul>
                                            <p className="mb-0">
                                                <span className="text-primary font-weight-500">$05.00</span>{" "}
                                                For a one
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <img
                                            src="/assets/images/shop/pic1.jpg"
                                            alt="/"
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg
                                                    className="mr-[10px]"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width={16}
                                                        height={16}
                                                        stroke="#0F8A65"
                                                    />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="product-detail.html">Pure Veg Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star" /> 4.5
                                            </div>
                                        </div>
                                        <div className="dz-body sm:flex block justify-between">
                                            <ul className="dz-meta flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    By{" "}
                                                    <span className="text-primary font-medium">
                                                        {" "}
                                                        Burger Farm
                                                    </span>
                                                </li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    <i className="flaticon-scooter mr-1 text-xl text-primary" />{" "}
                                                    55 min
                                                </li>
                                            </ul>
                                            <p className="mb-0">
                                                <span className="text-primary font-weight-500">$35.00</span>{" "}
                                                For a one
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <img
                                            src="/assets/images/shop/pic2.jpg"
                                            alt="/"
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg
                                                    className="mr-[10px]"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width={16}
                                                        height={16}
                                                        stroke="#0F8A65"
                                                    />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="product-detail.html">Chicken Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star" /> 4.5
                                            </div>
                                        </div>
                                        <div className="dz-body sm:flex block justify-between">
                                            <ul className="dz-meta flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    By{" "}
                                                    <span className="text-primary font-medium">
                                                        {" "}
                                                        Burger Farm
                                                    </span>
                                                </li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272]">
                                                    <i className="flaticon-scooter mr-1 text-xl text-primary" />{" "}
                                                    25 min
                                                </li>
                                            </ul>
                                            <p className="mb-0">
                                                <span className="text-primary font-weight-500">$45.00</span>{" "}
                                                For a one
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full px-[15px] mb-[30px]">
                                <aside className="lg:sticky pl-5 max-xl:pl-0 pb-[1px] top-[100px]">
                                    <div className="shop-filter style-1">
                                        <div className="flex justify-between">
                                            <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                                                <h5 className="">
                                                    Cart <span className="text-primary">(03)</span>
                                                </h5>
                                            </div>
                                            <a
                                                href="javascript:void(0);"
                                                className="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block"
                                            >
                                                <i className="la la-close font-black" />
                                            </a>
                                        </div>
                                        <div className="cart-item flex items-center border-b border-[#2222221a] pb-[15px] mb-[15px]">
                                            <div className="dz-media w-[80px] min-w-[80px] h-[80px] overflow-hidden rounded-[10px] relative">
                                                <img src="/assets/images/shop/pic1.jpg" alt="/" />
                                            </div>
                                            <div className="dz-content ml-[15px] w-full">
                                                <div className="dz-head mb-[10px] flex items-center justify-between">
                                                    <h6 className="text-base">Double Patty Burger</h6>
                                                    <a href="javascript:void(0);" className="text-black2">
                                                        <i className="fa-solid fa-xmark text-danger" />
                                                    </a>
                                                </div>
                                                <div className="dz-body flex items-center justify-between">
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
                                                    <h5 className="price text-primary mb-0">$14.20</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-item flex items-center border-b border-[#2222221a] pb-[15px] mb-[15px]">
                                            <div className="dz-media w-[80px] min-w-[80px] h-[80px] overflow-hidden rounded-[10px] relative">
                                                <img src="/assets/images/shop/pic2.jpg" alt="/" />
                                            </div>
                                            <div className="dz-content ml-[15px] w-full">
                                                <div className="dz-head mb-[10px] flex items-center justify-between">
                                                    <h6 className="text-base">All Combo</h6>
                                                    <a href="javascript:void(0);" className="text-black2">
                                                        <i className="fa-solid fa-xmark text-danger" />
                                                    </a>
                                                </div>
                                                <div className="dz-body flex items-center justify-between">
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
                                                    <h5 className="price text-primary mb-0">$50.20</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-item flex items-center border-b border-[#2222221a] pb-[15px] mb-[15px]">
                                            <div className="dz-media w-[80px] min-w-[80px] h-[80px] overflow-hidden rounded-[10px] relative">
                                                <img src="/assets/images/shop/pic3.jpg" alt="/" />
                                            </div>
                                            <div className="dz-content ml-[15px] w-full">
                                                <div className="dz-head mb-[10px] flex items-center justify-between">
                                                    <h6 className="text-base">Veg And crispy Burger</h6>
                                                    <a href="javascript:void(0);" className="text-black2">
                                                        <i className="fa-solid fa-xmark text-danger" />
                                                    </a>
                                                </div>
                                                <div className="dz-body flex items-center justify-between">
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
                                                    <h5 className="price text-primary mb-0">$25.20</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-detail mt-10">
                                            <h6 className="mb-2">Bill Details</h6>
                                            <table className="mb-[25px] w-full border-collapse">
                                                <tbody>
                                                    <tr>
                                                        <td className="py-[6px] font-medium text-sm leading-[21px] text-bodycolor">
                                                            Item Total
                                                        </td>
                                                        <td className="price text-primary font-semibold text-base leading-6 text-right">
                                                            $55.00
                                                        </td>
                                                    </tr>
                                                    <tr className="charges border-b border-dashed border-[#22222233]">
                                                        <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor">
                                                            Delivery Charges
                                                        </td>
                                                        <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-base leading-6 text-right">
                                                            $5.00
                                                        </td>
                                                    </tr>
                                                    <tr className="tax border-b-2 border-[#22222233]">
                                                        <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor">
                                                            Govt Taxes &amp; Other Charges
                                                        </td>
                                                        <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-base leading-6 text-right">
                                                            $3.50
                                                        </td>
                                                    </tr>
                                                    <tr className="total">
                                                        <td className="py-[6px] font-medium text-sm leading-[21px] text-bodycolor">
                                                            <h6>Total</h6>
                                                        </td>
                                                        <td className="price text-primary font-semibold text-base leading-6 text-right">
                                                            $63.50
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a
                                                href="shop-checkout.html"
                                                className="btn btn-primary block text-center btn-md w-full btn-hover-1"
                                            >
                                                <span className="z-[2] relative block">
                                                    Order Now{" "}
                                                    <i className="fa-solid fa-arrow-right ml-[10px]" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Search Section */}
                {/* Footer */}
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
                                                    1247/Plot No. 39, 15th Phase, Colony, Sankarankovil, Tenkasi-627755
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
                {/* Footer End */}
            </div>
        </div>

    )
}
