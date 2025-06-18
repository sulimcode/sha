function pad(n) {
    return n < 10 ? '0' + n : n;
}

function updateCountdown() {
    // Target date: June 22, current year, 00:00:00 local time
    const now = new Date();
    const year = now.getMonth() > 5 || (now.getMonth() === 5 && now.getDate() > 22) ? now.getFullYear() + 1 : now.getFullYear();
    const target = new Date(year, 5, 22, 0, 0, 0, 0);
    let diff = target - now;
    if (diff < 0) diff = 0;
    const hours = pad(Math.floor(diff / (1000 * 60 * 60)));
    const minutes = pad(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = pad(Math.floor((diff / 1000) % 60));
    document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
}

updateCountdown();
setInterval(updateCountdown, 1000); 