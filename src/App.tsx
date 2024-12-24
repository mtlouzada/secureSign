import { useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin, googleLogout } from "@react-oauth/google";
import "./index.scss";

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = useGoogleLogin({
    onSuccess: (response) => {
      fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`)
        .then((res) => res.json())
        .then((userData) => {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
        })
        .catch((error) => console.error("Error fetching user data:", error));
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <GoogleOAuthProvider clientId="547627816971-1jlv2r9o9tiodg1bgsnmucatk1nbt2qe.apps.googleusercontent.com">
      <div className="container">
        {!user ? (
          <button onClick={() => login()} style={{ padding: "10px 20px" }}>
            Continuar com o Google
          </button>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h1>User Information</h1>
            <img 
              className="profile" 
              src={user.picture || '/path/to/default-image.jpg'} 
              alt="Profile" 
            />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
