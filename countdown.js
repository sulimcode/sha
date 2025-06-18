// Countdown target (set your real opening date/time here)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

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