import React, { useState } from "react";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); // "login", "signup", or "forgot"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Basic validation
    if (!email || (!name && mode === "signup") || (!password && mode !== "forgot")) {
      setError("All required fields must be filled.");
      return;
    }

    try {
      let response;
      if (mode === "login") {
        response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
      } else if (mode === "signup") {
        response = await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
      } else if (mode === "forgot") {
        response = await fetch("/api/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (mode === "login") {
        alert("Login successful");
      } else if (mode === "signup") {
        alert("Signup successful. Please login.");
        setMode("login");
      } else if (mode === "forgot") {
        setMessage("Password reset link sent to your email.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setFormData({ name: "", email: "", password: "" });
    setError("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          {mode === "login"
            ? "Login to B2B Portal"
            : mode === "signup"
            ? "Create your B2B Account"
            : "Reset Your Password"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-4 py-2 rounded"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {mode !== "forgot" && (
            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                name="password"
                className="w-full border px-4 py-2 rounded"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          )}

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {message && <p className="text-green-600 text-sm text-center">{message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
          >
            {mode === "login"
              ? "Login"
              : mode === "signup"
              ? "Sign Up"
              : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm space-y-2">
          {mode !== "forgot" && (
            <button
              onClick={() => switchMode("forgot")}
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          )}

          {mode !== "signup" && (
            <p>
              Don't have an account? {" "}
              <button
                onClick={() => switchMode("signup")}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up
              </button>
            </p>
          )}

          {mode !== "login" && mode !== "forgot" && (
            <p>
              Already have an account? {" "}
              <button
                onClick={() => switchMode("login")}
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </button>
            </p>
          )}

          {mode === "forgot" && (
            <p>
              Back to {" "}
              <button
                onClick={() => switchMode("login")}
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
