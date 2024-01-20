## countdown-to-bedtime

Let's do our best.

## What is this?

This simple app displays your progress according to how long it takes you to fall asleep.You can quickly see how many hours you have left today.

## install

```
npm install -g countdown-to-bedtime
```

## usage

```
cdtobed [your bedtime]
```

Enter a time within 24 hours of the current time in bedtime, please.

## pattern

- If it is 22:00 at the time of execution

```
% cdtobed 24
[||||||||||||||||||-] You've done a great job, get ready to rest.💤
```

- Execution after the scheduled bedtime.

```
% cdtobed [bedtime]
You must have had a long day. Remember to rest.😭
```

- If bedtime is specified more than 24 hours ahead.

```
% cdtobed [bedtime]
Sleep should not be more than 24 hours, please.🙏
```
