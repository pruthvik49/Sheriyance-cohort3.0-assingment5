// Features data
    const features = [
      ["🧭", "Dashboard Navigation", "Every tool one click away in a clean sidebar."],
      ["✅", "Todo List", "Capture tasks fast, check them off, build momentum."],
      ["🗓️", "Daily Planner", "Time-block your day and see the plan at a glance."],
      ["💬", "Motivation Quote", "A fresh spark of inspiration every visit."],
      ["⏱️", "Pomodoro Timer", "25-minute focus sprints with clean breaks."],
      ["☁️", "Weather Widget", "Local forecast tucked into your workspace."],
      ["🕒", "Date & Time", "A calm live clock — always know where the day stands."],
      ["🎨", "Dynamic Background", "Backgrounds that shift with time and mood."],
      ["🌗", "Light / Dark Theme", "Switch instantly between light and dark."],
      ["🎯", "Daily Goals", "Set 3 goals each morning. Win the day by evening."],
    ];
    const grid = document.getElementById("feature-grid");
    features.forEach(([icon, title, desc]) => {
      const card = document.createElement("div");
      card.className = "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 hover:border-white/20 hover:bg-white/[0.06] transition w-40";
      card.innerHTML = `<div class="flex items-center  gap-2 ">
        <div class="w-8 h-8 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-sm">${icon}</div>
        <h3 class=" text-sm font-medium">${title}</h3>
        </div>

      `;
      grid.appendChild(card);
    });
    // Live clock
    function updateClock() {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      document.getElementById("clock").textContent = `${hh}:${mm}`;
      document.getElementById("date").textContent = now.toLocaleDateString("en-US", {
        weekday: "long", month: "short", day: "numeric"
      });
    }
    updateClock();
    setInterval(updateClock, 1000);
  
