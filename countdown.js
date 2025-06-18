function pad(n) {
    return n < 10 ? '0' + n : n;
}

function updateCountdown() {
    // Target: June 22, this year, 00:00:00 local time
    const now = new Date();
    const year = now.getMonth() > 5 ? now.getFullYear() + 1 : now.getFullYear();
    const target = new Date(year, 5, 22, 0, 0, 0, 0);
    let diff = target - now;
    if (diff < 0) diff = 0;
    const hours = pad(Math.floor(diff / (1000 * 60 * 60)) % 24 + Math.floor(diff / (1000 * 60 * 60 * 24)) * 24);
    const minutes = pad(Math.floor(diff / (1000 * 60)) % 60);
    const seconds = pad(Math.floor(diff / 1000) % 60);
    document.getElementById('countdown').innerHTML = `${hours}<span>:</span>${minutes}<span>:</span>${seconds}`;
}

updateCountdown();
setInterval(updateCountdown, 1000); 