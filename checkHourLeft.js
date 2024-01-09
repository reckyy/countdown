function checkHourLeft(hourLeft){
  if ((hourLeft <= 0 || hourLeft >= 24)){
    console.log("Sleeping time should not exceed 24 hours, please.🙏");
    process.exit();
  }
}

function checkArgv(argv){
  if(typeof hourLeft === "undefined"){
    console.log("Enter your bedtime, please.");
    process.exit();
  }
}

export { checkHourLeft, checkArgv };
