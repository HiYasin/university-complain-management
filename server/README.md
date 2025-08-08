# University Complain Management

## API Testing Guide

Base URL: `/api/v1`

### User APIs

#### Create User
`POST /user`
Body (JSON):
```json
{
	"matricId": "C123456",
	"email": "user@ugrad.iiuc.ac.bd",
	"name": "John Doe",
	"photoUrl": "http://example.com/photo.jpg",
	"role": "user"
}
```

#### Get User by MatricId
`GET /user/:matricId`

---

### Complain APIs

#### Create Complain
`POST /complain`
Body (JSON):
```json
{
	"userMatricId": "U123456",
	"subject": "Subject of complain",
	"description": "Complain details",
	"status": "pending"
}
```

#### Get Complain by _id
`GET /complain/:_id`

#### Get Complains by userMatricId
`GET /complain/user/:userMatricId`

#### Get All Complains
`GET /complain`

#### Update Complain
`PUT /complain/:_id`
Body (JSON):
```json
{
	"subject": "Updated subject",
	"description": "Updated details",
	"status": "resolved"
}
```

#### Delete Complain
`DELETE /complain/:_id`

---

### Notes
- All endpoints return JSON responses with `success`, `message`, and `data` fields.
- Use tools like Postman or curl for testing.
