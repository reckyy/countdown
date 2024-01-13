function checkHourLeft(hourLeft, midnightHour, dateHour){
  if ((hourLeft <= midnightHour || hourLeft >= dateHour)){
    console.log("Sleeping time should not exceed 24 hours, please.🙏");
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
