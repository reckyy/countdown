#!/usr/bin/env node

import clui from "clui";

function checkHourLeft(hourLeft, midnightHour, dateHour) {
  if (hourLeft <= midnightHour || hourLeft >= dateHour) {
    console.log(
      "Sleep should not be negative or more than 24 hours, please.🙏",
    );
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

const bedtimeHour = process.argv[2];

checkArgvIsUndefined(bedtimeHour);

const thisTime = new Date();
const hourLeft = parseInt(bedtimeHour) - thisTime.getHours();

checkHourLeft(hourLeft, midnightHour, dateHour);

const percent = maxPercent - (hourLeft / dateHour) * maxPercent;

let sentence;

if (percent <= 25) {
  sentence = "Have a nice day!🔥";
} else if (percent <= 50) {
  sentence = "Only half a day left! Let's do our best!🤞";
} else if (percent <= 75) {
  sentence = "It's about to get dark. Almost!💪";
} else {
  sentence = "You've done a great job, get ready to rest.💤";
}

console.log(Gauge(percent, maxPercent, 20, 90, sentence));
