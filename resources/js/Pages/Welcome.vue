<script setup>
import { Head } from "@inertiajs/vue3";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Esensinesia" />

    <div
        class="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent"
    >
        <div class="container">
            <div class="relative -mx-4 flex items-center justify-between">
                <div class="w-60 max-w-full px-4">
                    <a href="index.html" class="navbar-logo block w-full py-5">
                        <img
                            src="img/logo/logo-white.svg"
                            alt="logo"
                            class="header-logo w-full"
                        />
                    </a>
                </div>
                <div class="flex w-full items-center justify-between px-4">
                    <div>
                        <button
                            id="navbarToggler"
                            class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                        >
                            <span
                                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                            ></span>
                            <span
                                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                            ></span>
                            <span
                                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                            ></span>
                        </button>
                        <nav
                            id="navbarCollapse"
                            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
                        >
                            <ul class="blcok lg:flex 2xl:ml-20">
                                <li class="group relative">
                                    <a
                                        href="#"
                                        class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="group relative">
                                    <a
                                        href="#about"
                                        class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                    >
                                        About
                                    </a>
                                </li>
                                <li class="group relative">
                                    <a
                                        href="#pricing"
                                        class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li class="group relative">
                                    <a
                                        href="#team"
                                        class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                    >
                                        Team
                                    </a>
                                </li>
                                <li class="group relative">
                                    <a
                                        href="#contact"
                                        class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li class="group relative">
                                    <a
                                        href="blog-grids.html"
                                        class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li class="submenu-item group relative">
                                    <a
                                        href="javascript:void(0)"
                                        class="relative mx-8 flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                    >
                                        Pages

                                        <svg
                                            class="ml-2 fill-current"
                                            width="16"
                                            height="20"
                                            viewBox="0 0 16 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z"
                                            />
                                        </svg>
                                    </a>
                                    <div
                                        class="submenu relative left-0 top-full hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full"
                                    >
                                        <a
                                            href="about.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            About Page
                                        </a>
                                        <a
                                            href="pricing.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            Pricing Page
                                        </a>
                                        <a
                                            href="contact.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            Contact Page
                                        </a>
                                        <a
                                            href="blog-grids.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            Blog Grid Page
                                        </a>
                                        <a
                                            href="blog-details.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            Blog Details Page
                                        </a>
                                        <a
                                            href="signup.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            Sign Up Page
                                        </a>
                                        <a
                                            href="signin.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            Sign In Page
                                        </a>
                                        <a
                                            href="404.html"
                                            class="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                        >
                                            404 Page
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center justify-end pr-16 lg:pr-0">
                        <label
                            for="themeSwitcher"
                            class="inline-flex cursor-pointer items-center"
                            aria-label="themeSwitcher"
                            name="themeSwitcher"
                        >
                            <input
                                type="checkbox"
                                name="themeSwitcher"
                                id="themeSwitcher"
                                class="sr-only"
                            />
                            <span class="block text-white dark:hidden">
                                <svg
                                    class="fill-current"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.3125 1.50001C12.675 1.31251 12.0375 1.16251 11.3625 1.05001C10.875 0.975006 10.35 1.23751 10.1625 1.68751C9.93751 2.13751 10.05 2.70001 10.425 3.00001C13.0875 5.47501 14.0625 9.11251 12.975 12.525C11.775 16.3125 8.25001 18.975 4.16251 19.0875C3.63751 19.0875 3.22501 19.425 3.07501 19.9125C2.92501 20.4 3.15001 20.925 3.56251 21.1875C4.50001 21.75 5.43751 22.2 6.37501 22.5C7.46251 22.8375 8.58751 22.9875 9.71251 22.9875C11.625 22.9875 13.5 22.5 15.1875 21.5625C17.85 20.1 19.725 17.7375 20.55 14.8875C22.1625 9.26251 18.975 3.37501 13.3125 1.50001ZM18.9375 14.4C18.2625 16.8375 16.6125 18.825 14.4 20.0625C12.075 21.3375 9.41251 21.6 6.90001 20.85C6.63751 20.775 6.33751 20.6625 6.07501 20.55C10.05 19.7625 13.35 16.9125 14.5875 13.0125C15.675 9.56251 15 5.92501 12.7875 3.07501C17.5875 4.68751 20.2875 9.67501 18.9375 14.4Z"
                                    />
                                </svg>
                            </span>
                            <span class="hidden text-white dark:block">
                                <svg
                                    class="fill-current"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_2172_3070)">
                                        <path
                                            d="M12 6.89999C9.18752 6.89999 6.90002 9.18749 6.90002 12C6.90002 14.8125 9.18752 17.1 12 17.1C14.8125 17.1 17.1 14.8125 17.1 12C17.1 9.18749 14.8125 6.89999 12 6.89999ZM12 15.4125C10.125 15.4125 8.58752 13.875 8.58752 12C8.58752 10.125 10.125 8.58749 12 8.58749C13.875 8.58749 15.4125 10.125 15.4125 12C15.4125 13.875 13.875 15.4125 12 15.4125Z"
                                        />
                                        <path
                                            d="M12 4.2375C12.45 4.2375 12.8625 3.8625 12.8625 3.375V1.5C12.8625 1.05 12.4875 0.637497 12 0.637497C11.55 0.637497 11.1375 1.0125 11.1375 1.5V3.4125C11.175 3.8625 11.55 4.2375 12 4.2375Z"
                                        />
                                        <path
                                            d="M12 19.7625C11.55 19.7625 11.1375 20.1375 11.1375 20.625V22.5C11.1375 22.95 11.5125 23.3625 12 23.3625C12.45 23.3625 12.8625 22.9875 12.8625 22.5V20.5875C12.8625 20.1375 12.45 19.7625 12 19.7625Z"
                                        />
                                        <path
                                            d="M18.1125 6.74999C18.3375 6.74999 18.5625 6.67499 18.7125 6.48749L19.9125 5.28749C20.25 4.94999 20.25 4.42499 19.9125 4.08749C19.575 3.74999 19.05 3.74999 18.7125 4.08749L17.5125 5.28749C17.175 5.62499 17.175 6.14999 17.5125 6.48749C17.6625 6.67499 17.8875 6.74999 18.1125 6.74999Z"
                                        />
                                        <path
                                            d="M5.32501 17.5125L4.12501 18.675C3.78751 19.0125 3.78751 19.5375 4.12501 19.875C4.27501 20.025 4.50001 20.1375 4.72501 20.1375C4.95001 20.1375 5.17501 20.0625 5.32501 19.875L6.52501 18.675C6.86251 18.3375 6.86251 17.8125 6.52501 17.475C6.18751 17.175 5.62501 17.175 5.32501 17.5125Z"
                                        />
                                        <path
                                            d="M22.5 11.175H20.5875C20.1375 11.175 19.725 11.55 19.725 12.0375C19.725 12.4875 20.1 12.9 20.5875 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z"
                                        />
                                        <path
                                            d="M4.23751 12C4.23751 11.55 3.86251 11.1375 3.37501 11.1375H1.50001C1.05001 11.1375 0.637512 11.5125 0.637512 12C0.637512 12.45 1.01251 12.8625 1.50001 12.8625H3.41251C3.86251 12.8625 4.23751 12.45 4.23751 12Z"
                                        />
                                        <path
                                            d="M18.675 17.5125C18.3375 17.175 17.8125 17.175 17.475 17.5125C17.1375 17.85 17.1375 18.375 17.475 18.7125L18.675 19.9125C18.825 20.0625 19.05 20.175 19.275 20.175C19.5 20.175 19.725 20.1 19.875 19.9125C20.2125 19.575 20.2125 19.05 19.875 18.7125L18.675 17.5125Z"
                                        />
                                        <path
                                            d="M5.32501 4.125C4.98751 3.7875 4.46251 3.7875 4.12501 4.125C3.78751 4.4625 3.78751 4.9875 4.12501 5.325L5.32501 6.525C5.47501 6.675 5.70001 6.7875 5.92501 6.7875C6.15001 6.7875 6.37501 6.7125 6.52501 6.525C6.86251 6.1875 6.86251 5.6625 6.52501 5.325L5.32501 4.125Z"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2172_3070">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </label>
                        <div class="hidden sm:flex">
                            <a
                                href="signin.html"
                                class="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                            >
                                Sign In
                            </a>
                            <a
                                href="signup.html"
                                class="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ====== Navbar Section End -->

    <!-- ====== Hero Section Start -->
    <div
        id="home"
        class="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
        <div class="container">
            <div class="-mx-4 flex flex-wrap items-center">
                <div class="w-full px-4">
                    <div
                        class="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                        data-wow-delay=".2s"
                    >
                        <h1
                            class="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
                        >
                            Open-Source Web Template for SaaS, Startup, Apps,
                            and More
                        </h1>
                        <p
                            class="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
                        >
                            Multidisciplinary Web Template Built with Your
                            Favourite Technology - HTML Bootstrap, Tailwind and
                            React NextJS.
                        </p>
                        <ul
                            class="mb-10 flex flex-wrap items-center justify-center gap-5"
                        >
                            <li>
                                <a
                                    href="https://links.tailgrids.com/play-download"
                                    class="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                                >
                                    Download Now
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/tailgrids/play-tailwind"
                                    target="_blank"
                                    class="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                                >
                                    <svg
                                        class="fill-current"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_2005_10818)">
                                            <path
                                                d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2005_10818">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Star on Github
                                </a>
                            </li>
                        </ul>
                        <div>
                            <p
                                class="mb-4 text-center text-base font-medium text-white"
                            >
                                Built with latest technology
                            </p>
                            <div
                                class="wow fadeInUp flex items-center justify-center gap-4 text-center"
                                data-wow-delay=".3s"
                            >
                                <a
                                    href="https://github.com/uideck/play-bootstrap/"
                                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                                    target="_blank"
                                >
                                    <svg
                                        class="fill-current"
                                        width="41"
                                        height="32"
                                        viewBox="0 0 41 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_2005_10788"
                                            style="mask-type: luminance"
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="41"
                                            height="32"
                                        >
                                            <path
                                                d="M0.521393 0.0454102H40.5214V31.9174H0.521393V0.0454102Z"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_2005_10788)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M8.82951 0.048584C6.54719 0.048584 4.85835 2.04626 4.93395 4.21266C5.00655 6.29398 4.91223 8.98962 4.23366 11.1879C3.55264 13.3923 2.4017 14.7893 0.521393 14.9686V16.993C2.4017 17.1727 3.55264 18.5689 4.23358 20.7737C4.91223 22.9719 5.00647 25.6676 4.93387 27.7489C4.85827 29.915 6.54711 31.913 8.82983 31.913H32.2163C34.4987 31.913 36.1872 29.9153 36.1116 27.7489C36.039 25.6676 36.1333 22.9719 36.8119 20.7737C37.4929 18.5689 38.641 17.1721 40.5214 16.993V14.9686C38.6411 14.7889 37.493 13.3927 36.8119 11.1879C36.1332 8.9899 36.039 6.29398 36.1116 4.21266C36.1872 2.04654 34.4987 0.048584 32.2163 0.048584H8.82951ZM27.6401 19.6632C27.6401 22.6463 25.415 24.4554 21.7224 24.4554H15.4366C15.2568 24.4554 15.0844 24.3839 14.9572 24.2568C14.8301 24.1297 14.7587 23.9572 14.7587 23.7774V8.18422C14.7587 8.00442 14.8301 7.83194 14.9572 7.70482C15.0844 7.57766 15.2568 7.50626 15.4366 7.50626H21.6866C24.7656 7.50626 26.7863 9.17406 26.7863 11.7347C26.7863 13.5319 25.427 15.1409 23.6952 15.4228V15.5165C26.0526 15.7751 27.6401 17.408 27.6401 19.6632ZM21.037 9.65538H17.453V14.7179H20.4716C22.8052 14.7179 24.092 13.7782 24.092 12.0986C24.0917 10.5245 22.9855 9.65538 21.037 9.65538ZM17.453 16.7265V22.3055H21.1689C23.5986 22.3055 24.8856 21.3306 24.8856 19.4984C24.8856 17.6663 23.5625 16.7263 21.0126 16.7263L17.453 16.7265Z"
                                            />
                                        </g>
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/TailGrids/play-tailwind/"
                                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                                    target="_blank"
                                >
                                    <svg
                                        class="fill-current"
                                        width="41"
                                        height="26"
                                        viewBox="0 0 41 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_2005_10783"
                                            style="mask-type: luminance"
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="41"
                                            height="26"
                                        >
                                            <path
                                                d="M0.521393 0.949463H40.5214V25.0135H0.521393V0.949463Z"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_2005_10783)">
                                            <path
                                                d="M20.5214 0.980713C15.1882 0.980713 11.8546 3.64743 10.5214 8.98071C12.5214 6.31399 14.8546 5.31399 17.5214 5.98071C19.043 6.36103 20.1302 7.46495 21.3342 8.68667C23.295 10.6771 25.5642 12.9807 30.5214 12.9807C35.8546 12.9807 39.1882 10.314 40.5214 4.98071C38.5214 7.64743 36.1882 8.64743 33.5214 7.98071C31.9998 7.60039 30.9126 6.49651 29.7086 5.27479C27.7478 3.28431 25.4786 0.980713 20.5214 0.980713ZM10.5214 12.9807C5.18819 12.9807 1.85459 15.6474 0.521393 20.9807C2.52139 18.314 4.85459 17.314 7.52139 17.9807C9.04299 18.361 10.1302 19.465 11.3342 20.6867C13.295 22.6771 15.5642 24.9807 20.5214 24.9807C25.8546 24.9807 29.1882 22.314 30.5214 16.9807C28.5214 19.6474 26.1882 20.6474 23.5214 19.9807C21.9998 19.6004 20.9126 18.4965 19.7086 17.2748C17.7478 15.2843 15.4786 12.9807 10.5214 12.9807Z"
                                            />
                                        </g>
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/NextJSTemplates/play-nextjs"
                                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                                    target="_blank"
                                >
                                    <svg
                                        class="fill-current"
                                        width="41"
                                        height="36"
                                        viewBox="0 0 41 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M40.5214 17.9856C40.5214 15.3358 37.203 12.8245 32.1154 11.2673C33.2894 6.08177 32.7678 1.95622 30.4686 0.63539C29.9386 0.325566 29.3186 0.178806 28.6422 0.178806V1.99699C29.017 1.99699 29.3186 2.07037 29.5714 2.20897C30.6802 2.84493 31.1614 5.26645 30.7862 8.38101C30.6966 9.14741 30.5498 9.95457 30.3706 10.7781C28.7726 10.3867 27.0278 10.0851 25.1934 9.88937C24.0926 8.38101 22.951 7.01125 21.8014 5.81273C24.4594 3.34229 26.9542 1.98883 28.6502 1.98883V0.170654C26.4082 0.170654 23.473 1.7687 20.505 4.54081C17.5374 1.78501 14.6022 0.203266 12.3598 0.203266V2.02145C14.0478 2.02145 16.5506 3.36673 19.2086 5.82089C18.0674 7.01941 16.9258 8.38101 15.8414 9.88937C13.9986 10.0851 12.2538 10.3867 10.6558 10.7862C10.4686 9.97089 10.3298 9.18001 10.2318 8.42177C9.84859 5.30721 10.3218 2.88569 11.4222 2.24157C11.667 2.09483 11.985 2.0296 12.3598 2.0296V0.211422C11.675 0.211422 11.0554 0.358178 10.5174 0.668006C8.22619 1.98883 7.71259 6.10626 8.89499 11.2754C3.82339 12.8409 0.521393 15.3439 0.521393 17.9856C0.521393 20.6354 3.8398 23.1466 8.9274 24.7039C7.7534 29.8894 8.27499 34.0149 10.5742 35.3358C11.1042 35.6456 11.7242 35.7923 12.409 35.7923C14.651 35.7923 17.5862 34.1943 20.5542 31.4222C23.5218 34.178 26.457 35.7597 28.699 35.7597C29.3842 35.7597 30.0038 35.613 30.5418 35.3031C32.833 33.9823 33.3466 29.8649 32.1642 24.6957C37.2194 23.1385 40.5214 20.6273 40.5214 17.9856ZM29.9058 12.5473C29.6042 13.5991 29.229 14.6835 28.805 15.7679C28.471 15.1156 28.1202 14.4634 27.737 13.8111C27.3622 13.1588 26.9626 12.5229 26.563 11.9032C27.7206 12.0745 28.8378 12.2864 29.9058 12.5473ZM26.1718 21.2306C25.5358 22.3313 24.8834 23.3749 24.2066 24.3451C22.9918 24.4511 21.7606 24.5082 20.5214 24.5082C19.2902 24.5082 18.059 24.4511 16.8526 24.3533C16.1758 23.3831 15.5154 22.3476 14.8794 21.2551C14.2598 20.187 13.697 19.1026 13.1834 18.01C13.689 16.9175 14.2598 15.8249 14.871 14.7569C15.507 13.6562 16.1594 12.6126 16.8362 11.6423C18.051 11.5363 19.2822 11.4793 20.5214 11.4793C21.7526 11.4793 22.9838 11.5363 24.1902 11.6342C24.867 12.6044 25.5274 13.6399 26.1634 14.7324C26.783 15.8005 27.3458 16.8849 27.8594 17.9774C27.3458 19.07 26.783 20.1625 26.1718 21.2306ZM28.805 20.1707C29.2454 21.2632 29.6206 22.3557 29.9302 23.4157C28.8622 23.6766 27.737 23.8967 26.571 24.0679C26.9706 23.4401 27.3702 22.796 27.7454 22.1356C28.1202 21.4833 28.471 20.8229 28.805 20.1707ZM20.5378 28.8702C19.7794 28.0875 19.021 27.2151 18.271 26.2611C19.005 26.2938 19.755 26.3182 20.5134 26.3182C21.2798 26.3182 22.0378 26.3019 22.7798 26.2611C22.0462 27.2151 21.2878 28.0875 20.5378 28.8702ZM14.4718 24.0679C13.3138 23.8967 12.197 23.6847 11.129 23.4238C11.4306 22.3721 11.8054 21.2877 12.2294 20.2033C12.5638 20.8555 12.9142 21.5078 13.2974 22.1601C13.6806 22.8123 14.0722 23.4483 14.4718 24.0679ZM20.497 7.10093C21.255 7.88365 22.0134 8.75605 22.7634 9.70998C22.0298 9.67737 21.2798 9.65293 20.5214 9.65293C19.755 9.65293 18.9966 9.66922 18.2546 9.70998C18.9886 8.75605 19.747 7.88365 20.497 7.10093ZM14.4634 11.9032C14.0642 12.531 13.6646 13.1751 13.2894 13.8356C12.9142 14.4878 12.5638 15.1401 12.2294 15.7923C11.7894 14.6998 11.4142 13.6073 11.1042 12.5473C12.1726 12.2946 13.2974 12.0745 14.4634 11.9032ZM7.08459 22.1111C4.19859 20.88 2.33139 19.2657 2.33139 17.9856C2.33139 16.7055 4.19859 15.083 7.08459 13.86C7.78579 13.5583 8.55219 13.2893 9.34339 13.0365C9.80779 14.6346 10.4194 16.2979 11.1778 18.0019C10.4278 19.6978 9.82419 21.3529 9.36779 22.9428C8.56059 22.69 7.79419 22.4128 7.08459 22.1111ZM11.4714 33.7622C10.3626 33.1262 9.8814 30.7047 10.2566 27.5901C10.3462 26.8237 10.493 26.0166 10.6722 25.1931C12.2702 25.5844 14.015 25.8861 15.8494 26.0818C16.9502 27.5901 18.0918 28.9599 19.2414 30.1584C16.5834 32.6289 14.0886 33.9823 12.3926 33.9823C12.0258 33.9742 11.7158 33.9008 11.4714 33.7622ZM30.811 27.5494C31.1942 30.6639 30.721 33.0855 29.6206 33.7296C29.3758 33.8763 29.0578 33.9415 28.683 33.9415C26.995 33.9415 24.4922 32.5963 21.8342 30.1421C22.9754 28.9436 24.117 27.582 25.2014 26.0736C27.0442 25.8779 28.789 25.5763 30.387 25.1768C30.5742 26.0003 30.721 26.7911 30.811 27.5494ZM33.9498 22.1111C33.2486 22.4128 32.4822 22.6819 31.6914 22.9346C31.2266 21.3366 30.615 19.6733 29.857 17.9693C30.607 16.2734 31.2102 14.6183 31.667 13.0284C32.4742 13.2811 33.2406 13.5583 33.9582 13.86C36.8442 15.0912 38.7114 16.7055 38.7114 17.9856C38.7034 19.2657 36.8362 20.8881 33.9498 22.1111Z"
                                        />
                                        <path
                                            d="M20.5134 21.7133C22.5714 21.7133 24.2394 20.0451 24.2394 17.9873C24.2394 15.9294 22.5714 14.2612 20.5134 14.2612C18.4558 14.2612 16.7874 15.9294 16.7874 17.9873C16.7874 20.0451 18.4558 21.7133 20.5134 21.7133Z"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/TailGrids/play-astro/"
                                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                                    target="_blank"
                                >
                                    <svg
                                        class="mt-0.5 fill-current"
                                        width="30"
                                        height="38"
                                        viewBox="0 0 30 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_2412_2096)">
                                            <path
                                                d="M9.54022 32.0145C7.86872 30.4866 7.38074 27.2761 8.07717 24.9502C9.28468 26.4166 10.9578 26.8812 12.6908 27.1434C15.3662 27.548 17.9937 27.3967 20.479 26.1739C20.7633 26.0338 21.0261 25.8477 21.3368 25.6591C21.57 26.3357 21.6306 27.0187 21.5492 27.7139C21.3511 29.407 20.5086 30.7148 19.1685 31.7062C18.6326 32.1027 18.0656 32.4572 17.5121 32.8311C15.8119 33.9803 15.3519 35.3278 15.9907 37.2877C16.0059 37.3358 16.0195 37.3835 16.0538 37.5C15.1857 37.1114 14.5516 36.5456 14.0684 35.8018C13.5581 35.017 13.3153 34.1486 13.3026 33.209C13.2962 32.7518 13.2962 32.2905 13.2347 31.8397C13.0845 30.7407 12.5686 30.2486 11.5967 30.2203C10.5992 30.1912 9.81018 30.8078 9.60094 31.779C9.58497 31.8535 9.5618 31.9271 9.53863 32.0137L9.54022 32.0145Z"
                                            />
                                            <path
                                                d="M0 24.5627C0 24.5627 4.94967 22.1515 9.91317 22.1515L13.6555 10.5697C13.7956 10.0096 14.2046 9.62894 14.6665 9.62894C15.1283 9.62894 15.5374 10.0096 15.6775 10.5697L19.4198 22.1515C25.2984 22.1515 29.333 24.5627 29.333 24.5627C29.333 24.5627 20.9256 1.65922 20.9092 1.61326C20.6679 0.936116 20.2605 0.5 19.7113 0.5H9.62256C9.07337 0.5 8.68245 0.936116 8.42473 1.61326C8.40654 1.65835 0 24.5627 0 24.5627Z"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2412_2096">
                                                <rect
                                                    width="29.3925"
                                                    height="37"
                                                    transform="translate(0 0.5)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/NextJSTemplates/play-nextjs"
                                    class="text-white/60 duration-300 ease-in-out hover:text-white"
                                    target="_blank"
                                >
                                    <svg
                                        class="fill-current"
                                        width="41"
                                        height="40"
                                        viewBox="0 0 41 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.1914 0.0107542C19.1054 0.0185659 18.8322 0.0459068 18.5862 0.0654364C12.911 0.577104 7.59499 3.63931 4.22819 8.34588C2.35339 10.9628 1.15419 13.9313 0.700995 17.0755C0.540995 18.173 0.521393 18.4972 0.521393 19.9854C0.521393 21.4735 0.540995 21.7977 0.700995 22.8952C1.78699 30.3984 7.12619 36.7025 14.3678 39.0382C15.6646 39.4561 17.0314 39.7412 18.5862 39.9131C19.1914 39.9795 21.8082 39.9795 22.4138 39.9131C25.097 39.6163 27.3702 38.9523 29.6122 37.8078C29.9562 37.6321 30.0226 37.5852 29.9754 37.5462C29.9442 37.5227 28.4798 35.5581 26.7218 33.1833L23.527 28.8673L19.5234 22.9421C17.3206 19.6846 15.5082 17.0208 15.4926 17.0208C15.477 17.0169 15.4614 19.6495 15.4534 22.864C15.4418 28.4924 15.4378 28.7189 15.3678 28.8517C15.2662 29.0431 15.1878 29.1212 15.0238 29.2071C14.899 29.2696 14.7894 29.2813 14.1998 29.2813H13.5242L13.3442 29.1681C13.227 29.0938 13.1414 28.9962 13.0826 28.8829L13.0006 28.7072L13.0086 20.8759L13.0202 13.0407L13.1414 12.8884C13.2038 12.8064 13.3366 12.7009 13.4302 12.6502C13.5906 12.572 13.653 12.5642 14.3286 12.5642C15.1254 12.5642 15.2582 12.5955 15.4654 12.822C15.5238 12.8845 17.6914 16.1498 20.285 20.083C22.8786 24.0162 26.425 29.3868 28.167 32.0232L31.331 36.8158L31.491 36.7103C32.909 35.7885 34.4086 34.4761 35.5962 33.1091C38.123 30.207 39.7518 26.6683 40.2986 22.8952C40.459 21.7977 40.4786 21.4735 40.4786 19.9854C40.4786 18.4972 40.459 18.173 40.2986 17.0755C39.213 9.57232 33.8738 3.26825 26.6322 0.93254C25.355 0.518516 23.9958 0.233389 22.4722 0.0615304C22.0974 0.0224718 19.5158 -0.0204928 19.1914 0.0107542ZM27.3702 12.0955C27.5578 12.1892 27.7102 12.3689 27.765 12.5564C27.7962 12.658 27.8038 14.8296 27.7962 19.7237L27.7842 26.7464L26.5462 24.8482L25.3042 22.9499V17.845C25.3042 14.5445 25.3198 12.6892 25.343 12.5994C25.4058 12.3806 25.5422 12.2088 25.7298 12.1072C25.8902 12.0252 25.9486 12.0174 26.5618 12.0174C27.1398 12.0174 27.2414 12.0252 27.3702 12.0955Z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full px-4">
                    <div
                        class="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                        data-wow-delay=".25s"
                    >
                        <div class="mt-16">
                            <img
                                src="img/news/img02.jpg"
                                alt="hero"
                                class="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                                @error="handleError"
                            />
                        </div>
                        <div class="absolute -left-9 bottom-0 z-[-1]">
                            <svg
                                width="134"
                                height="106"
                                viewBox="0 0 134 106"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="1.66667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 31 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 103 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 132 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="74.6673"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 74.6673)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 31 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 103 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 103 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 132 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 132 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 31 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 103 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 103 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 132 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 132 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 31 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 31 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 103 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 132 1.66707)"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div class="absolute -right-6 -top-6 z-[-1]">
                            <svg
                                width="134"
                                height="106"
                                viewBox="0 0 134 106"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="1.66667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 31 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 103 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 132 104)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 89.3333)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 89.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="74.6673"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 74.6673)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 31 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 31.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 103 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 103 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 132 74.6668)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="31.0001"
                                    r="1.66667"
                                    transform="rotate(-90 132 31.0001)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 31 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 103 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 103 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 132 60.0003)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="16.3336"
                                    r="1.66667"
                                    transform="rotate(-90 132 16.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 31 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="31"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 31 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="45.3336"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 45.3336)"
                                    fill="white"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 1.66683)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="117.667"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="103"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 103 1.66707)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 45.3338)"
                                    fill="white"
                                />
                                <circle
                                    cx="132"
                                    cy="1.66707"
                                    r="1.66667"
                                    transform="rotate(-90 132 1.66707)"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ====== Hero Section End -->

    <!-- ====== Features Section Start -->

    <!-- ====== Features Section End -->

    <!-- ====== About Section Start -->
    <section
        id="about"
        class="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
        <div class="container">
            <div class="wow fadeInUp" data-wow-delay=".2s">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4 lg:w-1/2">
                        <div class="mb-12 max-w-[540px] lg:mb-0">
                            <h2
                                class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]"
                            >
                                Brilliant Toolkit to Build Nextgen Website
                                Faster.
                            </h2>
                            <p
                                class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6"
                            >
                                The main ‘thrust' is to focus on educating
                                attendees on how to best protect highly
                                vulnerable business applications with
                                interactive panel discussions and roundtables
                                led by subject matter experts.
                                <br />
                                <br />
                                The main ‘thrust' is to focus on educating
                                attendees on how to best protect highly
                                vulnerable business applications with
                                interactive panel.
                            </p>

                            <a
                                href="javascript:void(0)"
                                class="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                            >
                                Know More
                            </a>
                        </div>
                    </div>

                    <div class="w-full px-4 lg:w-1/2">
                        <div
                            class="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4"
                        >
                            <div
                                class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4"
                            >
                                <div
                                    class="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]"
                                >
                                    <img
                                        src="img/news/img02.jpg"
                                        alt="Image"
                                        class="h-full w-full object-cover object-center"
                                        @error="handleError"
                                    />
                                </div>
                            </div>

                            <div
                                class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4"
                            >
                                <div
                                    class="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]"
                                >
                                    <img
                                        src="img/news/imdg02.jpg"
                                        alt="Image"
                                        @error="handleError"
                                        class="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div
                                    class="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8"
                                >
                                    <div>
                                        <span
                                            class="block text-5xl font-extrabold text-white"
                                        >
                                            09
                                        </span>
                                        <span
                                            class="block text-base font-semibold text-white"
                                        >
                                            We have
                                        </span>
                                        <span
                                            class="block text-base font-medium text-white text-opacity-70"
                                        >
                                            Years of experience
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            class="absolute left-0 top-0 -z-10"
                                        >
                                            <svg
                                                width="106"
                                                height="144"
                                                viewBox="0 0 106 144"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    opacity="0.1"
                                                    x="-67"
                                                    y="47.127"
                                                    width="113.378"
                                                    height="131.304"
                                                    transform="rotate(-42.8643 -67 47.127)"
                                                    fill="url(#paint0_linear_1416_214)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1416_214"
                                                        x1="-10.3111"
                                                        y1="47.127"
                                                        x2="-10.3111"
                                                        y2="178.431"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            stop-color="white"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stop-color="white"
                                                            stop-opacity="0"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span
                                            class="absolute right-0 top-0 -z-10"
                                        >
                                            <svg
                                                width="130"
                                                height="97"
                                                viewBox="0 0 130 97"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    opacity="0.1"
                                                    x="0.86792"
                                                    y="-6.67725"
                                                    width="155.563"
                                                    height="140.614"
                                                    transform="rotate(-42.8643 0.86792 -6.67725)"
                                                    fill="url(#paint0_linear_1416_215)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1416_215"
                                                        x1="78.6495"
                                                        y1="-6.67725"
                                                        x2="78.6495"
                                                        y2="133.937"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            stop-color="white"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stop-color="white"
                                                            stop-opacity="0"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span
                                            class="absolute bottom-0 right-0 -z-10"
                                        >
                                            <svg
                                                width="175"
                                                height="104"
                                                viewBox="0 0 175 104"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    opacity="0.1"
                                                    x="175.011"
                                                    y="108.611"
                                                    width="101.246"
                                                    height="148.179"
                                                    transform="rotate(137.136 175.011 108.611)"
                                                    fill="url(#paint0_linear_1416_216)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1416_216"
                                                        x1="225.634"
                                                        y1="108.611"
                                                        x2="225.634"
                                                        y2="256.79"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            stop-color="white"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stop-color="white"
                                                            stop-opacity="0"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ====== About Section End -->

    <!-- ====== CTA Section Start -->
    <section
        class="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]"
    >
        <div class="container mx-auto">
            <div class="relative overflow-hidden">
                <div class="-mx-4 flex flex-wrap items-stretch">
                    <div class="w-full px-4">
                        <div class="mx-auto max-w-[570px] text-center">
                            <h2
                                class="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]"
                            >
                                <span>What Are You Looking For?</span>
                                <span
                                    class="text-3xl font-normal md:text-[40px]"
                                >
                                    Get Started Now
                                </span>
                            </h2>
                            <p
                                class="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white"
                            >
                                There are many variations of passages of Lorem
                                Ipsum but the majority have suffered in some
                                form.
                            </p>
                            <a
                                href="javascript:void(0)"
                                class="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                            >
                                Start using Play
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <span class="absolute left-0 top-0">
                <svg
                    width="495"
                    height="470"
                    viewBox="0 0 495 470"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="55"
                        cy="442"
                        r="138"
                        stroke="white"
                        stroke-opacity="0.04"
                        stroke-width="50"
                    />
                    <circle
                        cx="446"
                        r="39"
                        stroke="white"
                        stroke-opacity="0.04"
                        stroke-width="20"
                    />
                    <path
                        d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                        stroke="white"
                        stroke-opacity="0.08"
                        stroke-width="12"
                    />
                </svg>
            </span>
            <span class="absolute bottom-0 right-0">
                <svg
                    width="493"
                    height="470"
                    viewBox="0 0 493 470"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="462"
                        cy="5"
                        r="138"
                        stroke="white"
                        stroke-opacity="0.04"
                        stroke-width="50"
                    />
                    <circle
                        cx="49"
                        cy="470"
                        r="39"
                        stroke="white"
                        stroke-opacity="0.04"
                        stroke-width="20"
                    />
                    <path
                        d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                        stroke="white"
                        stroke-opacity="0.06"
                        stroke-width="13"
                    />
                </svg>
            </span>
        </div>
    </section>
    <!-- ====== CTA Section End -->

    <!-- ====== Pricing Section Start -->
    <section
        id="pricing"
        class="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="mx-auto mb-[60px] max-w-[510px] text-center">
                        <span
                            class="mb-2 block text-lg font-semibold text-primary"
                        >
                            Pricing Table
                        </span>
                        <h2
                            class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
                        >
                            Awesome Pricing Plan
                        </h2>
                        <p class="text-base text-body-color dark:text-dark-6">
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p>
                    </div>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                        class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                    >
                        <span
                            class="mb-5 block text-xl font-medium text-dark dark:text-white"
                        >
                            Starter
                        </span>
                        <h2
                            class="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]"
                        >
                            <span class="text-xl font-medium">$</span>
                            <span class="-ml-1 -tracking-[2px]">25.00</span>
                            <span
                                class="text-base font-normal text-body-color dark:text-dark-6"
                            >
                                Per Month
                            </span>
                        </h2>
                        <div class="mb-[50px]">
                            <h5
                                class="mb-5 text-lg font-medium text-dark dark:text-white"
                            >
                                Features
                            </h5>
                            <div class="flex flex-col gap-[14px]">
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Up to 1 User
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    All UI components
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Lifetime access
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Free updates
                                </p>
                            </div>
                        </div>
                        <a
                            href="javascript:void(0)"
                            class="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                        >
                            Purchase Now
                        </a>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                        class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                    >
                        <p
                            class="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white"
                        >
                            Recommended
                        </p>
                        <span
                            class="mb-5 block text-xl font-medium text-dark dark:text-white"
                        >
                            Basic
                        </span>
                        <h2
                            class="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]"
                        >
                            <span class="text-xl font-medium">$</span>
                            <span class="-ml-1 -tracking-[2px]">59.00</span>
                            <span
                                class="text-base font-normal text-body-color dark:text-dark-6"
                            >
                                Per Month
                            </span>
                        </h2>
                        <div class="mb-[50px]">
                            <h5
                                class="mb-5 text-lg font-medium text-dark dark:text-white"
                            >
                                Features
                            </h5>
                            <div class="flex flex-col gap-[14px]">
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Up to 1 User
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    All UI components
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Lifetime access
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Free updates
                                </p>
                            </div>
                        </div>
                        <a
                            href="javascript:void(0)"
                            class="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                        >
                            Purchase Now
                        </a>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                        class="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                    >
                        <span
                            class="mb-5 block text-xl font-medium text-dark dark:text-white"
                        >
                            Premium
                        </span>
                        <h2
                            class="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]"
                        >
                            <span class="text-xl font-medium">$</span>
                            <span class="-ml-1 -tracking-[2px]">99.00</span>
                            <span
                                class="text-base font-normal text-body-color dark:text-dark-6"
                            >
                                Per Month
                            </span>
                        </h2>
                        <div class="mb-[50px]">
                            <h5
                                class="mb-5 text-lg font-medium text-dark dark:text-white"
                            >
                                Features
                            </h5>
                            <div class="flex flex-col gap-[14px]">
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Up to 1 User
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    All UI components
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Lifetime access
                                </p>
                                <p
                                    class="text-base text-body-color dark:text-dark-6"
                                >
                                    Free updates
                                </p>
                            </div>
                        </div>
                        <a
                            href="javascript:void(0)"
                            class="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                        >
                            Purchase Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ====== Pricing Section End -->

    <!-- ====== FAQ Section Start -->
    <section
        class="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]"
    >
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="mx-auto mb-[60px] max-w-[520px] text-center">
                        <span
                            class="mb-2 block text-lg font-semibold text-primary"
                        >
                            FAQ
                        </span>
                        <h2
                            class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                        >
                            Any Questions? Look Here
                        </h2>
                        <p
                            class="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6"
                        >
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p>
                    </div>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 lg:w-1/2">
                    <div class="mb-12 flex lg:mb-[70px]">
                        <div
                            class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 34 34"
                                class="fill-current"
                            >
                                <path
                                    d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"
                                />
                                <path
                                    d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"
                                />
                                <path
                                    d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"
                                />
                            </svg>
                        </div>
                        <div class="w-full">
                            <h3
                                class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                Is TailGrids Well-documented?
                            </h3>
                            <p
                                class="text-base text-body-color dark:text-dark-6"
                            >
                                It takes 2-3 weeks to get your first blog post
                                ready. That includes the in-depth research &
                                creation of your monthly content ui/ux strategy
                                that we do writing your first blog post.
                            </p>
                        </div>
                    </div>
                    <div class="mb-12 flex lg:mb-[70px]">
                        <div
                            class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 34 34"
                                class="fill-current"
                            >
                                <path
                                    d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"
                                />
                                <path
                                    d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"
                                />
                                <path
                                    d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"
                                />
                            </svg>
                        </div>
                        <div class="w-full">
                            <h3
                                class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                Is TailGrids Well-documented?
                            </h3>
                            <p
                                class="text-base text-body-color dark:text-dark-6"
                            >
                                It takes 2-3 weeks to get your first blog post
                                ready. That includes the in-depth research &
                                creation of your monthly content ui/ux strategy
                                that we do writing your first blog post.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 lg:w-1/2">
                    <div class="mb-12 flex lg:mb-[70px]">
                        <div
                            class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 34 34"
                                class="fill-current"
                            >
                                <path
                                    d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"
                                />
                                <path
                                    d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"
                                />
                                <path
                                    d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"
                                />
                            </svg>
                        </div>
                        <div class="w-full">
                            <h3
                                class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                Is TailGrids Well-documented?
                            </h3>
                            <p
                                class="text-base text-body-color dark:text-dark-6"
                            >
                                It takes 2-3 weeks to get your first blog post
                                ready. That includes the in-depth research &
                                creation of your monthly content ui/ux strategy
                                that we do writing your first blog post.
                            </p>
                        </div>
                    </div>
                    <div class="mb-12 flex lg:mb-[70px]">
                        <div
                            class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 34 34"
                                class="fill-current"
                            >
                                <path
                                    d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"
                                />
                                <path
                                    d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"
                                />
                                <path
                                    d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"
                                />
                            </svg>
                        </div>
                        <div class="w-full">
                            <h3
                                class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                Is TailGrids Well-documented?
                            </h3>
                            <p
                                class="text-base text-body-color dark:text-dark-6"
                            >
                                It takes 2-3 weeks to get your first blog post
                                ready. That includes the in-depth research &
                                creation of your monthly content ui/ux strategy
                                that we do writing your first blog post.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <span class="absolute left-4 top-4 -z-[1]">
                <svg
                    width="48"
                    height="134"
                    viewBox="0 0 48 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="45.6673"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 45.6673 132)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 45.6673 117.333)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 45.6673 102.667)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 88.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="73.3335"
                        r="1.66667"
                        transform="rotate(180 45.6673 73.3335)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 45.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 16.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 59.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 45.6673 30.6668)"
                        fill="#13C296"
                    />
                    <circle
                        cx="45.6673"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 45.6673 1.66683)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.0013 132)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.0013 117.333)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.0013 102.667)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 88.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="73.3335"
                        r="1.66667"
                        transform="rotate(180 31.0013 73.3335)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 45.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 16.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 59.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 31.0013 30.6668)"
                        fill="#13C296"
                    />
                    <circle
                        cx="31.0013"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 31.0013 1.66683)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 16.3333 132)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 16.3333 117.333)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 16.3333 102.667)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 88.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="73.3335"
                        r="1.66667"
                        transform="rotate(180 16.3333 73.3335)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 45.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 16.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 59.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 16.3333 30.6668)"
                        fill="#13C296"
                    />
                    <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 16.3333 1.66683)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 1.66732 132)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 1.66732 117.333)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 1.66732 102.667)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 88.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="73.3335"
                        r="1.66667"
                        transform="rotate(180 1.66732 73.3335)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 45.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 16.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 59.0001)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 1.66732 30.6668)"
                        fill="#13C296"
                    />
                    <circle
                        cx="1.66732"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 1.66732 1.66683)"
                        fill="#13C296"
                    />
                </svg>
            </span>
            <span class="absolute bottom-4 right-4 -z-[1]">
                <svg
                    width="48"
                    height="134"
                    viewBox="0 0 48 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="45.6673"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 45.6673 132)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 45.6673 117.333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 45.6673 102.667)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 88.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 45.6673 73.3333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 45.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 16.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 59.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 45.6673 30.6668)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="45.6673"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 45.6673 1.66683)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0006"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.0006 132)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0006"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.0006 117.333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0006"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.0006 102.667)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0006"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 31.0006 88.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0008"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.0008 73.3333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0008"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 31.0008 45.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0008"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 31.0008 16.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0008"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 31.0008 59.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0008"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 31.0008 30.6668)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="31.0008"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 31.0008 1.66683)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3341"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 16.3341 132)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3341"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 16.3341 117.333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3341"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 16.3341 102.667)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3341"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 16.3341 88.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3338"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 16.3338 73.3333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3338"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 16.3338 45.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3338"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 16.3338 16.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3338"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 16.3338 59.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3338"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 16.3338 30.6668)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="16.3338"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 16.3338 1.66683)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 1.66732 132)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 1.66732 117.333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 1.66732 102.667)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 88.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 1.66732 73.3333)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 45.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 16.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 59.0001)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 1.66732 30.6668)"
                        fill="#3758F9"
                    />
                    <circle
                        cx="1.66732"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 1.66732 1.66683)"
                        fill="#3758F9"
                    />
                </svg>
            </span>
        </div>
    </section>
    <!-- ====== FAQ Section End -->

    <!-- ====== Team Section Start -->
    <section
        id="team"
        class="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="mx-auto mb-[60px] max-w-[485px] text-center">
                        <span
                            class="mb-2 block text-lg font-semibold text-primary"
                        >
                            Our Team Members
                        </span>
                        <h2
                            class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                        >
                            Our Creative Team
                        </h2>
                        <p class="text-base text-body-color dark:text-dark-6">
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p>
                    </div>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div
                        class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none"
                    >
                        <div
                            class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]"
                        >
                            <img
                                src="#team/team-01.png"
                                alt="team image"
                                class="h-[120px] w-[120px] rounded-full"
                            />
                            <span
                                class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"
                            ></span>
                            <span
                                class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100"
                            >
                                <svg
                                    width="55"
                                    height="53"
                                    viewBox="0 0 55 53"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5038 3.1009C23.3601 3.1009 24.0543 2.40674 24.0543 1.55045C24.0543 0.69416 23.3601 0 22.5038 0C21.6475 0 20.9534 0.69416 20.9534 1.55045C20.9534 2.40674 21.6475 3.1009 22.5038 3.1009Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.4958 3.1009C33.3521 3.1009 34.0463 2.40674 34.0463 1.55045C34.0463 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9454 0.69416 30.9454 1.55045C30.9454 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.4875 3.1009C43.3438 3.1009 44.038 2.40674 44.038 1.55045C44.038 0.69416 43.3438 0 42.4875 0C41.6312 0 40.9371 0.69416 40.9371 1.55045C40.9371 2.40674 41.6312 3.1009 42.4875 3.1009Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52.4795 3.1009C53.3358 3.1009 54.03 2.40674 54.03 1.55045C54.03 0.69416 53.3358 0 52.4795 0C51.6233 0 50.9291 0.69416 50.9291 1.55045C50.9291 2.40674 51.6233 3.1009 52.4795 3.1009Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.52045 13.0804C3.37674 13.0804 4.0709 12.3862 4.0709 11.5299C4.0709 10.6737 3.37674 9.97949 2.52045 9.97949C1.66416 9.97949 0.970001 10.6737 0.970001 11.5299C0.970001 12.3862 1.66416 13.0804 2.52045 13.0804Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5118 13.0804C13.3681 13.0804 14.0622 12.3862 14.0622 11.5299C14.0622 10.6737 13.3681 9.97949 12.5118 9.97949C11.6555 9.97949 10.9613 10.6737 10.9613 11.5299C10.9613 12.3862 11.6555 13.0804 12.5118 13.0804Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5038 13.0804C23.3601 13.0804 24.0543 12.3862 24.0543 11.5299C24.0543 10.6737 23.3601 9.97949 22.5038 9.97949C21.6475 9.97949 20.9534 10.6737 20.9534 11.5299C20.9534 12.3862 21.6475 13.0804 22.5038 13.0804Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.4958 13.0804C33.3521 13.0804 34.0463 12.3862 34.0463 11.5299C34.0463 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9454 10.6737 30.9454 11.5299C30.9454 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.4875 13.0804C43.3438 13.0804 44.038 12.3862 44.038 11.5299C44.038 10.6737 43.3438 9.97949 42.4875 9.97949C41.6312 9.97949 40.9371 10.6737 40.9371 11.5299C40.9371 12.3862 41.6312 13.0804 42.4875 13.0804Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52.4795 13.0804C53.3358 13.0804 54.03 12.3862 54.03 11.5299C54.03 10.6737 53.3358 9.97949 52.4795 9.97949C51.6233 9.97949 50.9291 10.6737 50.9291 11.5299C50.9291 12.3862 51.6233 13.0804 52.4795 13.0804Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.52045 23.0604C3.37674 23.0604 4.0709 22.3662 4.0709 21.5099C4.0709 20.6536 3.37674 19.9595 2.52045 19.9595C1.66416 19.9595 0.970001 20.6536 0.970001 21.5099C0.970001 22.3662 1.66416 23.0604 2.52045 23.0604Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5118 23.0604C13.3681 23.0604 14.0622 22.3662 14.0622 21.5099C14.0622 20.6536 13.3681 19.9595 12.5118 19.9595C11.6555 19.9595 10.9613 20.6536 10.9613 21.5099C10.9613 22.3662 11.6555 23.0604 12.5118 23.0604Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5038 23.0604C23.3601 23.0604 24.0543 22.3662 24.0543 21.5099C24.0543 20.6536 23.3601 19.9595 22.5038 19.9595C21.6475 19.9595 20.9534 20.6536 20.9534 21.5099C20.9534 22.3662 21.6475 23.0604 22.5038 23.0604Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.4958 23.0604C33.3521 23.0604 34.0463 22.3662 34.0463 21.5099C34.0463 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9454 20.6536 30.9454 21.5099C30.9454 22.3662 31.6395 23.0604 32.4958 23.0604Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.4875 23.0604C43.3438 23.0604 44.038 22.3662 44.038 21.5099C44.038 20.6536 43.3438 19.9595 42.4875 19.9595C41.6312 19.9595 40.9371 20.6536 40.9371 21.5099C40.9371 22.3662 41.6312 23.0604 42.4875 23.0604Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52.4795 23.0604C53.3358 23.0604 54.03 22.3662 54.03 21.5099C54.03 20.6536 53.3358 19.9595 52.4795 19.9595C51.6233 19.9595 50.9291 20.6536 50.9291 21.5099C50.9291 22.3662 51.6233 23.0604 52.4795 23.0604Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.52045 33.0404C3.37674 33.0404 4.0709 32.3462 4.0709 31.4899C4.0709 30.6336 3.37674 29.9395 2.52045 29.9395C1.66416 29.9395 0.970001 30.6336 0.970001 31.4899C0.970001 32.3462 1.66416 33.0404 2.52045 33.0404Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5118 33.0404C13.3681 33.0404 14.0622 32.3462 14.0622 31.4899C14.0622 30.6336 13.3681 29.9395 12.5118 29.9395C11.6555 29.9395 10.9613 30.6336 10.9613 31.4899C10.9613 32.3462 11.6555 33.0404 12.5118 33.0404Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5038 33.0404C23.3601 33.0404 24.0543 32.3462 24.0543 31.4899C24.0543 30.6336 23.3601 29.9395 22.5038 29.9395C21.6475 29.9395 20.9534 30.6336 20.9534 31.4899C20.9534 32.3462 21.6475 33.0404 22.5038 33.0404Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.4958 33.0404C33.3521 33.0404 34.0463 32.3462 34.0463 31.4899C34.0463 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9454 30.6336 30.9454 31.4899C30.9454 32.3462 31.6395 33.0404 32.4958 33.0404Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.4875 33.0404C43.3438 33.0404 44.038 32.3462 44.038 31.4899C44.038 30.6336 43.3438 29.9395 42.4875 29.9395C41.6312 29.9395 40.9371 30.6336 40.9371 31.4899C40.9371 32.3462 41.6312 33.0404 42.4875 33.0404Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52.4795 33.0404C53.3358 33.0404 54.03 32.3462 54.03 31.4899C54.03 30.6336 53.3358 29.9395 52.4795 29.9395C51.6233 29.9395 50.9291 30.6336 50.9291 31.4899C50.9291 32.3462 51.6233 33.0404 52.4795 33.0404Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.52045 43.0203C3.37674 43.0203 4.0709 42.3262 4.0709 41.4699C4.0709 40.6136 3.37674 39.9194 2.52045 39.9194C1.66416 39.9194 0.970001 40.6136 0.970001 41.4699C0.970001 42.3262 1.66416 43.0203 2.52045 43.0203Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5118 43.0203C13.3681 43.0203 14.0622 42.3262 14.0622 41.4699C14.0622 40.6136 13.3681 39.9194 12.5118 39.9194C11.6555 39.9194 10.9613 40.6136 10.9613 41.4699C10.9613 42.3262 11.6555 43.0203 12.5118 43.0203Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5038 43.0203C23.3601 43.0203 24.0543 42.3262 24.0543 41.4699C24.0543 40.6136 23.3601 39.9194 22.5038 39.9194C21.6475 39.9194 20.9534 40.6136 20.9534 41.4699C20.9534 42.3262 21.6475 43.0203 22.5038 43.0203Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.4958 43.0203C33.3521 43.0203 34.0463 42.3262 34.0463 41.4699C34.0463 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9454 40.6136 30.9454 41.4699C30.9454 42.3262 31.6395 43.0203 32.4958 43.0203Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.4875 43.0203C43.3438 43.0203 44.038 42.3262 44.038 41.4699C44.038 40.6136 43.3438 39.9194 42.4875 39.9194C41.6312 39.9194 40.9371 40.6136 40.9371 41.4699C40.9371 42.3262 41.6312 43.0203 42.4875 43.0203Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52.4795 43.0203C53.3358 43.0203 54.03 42.3262 54.03 41.4699C54.03 40.6136 53.3358 39.9194 52.4795 39.9194C51.6233 39.9194 50.9291 40.6136 50.9291 41.4699C50.9291 42.3262 51.6233 43.0203 52.4795 43.0203Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.52045 53.0001C3.37674 53.0001 4.0709 52.3059 4.0709 51.4496C4.0709 50.5933 3.37674 49.8992 2.52045 49.8992C1.66416 49.8992 0.970001 50.5933 0.970001 51.4496C0.970001 52.3059 1.66416 53.0001 2.52045 53.0001Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5118 53.0001C13.3681 53.0001 14.0622 52.3059 14.0622 51.4496C14.0622 50.5933 13.3681 49.8992 12.5118 49.8992C11.6555 49.8992 10.9613 50.5933 10.9613 51.4496C10.9613 52.3059 11.6555 53.0001 12.5118 53.0001Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5038 53.0001C23.3601 53.0001 24.0543 52.3059 24.0543 51.4496C24.0543 50.5933 23.3601 49.8992 22.5038 49.8992C21.6475 49.8992 20.9534 50.5933 20.9534 51.4496C20.9534 52.3059 21.6475 53.0001 22.5038 53.0001Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.4958 53.0001C33.3521 53.0001 34.0463 52.3059 34.0463 51.4496C34.0463 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9454 50.5933 30.9454 51.4496C30.9454 52.3059 31.6395 53.0001 32.4958 53.0001Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.4875 53.0001C43.3438 53.0001 44.038 52.3059 44.038 51.4496C44.038 50.5933 43.3438 49.8992 42.4875 49.8992C41.6312 49.8992 40.9371 50.5933 40.9371 51.4496C40.9371 52.3059 41.6312 53.0001 42.4875 53.0001Z"
                                        fill="#3758F9"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52.4795 53.0001C53.3358 53.0001 54.03 52.3059 54.03 51.4496C54.03 50.5933 53.3358 49.8992 52.4795 49.8992C51.6233 49.8992 50.9291 50.5933 50.9291 51.4496C50.9291 52.3059 51.6233 53.0001 52.4795 53.0001Z"
                                        fill="#3758F9"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="text-center">
                            <h4
                                class="mb-1 text-lg font-semibold text-dark dark:text-white"
                            >
                                Melissa Tatcher
                            </h4>
                            <p
                                class="mb-5 text-sm text-body-color dark:text-dark-6"
                            >
                                Marketing Expert
                            </p>
                            <div class="flex items-center justify-center gap-5">
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                            fill=""
                                        />
                                        <path
                                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                            fill=""
                                        />
                                        <path
                                            d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div
                        class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none"
                    >
                        <div
                            class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]"
                        >
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png"
                                alt="team image"
                                class="h-[120px] w-[120px] rounded-full"
                            />
                            <span
                                class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"
                            ></span>
                            <span
                                class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100"
                            >
                                <svg
                                    width="45"
                                    height="53"
                                    viewBox="0 0 45 53"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="text-center">
                            <h4
                                class="mb-1 text-lg font-semibold text-dark dark:text-white"
                            >
                                Stuard Ferrel
                            </h4>
                            <p
                                class="mb-5 text-sm text-body-color dark:text-dark-6"
                            >
                                Digital Marketer
                            </p>
                            <div class="flex items-center justify-center gap-5">
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                            fill=""
                                        />
                                        <path
                                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                            fill=""
                                        />
                                        <path
                                            d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div
                        class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none"
                    >
                        <div
                            class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]"
                        >
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png"
                                alt="team image"
                                class="h-[120px] w-[120px] rounded-full"
                            />
                            <span
                                class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"
                            ></span>
                            <span
                                class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100"
                            >
                                <svg
                                    width="45"
                                    height="53"
                                    viewBox="0 0 45 53"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="text-center">
                            <h4
                                class="mb-1 text-lg font-semibold text-dark dark:text-white"
                            >
                                Eva Hudson
                            </h4>
                            <p
                                class="mb-5 text-sm text-body-color dark:text-dark-6"
                            >
                                Creative Designer
                            </p>
                            <div class="flex items-center justify-center gap-5">
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                            fill=""
                                        />
                                        <path
                                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                            fill=""
                                        />
                                        <path
                                            d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div
                        class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none"
                    >
                        <div
                            class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]"
                        >
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png"
                                alt="team image"
                                class="h-[120px] w-[120px] rounded-full"
                            />
                            <span
                                class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"
                            ></span>
                            <span
                                class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100"
                            >
                                <svg
                                    width="45"
                                    height="53"
                                    viewBox="0 0 45 53"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                                        fill="#3056D3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="text-center">
                            <h4
                                class="mb-1 text-lg font-semibold text-dark dark:text-white"
                            >
                                Jackie Sanders
                            </h4>
                            <p
                                class="mb-5 text-sm text-body-color dark:text-dark-6"
                            >
                                SEO Expert
                            </p>
                            <div class="flex items-center justify-center gap-5">
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="text-dark-6 hover:text-primary"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                    >
                                        <path
                                            d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                            fill=""
                                        />
                                        <path
                                            d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                            fill=""
                                        />
                                        <path
                                            d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ====== Team Section End -->
</template>
<script>
export default {
    methods: {
        handleError(event) {
            // Fungsi ini akan dipanggil ketika gambar tidak ditemukan
            event.target.src = "img/image-12x.jpg"; // Ganti dengan path gambar default Anda
        },
    },
};
</script>
<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
