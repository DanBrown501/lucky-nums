### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
A standard used to create efficient reusable routes that use the standard HTTP verbs (GET, POST, PUT/PATCH, DELETE)
- What is a resource?
An object with a type, associated data, relationships to other resources
- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
A JSON API will respond with JSON, not HTML
- What does idempotent mean? Which HTTP verbs are idempotent?
An idempotent operation can be performed many times (with same data) with the result of all calls being the same as if it was done once. [GET, POST/PATCH, DELETE]
- What is the difference between PUT and PATCH?
PUT updates an entire resource.

PATCH updates part of a resource
- What is one way encryption?
A non-reversible encryption and the same input always equals the same output
- What is the purpose of a `salt` when hashing a password?
A salt will prevent a pre-computed hash attack by creating a random string of characters for each password
- What is the purpose of the Bcrypt module?
It is designed to be slow
- What is the difference between authorization and authentication?
Authentication, is determining if a user is who they say they are. An example is being able to login. Authorization has to do with permissions. A user shouldn't be able to delete someone else's post unless they are a moderator.
