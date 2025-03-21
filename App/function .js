// Task 1
function cashOut(money) {
  if (typeof money === "number" && money >= 0) {
    return money * (1.75 / 100);
  } else {
    return "Invalid";
  }
}

// Task 2
function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  } else if (
    email[0] === "." ||
    email[0] === "-" ||
    email[0] === "_" ||
    email[0] === "@"
  ) {
    return false;
  } else if (
    !email.includes("@") ||
    email.includes(" ") ||
    !email.includes(".com")
  ) {
    return false;
  }
  //   if valid
  else {
    return true;
  }
}

// Task 3
function electionResult(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  let mango = 0;
  let banana = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === "mango") {
      mango++;
    } else if (arr[i] === "banana") {
      banana++;
    }
  }
  if (mango > banana) {
    return "Mango";
  } else if (banana > mango) {
    return "Banana";
  } else {
    return "Draw";
  }
}

// Task 4
function isBestFriend(f1, f2) {
  if (typeof f1 === "object" && typeof f2 === "object") {
    if (!Array.isArray(f1) && !Array.isArray(f2)) {
      if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
        return true;
      } else {
        return false;
      }
    }
  }

  return "Invalid";
}

// Task 5
function calculateWatchTime(times) {
  if (Array.isArray(times)) {
    if (times.find((s) => typeof s !== "number")) {
      return "Invalid";
    } else {
      let totalTime = 0;
      times.forEach((time) => {
        totalTime += time;
      });
      let minute = Math.floor(totalTime / 60);
      let second = totalTime % 60;
      let hour = Math.floor(minute / 60);
      minute = minute % 60;
      return { hour, minute, second };
    }
  }
  return "Invalid";
}
