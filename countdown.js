function pad(n) {
    return n < 10 ? '0' + n : n;
}

function updateCountdown() {
    // Target: June 22, 00:00:00 of the current year (or next year if already passed)
    const now = new Date();
    let year = now.getFullYear();
    const target = new Date(year, 5, 22, 0, 0, 0); // June is month 5 (0-indexed)
    if (now > target) {
        year += 1;
    }
    const finalTarget = new Date(year, 5, 22, 0, 0, 0);
    const diff = finalTarget - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<span>00</span><span>00</span><span>00</span>';
        return;
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').innerHTML =
        `<span>${pad(days)}</span><span>${pad(hours)}</span><span>${pad(minutes)}</span><span>${pad(seconds)}</span>`;
}

updateCountdown();
setInterval(updateCountdown, 1000); 