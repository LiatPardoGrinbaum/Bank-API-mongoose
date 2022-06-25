# Bank-API-nodeJS -version 2 with Mongoose library

This project was taken as a part of my participance in Appleseed academy fullstack bootcamp.  
In this project I built a bank API with nodeJS, express, mongoose. All end points were tested with Postman (local enviroment and heroku).  
All routes methods have error handling for different cases.  
The bank manager has access to the users of the bank and can perform many operations as described in the following documentation.

## API documentation

Bank API , base endpoint:  
https://bank-api-v2-liat.herokuapp.com/api/users

2 mongoose models were created- User and Account.  
2 database collections were created based on those mongoose models.

Each user document holds an array for all his/her accounts.  
User document for example:

```
{
      "_id": "62b6dcfba29cec28a9b4a5ff",
      "username": "Eti",
      "password": "123123",
      "accounts": [
          111,
          113
      ],
      "__v": 0
  },
```

The accounts document contains all the users' accounts.  
Account objects from accounts json:

```
{
    "data": {
        "_id": "62b6d80ae9b5d7f1028e2d8d",
        "cash": 1200,
        "credit": 1300,
        "isActive": true,
        "accountId": 111,
        "__v": 0
    }
}

```

**ROUTES:**

- Get all users data, GET method:  
  https://bank-api-v2-liat.herokuapp.com/api/users

- Get user by username, GET method:  
  https://bank-api-v2-liat.herokuapp.com/api/users/:username for exmaple:https://bank-api-v2-liat.herokuapp.com/api/users/koch

- Add new user, POST method:  
  https://bank-api-v2-liat.herokuapp.com/api/users

  In Postman:  
   {  
   "username": _enter number_,  
   "password": "_enter string_",  
   "accounts": _enter array with numbers_  
   }

- Get all Accounts data, GET method:  
  https://bank-api-v2-liat.herokuapp.com/api/accounts

- Get account by accountId, GET method:  
  https://bank-api-v2-liat.herokuapp.com/api/accounts/getaccount

  In postmen:  
   {  
   "accountId":_enter number_,  
   }

- Deposit cash to an account by accountid, PUT method:  
  https://bank-api-v2-liat.herokuapp.com/api/accounts/deposit

  In Postman:  
   {  
   "accountId":_enter number_,  
   "amount": _enter number_  
   }

- Update credit by accountId, PUT method:  
  https://bank-api-v2-liat.herokuapp.com/api/accounts/credit

  In Postman:  
   {  
   "accountId":_enter number_,  
   "amount": _enter number_  
   }

- Withdraw money from an account by accountId.  
  Can withdraw money until the cash and credit run out. PUT method:  
  https://bank-api-v2-liat.herokuapp.com/api/accounts/withdraw

  In Postman:  
   {  
   "accountId":_enter number_,  
   "amount": _enter number_  
   }

  &copy; Liat Pardo Grinbaum
