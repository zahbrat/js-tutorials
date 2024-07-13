const getUserNames = (usersObject) => {
  let result = [];

  usersObject.forEach(function (user) {
    result.push(user.name);
  });

  return result;
};

const getUsersWithEyeColor = (usersObject, color) => {
  let result = [];

  usersObject.forEach(function (user) {
    if (user.eyeColor === color) {
      result.push(user);
    }
  });

  return result;
};

const getUsersWithGender = (usersObject, gender) => {
  let result = [];

  usersObject.forEach(function (user) {
    if (user.gender === gender) {
      result.push(user.name);
    }
  });

  return result;
};

const getInactiveUsers = (usersObject) => {
  let result = [];

  usersObject.forEach(function (user) {
    if (user.isActive === false) {
      result.push(user);
    }
  });

  return result;
};

const getUserWithEmail = (usersObject, email) => usersObject.find((user) => user.email === email);

const getUsersWithAge = (usersObject, min, max) => {
  let result = [];

  usersObject.forEach(function (user) {
    if (user.age >= min && user.age <= max) {
      result.push(user);
    }
  });

  return result;
};

const calculateTotalBalance = (usersObject) => {
  let result = 0;

  usersObject.forEach(function (user) {
    result += user.balance;
  });

  return result;
};

const getUsersWithFriend = (usersObject, friendName) => {
  let result = [];

  usersObject.forEach(function (user) {
    if (user.friends.includes(friendName)) {
      result.push(user.name);
    }
  });

  return result;
};

const getNamesSortedByFriendsCount = (usersObject) => {
  let result = [];
  let sortedUsers = usersObject.sort(
    (a, b) => a.friends.length - b.friends.length
  );

  sortedUsers.forEach(function (user) {
    result.push(user.name);
  });

  return result;
};

const getSortedUniqueSkills = usersObject => {
  let result = [];
  let skills = [];

  usersObject.forEach(function (user) {
    user.skills.forEach(function (skill) {
      if (!skills.includes(skill)) {
        skills.push(skill);
      }
    });
  })

  result = skills.sort();
  return result;
};
