There are two seperate project there:
## backend
Folder (server) host the backend code, and for it to be run, you need:
- mysql installed
- has a database called: lctestdb
- has a user: liming@12345678 being authorized to use this db

To run, simply go to server folder
### `npm run start`
This will listen at port 8080, but will only give access to a machine running at port 3000 (caution!)


## Frontend
Folder (client) host the frontend code, you need
- the backend running

To run, go to client folder
### `npm run start`
Make sure you port 3000 is available for the frontend to run


!!! caution: the definition of networks unnecessary as there will be a default network created for all
the setting now, are not through nginx because i am connect directly to 4001