import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative text-white">

      {/* Full Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#0E2A2A] to-[#FF5F2E]" />

      <div className="relative z-10 flex h-full">

        {/* LEFT SECTION */}
        <div className="hidden lg:flex w-1/2 flex-col justify-center px-24">

          <h1 className="text-6xl font-semibold leading-tight mb-10">
            Expert level Cybersecurity
            <br />
            in <span className="text-primary">hours</span> not weeks.
          </h1>

          <div className="space-y-5 text-gray-300 text-lg">
            <p>✓ Effortlessly spider and map targets to uncover hidden security flaws</p>
            <p>✓ Deliver high-quality, validated findings in hours</p>
            <p>✓ Generate professional enterprise-grade reports automatically</p>
          </div>

          <div className="mt-20 text-gray-400">
            ★ Trustpilot <br />
            Rated 4.5/5.0 (100k+ reviews)
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex w-full lg:w-1/2 items-center justify-center">

          <div className="bg-white text-gray-900 w-full max-w-md p-10 rounded-3xl shadow-2xl">

            <h2 className="text-3xl font-semibold text-center mb-2">
              Sign up
            </h2>

            <p className="text-center text-sm text-gray-500 mb-6">
              Already have an account?{" "}
              <span className="text-primary cursor-pointer">Log in</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="First name*"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="text"
                placeholder="Last name*"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Email address*"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="password"
                placeholder="Password (8+ characters)*"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1" />
                <span>
                  I agree to Aps’s{" "}
                  <span className="text-primary cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  and acknowledge the{" "}
                  <span className="text-primary cursor-pointer">
                    Privacy Policy
                  </span>
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Create account
              </button>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-black text-white py-2 rounded-full">
                  Apple
                </button>
                <button className="flex-1 bg-gray-200 py-2 rounded-full">
                  Google
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-full">
                  Meta
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}