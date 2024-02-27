<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Esensinesia" />

    <!-- <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
    >
      <div
      class="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent"
    > -->

    <!-- <div
            v-if="canLogin"
            class="sm:fixed sm:top-0 sm:right-0 p-6 text-right"
        >
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Dashboard</Link
            >

            <template v-else>
                <Link
                    :href="route('login')"
                    class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    Log in
                </Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    Register
                </Link>
            </template>
        </div> -->

    <!-- <div class="max-w-7xl mx-auto p-6 lg:p-8">
            <div class="flex justify-center">
                <svg
                    viewBox="0 0 62 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-16 w-auto bg-gray-100 dark:bg-gray-900"
                >
                    <path
                        d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
                        fill="#FF2D20"
                    />
                </svg>
            </div>

            <div class="mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <a
                        href="https://laravel.com/docs"
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    class="w-7 h-7 stroke-red-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                            </div>

                            <h2
                                class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
                            >
                                Documentation
                            </h2>

                            <p
                                class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                            >
                                Kota Baru punyanya bu Mega
                            </p>
                        </div>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </a>

                    <a
                        href="https://laracasts.com"
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    class="w-7 h-7 stroke-red-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                                    />
                                </svg>
                            </div>

                            <h2
                                class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
                            >
                                Laracasts
                            </h2>

                            <p
                                class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                            >
                                Laracasts offers thousands of video tutorials on
                                Laravel, PHP, and JavaScript development. Check
                                them out, see for yourself, and massively level
                                up your development skills in the process.
                            </p>
                        </div>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </a>

                    <a
                        href="https://laravel-news.com"
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    class="w-7 h-7 stroke-red-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                    />
                                </svg>
                            </div>

                            <h2
                                class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
                            >
                                Laravel News
                            </h2>

                            <p
                                class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                            >
                                Laravel News is a community driven portal and
                                newsletter aggregating all of the latest and
                                most important news in the Laravel ecosystem,
                                including new package releases and tutorials.
                            </p>
                        </div>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </a>

                    <div
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    class="w-7 h-7 stroke-red-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                                    />
                                </svg>
                            </div>

                            <h2
                                class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
                            >
                                Vibrant Ecosystem
                            </h2>

                            <p
                                class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                            >
                                Laravel's robust library of first-party tools
                                and libraries, such as
                                <a
                                    href="https://forge.laravel.com"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Forge</a
                                >,
                                <a
                                    href="https://vapor.laravel.com"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Vapor</a
                                >,
                                <a
                                    href="https://nova.laravel.com"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Nova</a
                                >, and
                                <a
                                    href="https://envoyer.io"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Envoyer</a
                                >
                                help you take your projects to the next level.
                                Pair them with powerful open source libraries
                                like
                                <a
                                    href="https://laravel.com/docs/billing"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Cashier</a
                                >,
                                <a
                                    href="https://laravel.com/docs/dusk"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Dusk</a
                                >,
                                <a
                                    href="https://laravel.com/docs/broadcasting"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Echo</a
                                >,
                                <a
                                    href="https://laravel.com/docs/horizon"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Horizon</a
                                >,
                                <a
                                    href="https://laravel.com/docs/sanctum"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Sanctum</a
                                >,
                                <a
                                    href="https://laravel.com/docs/telescope"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Telescope</a
                                >, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="flex justify-center mt-16 px-6 sm:items-center sm:justify-between"
            >
                <div
                    class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left"
                >
                    <div class="flex items-center gap-4">
                        <a
                            href="https://github.com/sponsors/taylorotwell"
                            class="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                class="-mt-px mr-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                            Sponsor
                        </a>
                    </div>
                </div>

                <div
                    class="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0"
                >
                    Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
                </div>
            </div>
        </div> -->
    <!-- </div> -->
    <div
        class="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent"
    >
        <div class="container">
            <div class="relative -mx-4 flex items-center justify-between">
                <div class="w-60 max-w-full px-4">
                    <a href="index.html" class="navbar-logo block w-full py-5">
                        <img
                            src="assets/images/logo/logo-white.svg"
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
                                        href="#home"
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
    <section class="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div class="container">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div
                        class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]"
                    >
                        <span
                            class="mb-2 block text-lg font-semibold text-primary"
                        >
                            Features
                        </span>
                        <h2
                            class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
                        >
                            Main Features Of Play
                        </h2>
                        <p class="text-base text-body-color dark:text-dark-6">
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p>
                    </div>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 md:w-1/2 lg:w-1/4">
                    <div class="wow fadeInUp group mb-12" data-wow-delay=".1s">
                        <div
                            class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
                        >
                            <span
                                class="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                            ></span>
                            <svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.5801 8.30514H27.9926C28.6113 7.85514 29.1176 7.34889 29.3426 6.73014C29.6801 5.88639 29.6801 4.48014 27.9363 2.84889C26.0801 1.04889 24.3926 1.04889 23.3238 1.33014C20.9051 1.94889 19.2738 4.76139 18.3738 6.78639C17.4738 4.76139 15.8426 2.00514 13.4238 1.33014C12.3551 1.04889 10.6676 1.10514 8.81133 2.84889C7.06758 4.53639 7.12383 5.88639 7.40508 6.73014C7.63008 7.34889 8.13633 7.85514 8.75508 8.30514H5.71758C4.08633 8.30514 2.73633 9.65514 2.73633 11.2864V14.9989C2.73633 16.5739 4.03008 17.8676 5.60508 17.9239V31.6489C5.60508 33.5614 7.18008 35.1926 9.14883 35.1926H27.5426C29.4551 35.1926 31.0863 33.6176 31.0863 31.6489V17.8676C32.4926 17.6426 33.5613 16.4051 33.5613 14.9426V11.2301C33.5613 9.59889 32.2113 8.30514 30.5801 8.30514ZM23.9426 3.69264C23.9988 3.69264 24.1676 3.63639 24.3363 3.63639C24.7301 3.63639 25.3488 3.80514 26.1926 4.59264C26.8676 5.21139 27.0363 5.66139 26.9801 5.77389C26.6988 6.56139 23.8863 7.40514 20.6801 7.74264C21.4676 5.99889 22.6488 4.03014 23.9426 3.69264ZM10.4988 4.64889C11.3426 3.86139 11.9613 3.69264 12.3551 3.69264C12.5238 3.69264 12.6363 3.74889 12.7488 3.74889C14.0426 4.08639 15.2801 5.99889 16.0676 7.79889C12.8613 7.46139 10.0488 6.61764 9.76758 5.83014C9.71133 5.66139 9.88008 5.26764 10.4988 4.64889ZM5.26758 14.9426V11.2301C5.26758 11.0051 5.43633 10.7801 5.71758 10.7801H30.5801C30.8051 10.7801 31.0301 10.9489 31.0301 11.2301V14.9426C31.0301 15.1676 30.8613 15.3926 30.5801 15.3926H5.71758C5.49258 15.3926 5.26758 15.2239 5.26758 14.9426ZM27.5426 32.6614H9.14883C8.58633 32.6614 8.13633 32.2114 8.13633 31.6489V17.9239H28.4988V31.6489C28.5551 32.2114 28.1051 32.6614 27.5426 32.6614Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h4
                            class="mb-3 text-xl font-bold text-dark dark:text-white"
                        >
                            Free and Open-Source
                        </h4>
                        <p
                            class="mb-8 text-body-color dark:text-dark-6 lg:mb-9"
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            industry.
                        </p>
                        <a
                            href="javascript:void(0)"
                            class="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4">
                    <div class="wow fadeInUp group mb-12" data-wow-delay=".15s">
                        <div
                            class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
                        >
                            <span
                                class="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                            ></span>
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.5998 1.01245H5.39981C2.98105 1.01245 0.956055 2.9812 0.956055 5.4562V30.6562C0.956055 33.075 2.9248 35.0437 5.39981 35.0437H30.5998C33.0186 35.0437 34.9873 33.075 34.9873 30.6562V5.39995C34.9873 2.9812 33.0186 1.01245 30.5998 1.01245ZM5.39981 3.48745H30.5998C31.6123 3.48745 32.4561 4.3312 32.4561 5.39995V11.1937H3.4873V5.39995C3.4873 4.38745 4.38731 3.48745 5.39981 3.48745ZM3.4873 30.6V13.725H23.0623V32.5125H5.39981C4.38731 32.5125 3.4873 31.6125 3.4873 30.6ZM30.5998 32.5125H25.5373V13.725H32.4561V30.6C32.5123 31.6125 31.6123 32.5125 30.5998 32.5125Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h4
                            class="mb-3 text-xl font-bold text-dark dark:text-white"
                        >
                            Multipurpose Template
                        </h4>
                        <p
                            class="mb-8 text-body-color dark:text-dark-6 lg:mb-9"
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            industry.
                        </p>
                        <a
                            href="javascript:void(0)"
                            class="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4">
                    <div class="wow fadeInUp group mb-12" data-wow-delay=".2s">
                        <div
                            class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
                        >
                            <span
                                class="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                            ></span>
                            <svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M33.5613 21.4677L31.3675 20.1177C30.805 19.7239 30.0175 19.9489 29.6238 20.5114C29.23 21.1302 29.455 21.8614 30.0175 22.2552L31.48 23.2114L18.1488 31.5927L4.76127 23.2114L6.22377 22.2552C6.84252 21.8614 7.01127 21.0739 6.61752 20.5114C6.22377 19.8927 5.43627 19.7239 4.87377 20.1177L2.68002 21.4677C2.11752 21.8614 1.72377 22.4802 1.72377 23.1552C1.72377 23.8302 2.06127 24.5052 2.68002 24.8427L17.08 33.8989C17.4175 34.1239 17.755 34.1802 18.1488 34.1802C18.5425 34.1802 18.88 34.0677 19.2175 33.8989L33.5613 24.8989C34.1238 24.5052 34.5175 23.8864 34.5175 23.2114C34.5175 22.5364 34.18 21.8614 33.5613 21.4677Z"
                                    fill="white"
                                />
                                <path
                                    d="M20.1175 20.4552L18.1488 21.6364L16.18 20.3989C15.5613 20.0052 14.83 20.2302 14.4363 20.7927C14.0425 21.4114 14.2675 22.1427 14.83 22.5364L17.4738 24.1677C17.6988 24.2802 17.9238 24.3364 18.1488 24.3364C18.3738 24.3364 18.5988 24.2802 18.8238 24.1677L21.4675 22.5364C22.0863 22.1427 22.255 21.3552 21.8613 20.7927C21.4675 20.2302 20.68 20.0614 20.1175 20.4552Z"
                                    fill="white"
                                />
                                <path
                                    d="M7.74252 18.0927L11.455 20.4552C11.68 20.5677 11.905 20.6239 12.13 20.6239C12.5238 20.6239 12.9738 20.3989 13.1988 20.0052C13.5925 19.3864 13.3675 18.6552 12.805 18.2614L9.09252 15.8989C8.47377 15.5052 7.74252 15.7302 7.34877 16.2927C6.95502 16.9677 7.12377 17.7552 7.74252 18.0927Z"
                                    fill="white"
                                />
                                <path
                                    d="M5.04252 16.1802C5.43627 16.1802 5.88627 15.9552 6.11127 15.5614C6.50502 14.9427 6.28002 14.2114 5.71752 13.8177L4.81752 13.2552L5.71752 12.6927C6.33627 12.2989 6.50502 11.5114 6.11127 10.9489C5.71752 10.3302 4.93002 10.1614 4.36752 10.5552L1.72377 12.1864C1.33002 12.4114 1.10502 12.8052 1.10502 13.2552C1.10502 13.7052 1.33002 14.0989 1.72377 14.3239L4.36752 15.9552C4.53627 16.1239 4.76127 16.1802 5.04252 16.1802Z"
                                    fill="white"
                                />
                                <path
                                    d="M8.41752 10.7239C8.64252 10.7239 8.86752 10.6677 9.09252 10.5552L12.805 8.1927C13.4238 7.79895 13.5925 7.01145 13.1988 6.44895C12.805 5.8302 12.0175 5.66145 11.455 6.0552L7.74252 8.4177C7.12377 8.81145 6.95502 9.59895 7.34877 10.1614C7.57377 10.4989 7.96752 10.7239 8.41752 10.7239Z"
                                    fill="white"
                                />
                                <path
                                    d="M16.18 6.05522L18.1488 4.81772L20.1175 6.05522C20.3425 6.16772 20.5675 6.22397 20.7925 6.22397C21.1863 6.22397 21.6363 5.99897 21.8613 5.60522C22.255 4.98647 22.03 4.25522 21.4675 3.86147L18.8238 2.23022C18.43 1.94897 17.8675 1.94897 17.4738 2.23022L14.83 3.86147C14.2113 4.25522 14.0425 5.04272 14.4363 5.60522C14.83 6.16772 15.6175 6.44897 16.18 6.05522Z"
                                    fill="white"
                                />
                                <path
                                    d="M23.4925 8.19267L27.205 10.5552C27.43 10.6677 27.655 10.7239 27.88 10.7239C28.2738 10.7239 28.7238 10.4989 28.9488 10.1052C29.3425 9.48642 29.1175 8.75517 28.555 8.36142L24.8425 5.99892C24.28 5.60517 23.4925 5.83017 23.0988 6.39267C22.705 7.01142 22.8738 7.79892 23.4925 8.19267Z"
                                    fill="white"
                                />
                                <path
                                    d="M34.5738 12.1864L31.93 10.5552C31.3675 10.1614 30.58 10.3864 30.1863 10.9489C29.7925 11.5677 30.0175 12.2989 30.58 12.6927L31.48 13.2552L30.58 13.8177C29.9613 14.2114 29.7925 14.9989 30.1863 15.5614C30.4113 15.9552 30.8613 16.1802 31.255 16.1802C31.48 16.1802 31.705 16.1239 31.93 16.0114L34.5738 14.3802C34.9675 14.1552 35.1925 13.7614 35.1925 13.3114C35.1925 12.8614 34.9675 12.4114 34.5738 12.1864Z"
                                    fill="white"
                                />
                                <path
                                    d="M24.1675 20.624C24.3925 20.624 24.6175 20.5677 24.8425 20.4552L28.555 18.0927C29.1738 17.699 29.3425 16.9115 28.9488 16.349C28.555 15.7302 27.7675 15.5615 27.205 15.9552L23.4925 18.3177C22.8738 18.7115 22.705 19.499 23.0988 20.0615C23.3238 20.4552 23.7175 20.624 24.1675 20.624Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h4
                            class="mb-3 text-xl font-bold text-dark dark:text-white"
                        >
                            High-quality Design
                        </h4>
                        <p
                            class="mb-8 text-body-color dark:text-dark-6 lg:mb-9"
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            industry.
                        </p>
                        <a
                            href="javascript:void(0)"
                            class="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:w-1/4">
                    <div class="wow fadeInUp group mb-12" data-wow-delay=".25s">
                        <div
                            class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
                        >
                            <span
                                class="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                            ></span>
                            <svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.355 2.0614H5.21129C3.29879 2.0614 1.72379 3.6364 1.72379 5.5489V12.6927C1.72379 14.6052 3.29879 16.1802 5.21129 16.1802H12.355C14.2675 16.1802 15.8425 14.6052 15.8425 12.6927V5.60515C15.8988 3.6364 14.3238 2.0614 12.355 2.0614ZM13.3675 12.7489C13.3675 13.3114 12.9175 13.7614 12.355 13.7614H5.21129C4.64879 13.7614 4.19879 13.3114 4.19879 12.7489V5.60515C4.19879 5.04265 4.64879 4.59265 5.21129 4.59265H12.355C12.9175 4.59265 13.3675 5.04265 13.3675 5.60515V12.7489Z"
                                    fill="white"
                                />
                                <path
                                    d="M31.0863 2.0614H23.9425C22.03 2.0614 20.455 3.6364 20.455 5.5489V12.6927C20.455 14.6052 22.03 16.1802 23.9425 16.1802H31.0863C32.9988 16.1802 34.5738 14.6052 34.5738 12.6927V5.60515C34.5738 3.6364 32.9988 2.0614 31.0863 2.0614ZM32.0988 12.7489C32.0988 13.3114 31.6488 13.7614 31.0863 13.7614H23.9425C23.38 13.7614 22.93 13.3114 22.93 12.7489V5.60515C22.93 5.04265 23.38 4.59265 23.9425 4.59265H31.0863C31.6488 4.59265 32.0988 5.04265 32.0988 5.60515V12.7489Z"
                                    fill="white"
                                />
                                <path
                                    d="M12.355 20.0051H5.21129C3.29879 20.0051 1.72379 21.5801 1.72379 23.4926V30.6364C1.72379 32.5489 3.29879 34.1239 5.21129 34.1239H12.355C14.2675 34.1239 15.8425 32.5489 15.8425 30.6364V23.5489C15.8988 21.5801 14.3238 20.0051 12.355 20.0051ZM13.3675 30.6926C13.3675 31.2551 12.9175 31.7051 12.355 31.7051H5.21129C4.64879 31.7051 4.19879 31.2551 4.19879 30.6926V23.5489C4.19879 22.9864 4.64879 22.5364 5.21129 22.5364H12.355C12.9175 22.5364 13.3675 22.9864 13.3675 23.5489V30.6926Z"
                                    fill="white"
                                />
                                <path
                                    d="M31.0863 20.0051H23.9425C22.03 20.0051 20.455 21.5801 20.455 23.4926V30.6364C20.455 32.5489 22.03 34.1239 23.9425 34.1239H31.0863C32.9988 34.1239 34.5738 32.5489 34.5738 30.6364V23.5489C34.5738 21.5801 32.9988 20.0051 31.0863 20.0051ZM32.0988 30.6926C32.0988 31.2551 31.6488 31.7051 31.0863 31.7051H23.9425C23.38 31.7051 22.93 31.2551 22.93 30.6926V23.5489C22.93 22.9864 23.38 22.5364 23.9425 22.5364H31.0863C31.6488 22.5364 32.0988 22.9864 32.0988 23.5489V30.6926Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h4
                            class="mb-3 text-xl font-bold text-dark dark:text-white"
                        >
                            All Essential Elements
                        </h4>
                        <p
                            class="mb-8 text-body-color dark:text-dark-6 lg:mb-9"
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            industry.
                        </p>
                        <a
                            href="javascript:void(0)"
                            class="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
