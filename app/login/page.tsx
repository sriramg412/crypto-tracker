export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />

        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
          Login
        </button>
      </div>
    </div>
  );
}