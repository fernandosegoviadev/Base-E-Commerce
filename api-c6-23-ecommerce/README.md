# C6-23

# Backend de proyecto e-commerce C6-23
<hr/>

## Url
```
https://rest-server-no-country.herokuapp.com
```
## Users

#### Get

* Endpoint ``/api/users``
* Response
```js
    "total": 2,
    "users": [
        {
            "name": "facu1",
            "email": "facu1@gmail.com",
            "role": "ADMIN_ROLE",
            "google": false,
            "uid": "61d2082967f6669f3b7a6aac"
        },
        {
            "name": "facu2",
            "email": "facu2@gmail.com",
            "role": "USER_ROLE",
            "google": false,
            "uid": "61d2082967f6669f3b7b3vf8"
        }
    ]
```
 
#### Post
* Endpoint ``/api/users``
* Body 
```js 
    "name":"facu1",
    "email":"facu1@gmail.com",
    "password":"123456",
    "role":"USER_ROLE" 
```

* Response 
```js
    "msg": 'user successfully created!',
    "user": {
        "name": "facu1",
        "email": "facu1@gmail.com",
        "role": "USER_ROLE",
        "google": false,
        "uid": "61d73ef0da40470d058c115b"
    }
```

#### Put
* Endpoint ``/api/users/id``
* Body ``"role":"ADMIN_ROLE"``

* Response
```js
    "msg": "user successfully updated!",
    "user": {
        "name": "facu1",
        "email": "facu1@gmail.com",
        "role": "ADMIN_ROLE",
        "google": false,
        "uid": "61d73ef0da40470d058c115b"
    }
}
```
#### Delete
* Endpoint ``/api/users/id``

* Response
```js
    "msg": 'user successfully deleted!',
    "user": {
        "name": "test6",
        "email": "test6@test.com",
        "role": "ADMIN_ROLE",
        "google": false,
        "uid": "61d73ef0da40470d058c115b"
    }
```

---
