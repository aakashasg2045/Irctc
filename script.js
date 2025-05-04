function updateTime() {
    const now = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = now.toLocaleDateString("en-GB", options).replace(/ /g, "-");
    const time = now.toLocaleTimeString("en-GB");
    document.getElementById("time-container").textContent = `${date} [${time}]`;
  }
  
  // Initial call
  updateTime();
  // Update every second
  setInterval(updateTime, 1000);
  
  // font changing content -------------------
  let currentFontSize = 16;
  
  function changeFontSize(change) {
    currentFontSize += change;
    document.body.style.fontSize = currentFontSize + "px";
  }
  
  function resetFontSize() {
    currentFontSize = 16;
    document.body.style.fontSize = "16px";
  }
  
  // ------------------chat bot----------------------
  let userInitialized = false;
  let userName = "";
  
  function toggleChatbot() {
    const bot = document.getElementById("chatbot-sidebar");
    bot.classList.toggle("open");
  }
  
  function handleInitialKey(e) {
    if (e.key === "Enter") {
      const input = document.getElementById("user-input");
      const message = input.value.trim();
      if (!message) return;
  
      const chatbox = document.getElementById("chatbox");
      const userMsg = document.createElement("div");
      userMsg.className = "user-msg";
      userMsg.textContent = message;
      chatbox.appendChild(userMsg);
  
      if (!userInitialized) {
        userName = message.split(" ")[0];
        showInitialOptions(userName);
        userInitialized = true;
        input.placeholder = "Type your query here...";
        input.value = "";
        input.onkeypress = handleKey;
      }
    }
  }
  
  function showInitialOptions(name) {
    const chatbox = document.getElementById("chatbox");
    const greetings = [
      `Welcome ${name}! How can I assist you today?`,
      "1. Check Train Availability",
      "2. Refund Policy",
      "3. eWallet Info",
      "4. Ticket Cancellation Guide",
    ];
  
    greetings.forEach((text) => {
      const botMsg = document.createElement("div");
      botMsg.className = "bot-msg";
      botMsg.textContent = text;
      chatbox.appendChild(botMsg);
    });
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  
  function handleKey(e) {
    if (e.key === "Enter") {
      const input = document.getElementById("user-input");
      const message = input.value.trim();
      if (message === "") return;
  
      const chatbox = document.getElementById("chatbox");
  
      const userMsg = document.createElement("div");
      userMsg.className = "user-msg";
      userMsg.textContent = message;
      chatbox.appendChild(userMsg);
  
      const botMsg = document.createElement("div");
      botMsg.className = "bot-msg";
  
      if (/availability|train|1/.test(message.toLowerCase())) {
        botMsg.textContent =
          "Train 12345 is available daily between Delhi and Mumbai. Departure: 9:00 AM, Arrival: 5:00 PM.";
      } else if (/refund|2/.test(message.toLowerCase())) {
        botMsg.textContent =
          "Refunds are typically processed within 7 days. Make sure to cancel tickets before chart preparation.";
      } else if (/ewallet|3/.test(message.toLowerCase())) {
        botMsg.textContent =
          "IRCTC eWallet offers faster payment. Recharge your wallet and book tickets instantly!";
      } else if (/cancel|cancellation|4/.test(message.toLowerCase())) {
        botMsg.textContent =
          'To cancel tickets, go to "My Bookings", select the ticket and click "Cancel". Charges may apply.';
      } else {
        botMsg.textContent =
          "Sorry, I didn't understand that. Try using options like 1, 2, 3, or 4 or their keywords.";
      }
  
      chatbox.appendChild(botMsg);
      chatbox.scrollTop = chatbox.scrollHeight;
      input.value = "";
    }
  }
  
  // ---------------------------getlivepage-----------------------------
  function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  function continuePage() {
    window.location.href = "train.html";
  }
  
  // ------------------darkmode-toggle------------------------------
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    // Change button icon/text based on mode
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = '☀️ <p class="newtag tag4">New</p>';
    } else {
      darkModeToggle.innerHTML = '🌙 <p class="newtag tag4">New</p>';
    }
  
    // Optionally save preference
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );
  });
  
  // Load dark mode if previously enabled
  window.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("darkMode") === "true";
    if (isDark) {
      document.body.classList.add("dark-mode");
      darkModeToggle.innerHTML = '☀️ <p class="newtag tag4">New</p>';
    }
  });
  