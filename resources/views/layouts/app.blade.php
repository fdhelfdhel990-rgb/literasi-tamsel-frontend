<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Komunitas Literasi Remaja Tambun Selatan' }}</title>
    <meta name="description" content="Komunitas Literasi Remaja Tambun Selatan">
    <link rel="icon" href="{{ asset('assets/images/favicon.png') }}" type="image/png">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    @include('components.navbar')
    <main>
        @yield('content')
    </main>
    @include('components.footer')
</body>
</html>
