function updateDayOfWeek() {
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const daysOfWeek = ["Day: Sunday", "Day: Monday", "Day: Tuesday", "Day: Wednesday", "Day: Thursday", "Day: Friday", "Day: Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];
}

function updateUTCTime() {
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDate = new Date();
    currentUTCTime.textContent = currentDate.getTime();
}

updateDayOfWeek();
updateUTCTime();
setInterval(updateDayOfWeek, 1000); 
setInterval(updateUTCTime, 1000); 
