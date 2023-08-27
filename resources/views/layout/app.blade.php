<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Your React App</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>
    <div id="app">
        @if(request()->path() !== '/')
        <header class="bg-white p-4 shadow-md">
            <!-- Your header content here -->
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/transactions">Transactions</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <!-- Add more navigation links here -->
                </ul>
            </nav>
        </header>
        @endif

        <main class="mx-auto">
            <!-- React root element -->
            <div id="root"></div>
        </main>
        
        <footer class="bg-gray-200 p-4 text-center">
            <!-- Your footer content here -->
            &copy; {{ date('Y') }} Your App Name
        </footer>
    </div>
</body>
</html>
