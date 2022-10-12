## Apollo GraphQL Server (node.js express)

### 서버 실행 
```
npm install

npm start

```

### graphQL playground 실행 
```
1. http://localhost:8000/graphql
```
### operation (graphQL 쿼리 실행)
```
query {
  users {
    userNo, name, email
  }
}
```
### response (결과값)
```
{
  "data": {
    "users": [
      {
        "userNo": 1,
        "name": "기환",
        "email": "test@test.com"
      },
      {
        "userNo": 2,
        "name": "기환2",
        "email": "test222@test.com"
      },
      {
        "userNo": 3,
        "name": "aaaa",
        "email": "ddd"
      }
    ]
  }
}
```