const сheckLine = (string, maxLong) => string.length <= maxLong;

сheckLine('проверяемая строка', 20);


const сheckPalindrome = (string) => {
  const newString = string.replaceAll(' ', '').toUpperCase();

  let blankString = '';

  for (let i = newString.length - 1; i >= 0; i--) {
    blankString += newString.at(i);
  } return blankString === newString;
};

сheckPalindrome('ДовОд');


const checkNumberFromString = (string) => {
  let num = '';
  const newString = string.toString().replaceAll(' ', '');

  for (let i = 0; i < newString.length; i++) {
    if (!isNaN(newString[i])) {
      num += newString[i];
    }
  }
  return parseInt(num, 10);
};

checkNumberFromString(-15);


// 5.16. ФУНКЦИИ ВОЗВРАЩАЮТСЯ

const checkTime = (time) => {
  const divisionTime = time.split(':');
  const hours = parseInt(divisionTime[0]);
  const minutes = parseInt(divisionTime[1]);
  const totalMinutes = hours * 60 + minutes;

  return totalMinutes;
};

const scheduleMeeting = (startWork, endWork, startMeeting, durationMetting) => {
  const startWorkMinutes = checkTime(startWork);
  const endWorkMinutes = checkTime(endWork);
  const startMeetingMinutes = checkTime(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + durationMetting;

  if (startMeetingMinutes >= startWorkMinutes && endMeetingMinutes <= endWorkMinutes) {
    return true;
  } else {
    return false;
  }
};

scheduleMeeting();


