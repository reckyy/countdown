export default function checkHourLeft(hourLeft){
  if ((hourLeft <= 0 || hourLeft >= 24)){
    console.log("Sleeping time should not exceed 24 hours, please.🙏");
    process.exit();
  }
}
