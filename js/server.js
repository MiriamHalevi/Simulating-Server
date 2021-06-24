
const server = {
  AllServer(obj) {
    switch (obj.method) {
      case 'GET':
        if (obj.url == "users") {
          return getUserByPassword(obj.data);
        }
        if (obj.url == "phones") {
          return getPhonesByPassword(obj.data);
        }
        break;
      case 'POST':
        if (obj.url == "users") {
          return addNewUser(obj.data);
        }
        if (obj.url == "phones") {
          return addNewPhone(obj.data);
        }
        break;
      case 'DELETE':
        if (obj.url == "users") {
          return deleteUsers(obj.data);
        }
        if (obj.url == "phones") {
          return deletePhone(obj.data);
        }
        break;
      case 'PUT':
        if (obj.url == "users") {
          return getUserByPassword(obj.data);
        }
        if (obj.url == "phones") {
          return updatePhone(obj.data);
        }
        break;
      default:
    }
  }
}