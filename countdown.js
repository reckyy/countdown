const bedtimeHour = process.argv[2];
const thisTime = new Date();
const hourLeft = parseInt(bedtimeHour) - thisTime.getHours();
