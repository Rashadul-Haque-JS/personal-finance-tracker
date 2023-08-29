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
    <script defer>
    function logout() {
        localStorage.removeItem("user");
        window.location.href = "/";
    }
</script>
</head>
<body>
    <div id="app">
        @if(request()->path() !== '/')
    <header class="bg-gray-800 py-4 relative">
    <div class="bg-gray-800 py-4">
        <div class="bg-black w-full h-2 m-0 absolute left-0 top-0"></div>
        <div class="mb-3 mt-1">
            <img class="mx-auto h-12 w-auto" src="/fin-logo.png" alt="Workflow"/>
        </div>
        <nav class="mx-auto text-yellow-300 text-center text-md">
            <ul class="flex items-center justify-center gap-4 sm:gap-3 xs:gap-3">
                <li><a href="/dashboard" class="cursor-pointer">Dashboard</a></li>
                <li><a href="/transaction" class="cursor-pointer">Transactions</a></li>
                <li><a href="/category" class="cursor-pointer">Categories</a></li>
                <li onclick="logout()" class="text-blue-500 cursor-pointer">
                     Logout
                </li>
            </ul>
        </nav>
    </div>
</header>
        @endif
        <main class="mx-auto">
            <!-- React root element -->
            <div id="root"></div>
        </main>
        
        <footer class="bg-gray-200 p-4 text-center">
            <!-- Footer content here -->
            &copy; {{ date('Y') }} Your App Name
        </footer>
    </div>
</body>
</html>
