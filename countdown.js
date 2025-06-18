// Countdown target: June 22 of the current year at 00:00:00
const now = new Date();
const year = now.getMonth() > 5 ? now.getFullYear() + 1 : now.getFullYear(); // If after June, set for next year
const targetDate = new Date(year, 5, 22, 0, 0, 0, 0); // June is month 5 (0-indexed)

timer();
setInterval(timer, 1000);

function timer() {
    const now = new Date();
    let diff = Math.max(0, targetDate - now);
    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
    diff %= (1000 * 60 * 60);
    const minutes = String(Math.floor(diff / (1000 * 60))).padStart(2, '0');
    diff %= (1000 * 60);
    const seconds = String(Math.floor(diff / 1000)).padStart(2, '0');
    document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
} 