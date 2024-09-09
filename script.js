// Countdown Timer for Token Unlock at 8:00 AM Calgary Time
function startCountdown() {
    const targetTime = new Date();
    targetTime.setHours(8, 0, 0, 0); // Set to 8:00 AM

    const now = new Date();
    if (now.getHours() >= 8) {
        targetTime.setDate(targetTime.getDate() + 1); // Next day if already past 8:00 AM
    }

    const updateCountdown = setInterval(function () {
        const currentTime = new Date();
        const difference = targetTime - currentTime;

        if (difference <= 0) {
            clearInterval(updateCountdown);
            document.getElementById('timer').innerText = "Unlocking 1000 ATI2 now!";
        } else {
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('timer').innerText = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// Initialize the functions on page load
window.onload = function() {
    startCountdown();
};
