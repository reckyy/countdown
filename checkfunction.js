function checkHourLeft(hourLeft, midnightHour, dateHour){
  if ((hourLeft <= midnightHour || hourLeft >= dateHour)){
    console.log("Sleep should not be negative or more than 24 hours, please, please.🙏");
    process.exit();
  }
}

function checkArgv(argv){
  if(typeof argv === "undefined"){
    console.log("Enter your bedtime, please.");
    process.exit();
  }
}

export { checkHourLeft, checkArgv };
