## Apollo GraphQL Server (node.js express)

### npm 모듈 다운
```
npm install
```


### root레벨에 .env파일 생성
```
DB_HOST=
DB_PORT=
DB_USER=
DB_PW=
DB_DATABASE=
```
### 서버실행
```
npm start
```

### graphQL playground 실행 
```
http://localhost:8000/graphql
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