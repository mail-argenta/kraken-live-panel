const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    errorMsg.textContent = "Please enter username and password";
    return;
  }

  try {
    const res = await fetch("/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    // Parse JSON safely
    let data;
    try {
      data = await res.json();
    } catch {
      const text = await res.text();
      console.error("Server returned non-JSON response:", text);
      errorMsg.textContent = "Server returned invalid response";
      return;
    }

    if (data.success) {
      window.location.href = "/admin.html"; // redirect to dashboard
    } else {
      errorMsg.textContent = data.error || "Login failed";
    }

  } catch (err) {
    console.error("Fetch error:", err);
    errorMsg.textContent = "Network error";
  }
});
