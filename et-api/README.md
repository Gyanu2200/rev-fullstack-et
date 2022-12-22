# Expense tracker API

This api for our react expenses tracker app which is at `... link to react app repo ..`

...what this app is ....

## how to use

1. clone this project by Running `git clone https://github.com/Gyanu2200/rev-fullstack-et.git
2. Run `cd et-api`
3. Run `npm i`
4. Run `run dev`. You must have `nodemon` install in your system, otherwise run `npm i nodemon -g` to install globally

Now the project will be serving at: `http://localhost:8000`

## API

This api server will have 2 api endpoints:

1. User Endpoint (API)
2. Transaction Endpoint (API)

All the endpoint will follow the following path `{rooturl}/api/v1`

### User API

User Api will use the following app path `{rooturl}/api/v1/user` This api will allow client to create user, login and more.

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION     |
| --- | ---- | ------ | ---------- | --------------- |
| 1.  | '/'  | POST   | false      | create new user |

### Transaction API

User Api will use the following app path `{rooturl}/api/v1/transaction` This api will allow client to do CRUD operation on transaction.

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                           |
| --- | ---- | ------ | ---------- | --------------------------------------------------------------------- |
| 1.  | '/'  | GET    | true       | allow user to fetch their own transaction only                        |
| 2.  | '/'  | POST   | true       | allow user to post new transactions, data should be send as `{}`      |
| 2.  | '/'  | PATCH  | true       |                                                                       |
| 3.  | '/'  | DELETE | true       | allow user to delete single or multiple of their own transaction only |

client should send the data as `[id1, id2,]`
