export default function UnderDevelopment() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100 text-center">
            <div className="max-w-xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                    🚧 Page Under Development
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6">
                    We're working hard to bring this page to life. Please check back soon!
                </p>

                <a
                    href="/"
                    className="inline-block px-6 py-2 text-white bg-amber-400 rounded-full hover:bg-amber-500 transition duration-300"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}
