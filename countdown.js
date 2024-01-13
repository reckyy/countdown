#!/usr/bin/env node

import clui from 'clui';
import { checkHourLeft, checkArgv } from "./checkfunction.js";

const Gauge = clui.Gauge;
const maxPercent = 100;
const midnightHour = 0;
const dateHour = 24;

const bedtimeHour = process.argv[2];

checkArgv(bedtimeHour);

const thisTime = new Date();
const hourLeft = parseInt(bedtimeHour) - thisTime.getHours();

checkHourLeft(hourLeft, midnightHour, dateHour);

const percent = maxPercent - (hourLeft / dateHour) * maxPercent;

let sentence;

if (percent <= 25){
  sentence = "Have a nice day!🔥";
} else if(percent <= 50){
  sentence = "Only half a day left! Let's do our best!🤞"
}else if(percent <= 75){
  sentence = "It's about to get dark. Almost!💪"
}else{
  sentence = "You've done a great job, get ready to rest.💤";
}

console.log(Gauge(percent, maxPercent, 20, 90, sentence));
