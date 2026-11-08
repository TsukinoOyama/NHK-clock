(() => {
  "use strict";
  const clock = document.getElementById("clock");

  function tick() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    let hour = Number(parts.find(p => p.type === "hour").value) % 12;
    if (!hour) hour = 12;
    const minute = parts.find(p => p.type === "minute").value;
    clock.textContent = `${hour}:${minute}`;
  }

  document.fonts.ready.then(() => {
    tick();
    setInterval(tick, 1000);
  });
})();
