function canTakePersonalLeave(publicHolidays, joinDate, leaveDate, leaveDuration) {
    let startDate = new Date(joinDate);
    startDate.setDate(startDate.getDate() + 180);

    let endOfYearDate = new Date(startDate.getFullYear(), 11, 31);
    let daysDiff = Math.ceil(Math.abs(endOfYearDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    let personalLeaveDays = Math.floor((daysDiff / 365) * (14 - publicHolidays));

    if (new Date() < startDate) {
        return { allowed: false, reason: `New employees cannot take personal leave before 180 days.` };
    }

    if (leaveDuration > 3) {
        return { allowed: false, reason: `Maximum duration for personal leave is 3 consecutive days.` };
    }

    if (leaveDuration > personalLeaveDays) {
        return { allowed: false, reason: `Only ${personalLeaveDays} days of personal leave are available.` };
    }

    return { allowed: true, reason: `Employee can take ${leaveDuration} days of personal leave.` };
}

let publicHolidays = 7; 
let joinDate = new Date('2021-05-01'); 
let leaveDate = new Date('2021-10-28'); 
let leaveDuration = 1; 

let result = canTakePersonalLeave(publicHolidays, joinDate, leaveDate, leaveDuration);
console.log(result.allowed); 
console.log(result.reason); 
