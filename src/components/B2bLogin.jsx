// import React, { useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const B2bLogin = () => {
//   const [mode, setMode] = useState("login"); // "login", "signup", or "forgot"
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//     setMessage("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = formData;

//     // Basic validation
//     if (!email || (!name && mode === "signup") || (!password && mode !== "forgot")) {
//       setError("All required fields must be filled.");
//       return;
//     }

//     try {
//       let response;
//       if (mode === "login") {
//         response = await fetch("/api/login", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         });
//       } else if (mode === "signup") {
//         response = await fetch("/api/signup", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, email, password }),
//         });
//       } else if (mode === "forgot") {
//         response = await fetch("/api/forgot-password", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         });
//       }

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Something went wrong");
//       }

//       if (mode === "login") {
//         alert("Login successful");
//       } else if (mode === "signup") {
//         alert("Signup successful. Please login.");
//         setMode("login");
//       } else if (mode === "forgot") {
//         setMessage("Password reset link sent to your email.");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const switchMode = (newMode) => {
//     setMode(newMode);
//     setFormData({ name: "", email: "", password: "" });
//     setError("");
//     setMessage("");
//   };

//   return (
    

//     <div>
//       <Navbar/>
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
//           {mode === "login"
//             ? "Login to B2B Portal"
//             : mode === "signup"
//             ? "Create your B2B Account"
//             : "Reset Your Password"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {mode === "signup" && (
//             <div>
//               <label className="text-sm">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="w-full border px-4 py-2 rounded"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//           )}

//           <div>
//             <label className="text-sm">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full border px-4 py-2 rounded"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           {mode !== "forgot" && (
//             <div>
//               <label className="text-sm">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="w-full border px-4 py-2 rounded"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           )}

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {message && <p className="text-green-600 text-sm text-center">{message}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
//           >
//             {mode === "login"
//               ? "Login"
//               : mode === "signup"
//               ? "Sign Up"
//               : "Send Reset Link"}
//           </button>
//         </form>

//         <div className="mt-4 text-center text-sm space-y-2">
//           {mode !== "forgot" && (
//             <button
//               onClick={() => switchMode("forgot")}
//               className="text-blue-600 hover:underline"
//             >
//               Forgot Password?
//             </button>
//           )}

//           {mode !== "signup" && (
//             <p>
//               Don't have an account? {" "}
//               <button
//                 onClick={() => switchMode("signup")}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Sign up
//               </button>
//             </p>
//           )}

//           {mode !== "login" && mode !== "forgot" && (
//             <p>
//               Already have an account? {" "}
//               <button
//                 onClick={() => switchMode("login")}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Login
//               </button>
//             </p>
//           )}

//           {mode === "forgot" && (
//             <p>
//               Back to {" "}
//               <button
//                 onClick={() => switchMode("login")}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Login
//               </button>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default B2bLogin;
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const B2bLogin = () => {
  const [mode, setMode] = useState("login"); // "login", "signup", "forgot", "verify-otp", "reset-password"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    otp: "",
    newPassword: "",
    confirmPassword: ""
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
    const { name, email, password, mobile, otp, newPassword, confirmPassword } = formData;

    // Basic validation based on mode
    if (mode === "login") {
      if (!email || !password) {
        setError("Email and password are required.");
        return;
      }
    } else if (mode === "signup") {
      if (!name || !email || !password) {
        setError("All fields are required.");
        return;
      }
    } else if (mode === "forgot") {
      if (!mobile) {
        setError("Mobile number is required.");
        return;
      }
    } else if (mode === "verify-otp") {
      if (!otp) {
        setError("OTP is required.");
        return;
      }
    } else if (mode === "reset-password") {
      if (!newPassword || !confirmPassword) {
        setError("Both password fields are required.");
        return;
      }
      if (newPassword !== confirmPassword) {
        setError("Passwords don't match.");
        return;
      }
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
        // Send OTP to mobile
        response = await fetch("/api/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile }),
        });
      } else if (mode === "verify-otp") {
        // Verify OTP
        response = await fetch("/api/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile, otp }),
        });
      } else if (mode === "reset-password") {
        // Reset password
        response = await fetch("/api/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile, newPassword }),
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
        setMessage("OTP sent to your mobile number.");
        setMode("verify-otp");
      } else if (mode === "verify-otp") {
        setMessage("OTP verified. Please set new password.");
        setMode("reset-password");
      } else if (mode === "reset-password") {
        setMessage("Password reset successful. Please login.");
        setMode("login");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setFormData({
      name: "",
      email: "",
      password: "",
      mobile: "",
      otp: "",
      newPassword: "",
      confirmPassword: ""
    });
    setError("");
    setMessage("");
  };

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            {mode === "login"
              ? "Login to B2B Portal"
              : mode === "signup"
              ? "Create your B2B Account"
              : mode === "forgot"
              ? "Reset Your Password"
              : mode === "verify-otp"
              ? "Verify OTP"
              : "Set New Password"}
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

            {(mode === "login" || mode === "signup") && (
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
            )}

            {(mode === "login" || mode === "signup") && (
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

            {(mode === "forgot" || mode === "verify-otp" || mode === "reset-password") && (
              <div>
                <label className="text-sm">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Enter registered mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={mode !== "forgot"} // Only editable in forgot mode
                />
              </div>
            )}

            {mode === "verify-otp" && (
              <div>
                <label className="text-sm">OTP</label>
                <input
                  type="text"
                  name="otp"
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  onChange={handleChange}
                />
              </div>
            )}

            {mode === "reset-password" && (
              <>
                <div>
                  <label className="text-sm">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className="w-full border px-4 py-2 rounded"
                    placeholder="••••••••"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full border px-4 py-2 rounded"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </>
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
                : mode === "forgot"
                ? "Send OTP"
                : mode === "verify-otp"
                ? "Verify OTP"
                : "Reset Password"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm space-y-2">
            {mode === "login" && (
              <>
                <button
                  onClick={() => switchMode("forgot")}
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
                <p>
                  Don't have an account? {" "}
                  <button
                    onClick={() => switchMode("signup")}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </>
            )}

            {mode === "signup" && (
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

            {(mode === "forgot" || mode === "verify-otp" || mode === "reset-password") && (
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
      <Footer/>
    </div>
  );
};

export default B2bLogin;