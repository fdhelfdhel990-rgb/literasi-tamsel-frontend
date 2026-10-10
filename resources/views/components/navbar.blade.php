<header class="site-header">
    <div class="container nav-inner">
        <a href="{{ url('/') }}" class="brand" aria-label="Komunitas Literasi Remaja Tambun Selatan">
            <img src="{{ asset('assets/images/logo/logo.png') }}" alt="Komunitas Literasi Remaja">
        </a>

        <button class="mobile-menu-button" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="primary-navigation">
            <span></span><span></span><span></span>
        </button>

        <nav class="site-nav" id="primary-navigation" aria-label="Navigasi utama">
            <a class="{{ request()->is('/') ? 'active' : '' }}" href="{{ url('/') }}">Home</a>
            <a class="{{ request()->is('about') ? 'active' : '' }}" href="{{ url('/about') }}">About Us</a>
            <a href="#publication">Publication</a>
            <a href="#digital-library">Digital Library</a>
            <a href="#join-us">Join Us</a>
            <a href="#media-partner">Media Partner</a>
        </nav>
    </div>
</header>
