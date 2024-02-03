#!/usr/bin/env node

import clui from "clui";

function checkHourLeft(hourLeft, midnightHour, dateHour) {
  if (hourLeft < midnightHour) {
    console.log("You must have had a long day. Remember to rest.😭");
    process.exit();
  } else if (hourLeft >= dateHour) {
    console.log("Sleep should not be more than 24 hours, please.🙏");
    process.exit();
  }
}

function checkArgvIsUndefined(argv) {
  if (typeof argv === "undefined") {
    console.log("Enter your bedtime, please.");
    process.exit();
  }
}

const Gauge = clui.Gauge;
const maxPercent = 100;
const midnightHour = 0;
const dateHour = 24;

checkArgvIsUndefined(process.argv[2]);

const bedtimeHour = parseInt(process.argv[2]);
const currentHour = new Date().getHours();

const hourLeft = bedtimeHour - currentHour;

checkHourLeft(hourLeft, midnightHour, dateHour);

let sentence;

if (hourLeft >= 12 && hourLeft < dateHour) {
  sentence = "Have a nice day!🔥";
} else if (hourLeft >= 8 && hourLeft < 12) {
  sentence = "Only half a day left! Let's do our best!🤞";
} else if (hourLeft >= 4 && hourLeft < 8) {
  sentence = "It's about to get dark. Almost!💪";
} else if (hourLeft >= midnightHour && hourLeft < 4) {
  sentence = "You've done a great job, get ready to rest.💤";
}

const percent = maxPercent - (hourLeft / dateHour) * maxPercent;

console.log(Gauge(percent, maxPercent, 20, 90, sentence));
