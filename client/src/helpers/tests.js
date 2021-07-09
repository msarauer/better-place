const testData = {
  
  users: [
    { id: 1, picture_url: 'xxx', name: 'bob' },
    { id: 2, picture_url: 'xyz', name: 'john' },
    { id: 3, picture_url: 'yyy', name: 'tom' },
    { id: 4, picture_url: 'zzz', name: 'sarah' },
    { id: 5, picture_url: 'qqq', name: 'sam' },
    { id: 6, picture_url: 'uuu', name: 'zizzy' },
    { id: 7, picture_url: 'ooo', name: 'Joanna' },
    { id: 8, picture_url: 'www', name: 'sasha' },
    { id: 9, picture_url: 'eee', name: 'Tonto' },
    { id: 10, picture_url: 'qqq', name: 'Larry TAAATE' }
  ],

  messages: [
    { author: 1, receiver: 2, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 2, receiver: 1, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 2, receiver: 3, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 2, receiver: 1, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 1, receiver: 3, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 1, receiver: 4, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 2, receiver: 6, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 8, receiver: 1, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 2, receiver: 3, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
    { author: 1, receiver: 2, message: 'Hey how is it going?', date: '2021-07-09T06:42:08.106Z'},
  ],

  id: 2

}

 const getUsersFromMessages = (messages, allUsers, id) => {
  
  const userIds = [];
  messages.forEach((message) => {
    console.log(userIds.includes(message.author))
    if (userIds.includes(message.author) === false && message.author !== id && message.receiver === id) {
      userIds.push(message.author);
    }
    if (userIds.includes(message.reveiver) === false && message.receiver !== id && message.author === id) {
      userIds.push(message.receiver);
    }
  });
  console.log(userIds)

  const users = []
  allUsers.forEach((user) => {
    for (let id of userIds) {
      if (id === user.id) {
        users.push(user);
      }
    }
  })
  // const users = allUsers.filter((user) => {
  //   for (id of userIds) {
  //     return id === user.id
  //   }
  // })

  return users
};



console.log(getUsersFromMessages(testData.messages, testData.users, testData.id))