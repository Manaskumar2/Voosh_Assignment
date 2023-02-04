# Voosh_Assignment

Create a Node.js Api which register new user, we can add new orders, and get order details
of that user.

All the routes will protected, you can use jwt for adding Auth
For Database you can use MongoDB(Nosql or sql anything is fine)
Deploy the app if possible, u can use Heroku for that!


For new user: url/add-user (POST request)
We will store the name, phone number, and a new password (hased password)


For Login user: url/login-user (POST request)
phone number, password


For adding new order: url/add-order (POST request)
We will need the user_id, sub_total, phone_number to add any order

Get order detail: url/get-order (GET request)

In query we will pass the user_id to get user order details
Create a basic UI using react to show the login/signup flow, basic form to add user, and a
page to see the order details of an user