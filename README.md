# BYOB-vehicles

[![Build Status](https://travis-ci.org/chrisboylen/BYOB-vehicles.svg?branch=master)](https://travis-ci.org/chrisboylen/BYOB-vehicles)

## Table of Contents
* [Makes Endpoints](#makes)
    * [GET - All Makes](#get-all-makes)
    * [GET - Individual Make](#get-individual-make)
    * [POST - New Make](#post-new-make)
    * [DELETE - A Make](#delete-make)
    * [PATCH - Individual Make](#patch-individual-make)
* [Models Endpoints](#models)
    * [GET - All Models](#get-all-mmodels)
    * [GET - Model Search by Name](#get-model-search-by-name)
    * [GET - Individual Model](#get-individual-model)
    * [POST - New Model](#post-new-model)
    * [DELETE - A Model](#delete-modle)
    * [PATCH - Individual Model](#patch-individual-make)

## Getting Started
This is a general guide to open BYOB on your local machine. Run the following in your terminal. You will already need to have npm and postgreSQL installed and have this repo forked to your github. If you are interested in contributing to the this project please checkout the [CONTRIBUTING][CONTRIBUTING].

[CONTRIBUTING]:
https://github.com/chrisboylen/BYOB-vehicles

### Initial setup
* git clone https://github.com/chrisboylen/BYOB-vehicles.git
* cd BYOB-vehicles
* npm i
* node server.js
### Create Database with data
psql is a terminal-based front-end to PostgreSQL. While you are running it locally you be able to create new databases as well as accessing, editing and deleting existing ones. We access the PostgreSQL by running this command.
* Run `CREATE DATABASE [database name]` in your terminal

We have now initialized our database.

* Create a new directory, cd into it, and run `npm initial --yes`

This creates our local directory. We still need Knex with Express to allow us to use Javascript for communicating with the backend.

* Run the following commands in your terminal...
    * `npm i -g knex`
    * `npm i -S knex pg`

Now that we have knex installed we need to configure our database.

* Run knex init in your terminal

This is the file that you will use to configure your database. You will notice some boilerplate setup, but with some modifications you can better accommodate your project.

* Run knex migrate:make initial in your terminal

This will generate an initial migration. You can edit this newly created file to better suit your schema layout. Use the command `knex migrate:latest` to run all of your migrations. For future adjustments to your schema, rather than continuing to edit the initial migration, you must create a new migration with the following command, `knex migrate:make [adjustment detail]`. Editing past migration can cause errors! Further documentation on building out tables can be found [here](https://knexjs.org/).

## Dependencies
* body parser 1.18.3
* cors 2.8.4
* express 4.16.3
* knex 0.15.2
* pg 7.5.0
* eslint 5.6.1
* chai-http 4.2.0
* chai 4.2.0
* mocha 5.2.0

## Endpoints
* All responses are in JSON format
:oncoming_automobile:

## Makes

### GET All Makes 
* `/api/v1/makes` 

    This endpoint will return an array with all the makes in the database. - ex: 
    * Status: 200 ok
        ``` json
        [{
        "id": 1,
        "make_name": "ferrari",
        "manufacturer": "ferrari",
        "created_at": "2018-10-10T22:54:25.588Z",
        "updated_at": "2018-10-10T22:54:25.588Z"
        },
        {
        "id": 2,
        "make_name": "Bugatti",
        "manufacturer": "Volkswagen",
        "created_at": "2018-10-10T22:54:25.599Z",
        "updated_at": "2018-10-10T22:54:25.599Z"
        }]
        ```

### GET Individual Make 
* `/api/v1/makes/:id`

    To get an individual make you need to send in the make ID through the params. This will return an array with the make object of the matching make id. - ex:
    * Status 200 ok
        ``` json
        [{
        "id": 2,
        "make_name": "Bugatti",
        "manufacturer": "Volkswagen",
        "created_at": "2018-10-10T22:54:25.599Z",
        "updated_at": "2018-10-10T22:54:25.599Z"
        }]
        ```

    Passing in an invalid id will return an error. - ex: 
    * Status: 404 not found 
        ``` json
        {  error: 'Could not find make with id 10.' }
        ```

### POST New Make  
* `/api/v1/makes`

    To add an individual make, you need to send in the new make_name and manufacturer through the body object. This will insert the new make into the database and return an object with the new make id. - ex:
    * Status: 201 created
        ```json
        { id: 6 }
        ```

    Requests with missing parameters will return an error. - ex:
    *  Status: 422 Unprocessable Entity
        ``` json
        { error: 'Expected format: { make_name: <String>, manufacturer: <String> }. You're missing a manufacturer property.' }
        ```

### DELETE - Individual Make
* `/api/v1/makes/:id`

    To delete an individual make you need to send in the make ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

    Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
        ``` json
        { error: 'This make does not exist!' }
        ```

### PATCH Individual Make 
* `/api/v1/makes/:id`

    To edit an individual make you need to send in make_name or manufacturer through the body object and the make ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

    Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
        ```json
        { error: 'Please prove a valid make id.' }
        ```

## Models

### GET All Models 
* `/api/v1/models`

    This endpoint will return an array with all the models in the database.  - ex:
    * Status 200 Ok
        ``` json
        [{
        "id": 2,
        "model_name": "458 Spider",
        "body": "Roadster ",
        "engine": null,
        "top_speed": null,
        "horse_power": null,
        "transmission": "7-speed automatic",
        "make_id": 1,
        "created_at": "2018-10-10T22:54:25.613Z",
        "updated_at": "2018-10-10T22:54:25.613Z"
        },
        {
        "id": 4,
        "model_name": "FF HELE V12",
        "body": "Coupe",
        "engine": null,
        "top_speed": null,
        "horse_power": null,
        "transmission": "6-speed manual ",
        "make_id": 1,
        "created_at": "2018-10-10T22:54:25.614Z",
        "updated_at": "2018-10-10T22:54:25.614Z"
        }]
        ```

### GET Model Search by Name
* `localhost:3000/api/v1/models?model_name=458 Italia`

    To return specific model searched by model_name, you need to send the model_name through the params. This will return an array with the model object of the matching model_name.
    * Status 200 Ok
        ``` json
        [{
        "id": 1,
        "model_name": "458 Italia",
        "body": "Coupe",
        "engine": "8",
        "top_speed": 366,
        "horse_power": 578,
        "transmission": "7-speed automatic",
        "make_id": 1,
        "created_at": "2018-10-10T22:54:25.604Z",
        "updated_at": "2018-10-10T22:54:25.604Z"
        }]
        ```

### GET Individual Model  
* `/api/v1/models/:id`

    To get an individual model you need to send in the model ID through the params. This will return an array with the model object of the matching model id. - ex:
    * Status 200 Ok
        ```json 
        [{
        "id": 1,
        "make_name": "ferrari",
        "manufacturer": "ferrari",
        "created_at": "2018-10-10T22:54:25.588Z",
        "updated_at": "2018-10-10T22:54:25.588Z"
        }]
        ```

    Passing in an invalid id will return an error. - ex:
    * Status 404
        ``` json
        { error: 'Could not find model with id 789.' }
        ```

### POST New model 
* `/api/v1/models`

    To add an individual model you need to send in the model_name,
    body, engine, top_speed, horse_power, transmission and make_id through the body object. This will insert the new model into the database and return an object with the new model id. - ex:
    * Status 201 Created
        ``` json
        { id: 7 }
        ```

    Requests with missing parameters will return an error. - ex:
    * Status: 422 Unprocessable Entity
        ``` json
        {
            error: 'Expected format:
            {
            model_name: <String>,
            body: <String>,
            engine: <String>,
            top_speed: <Integer>,
            horse_power: <Integer>,
            transmission: <String>,
            make_id: <Integer>
            }.
            You're missing a horse_power property.'
        }
        ```

### DELETE Individual model
*  `/api/v1/models/:id`

    To delete an individual model you need to send in the model ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

    Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
        ``` json
        { error: 'This model does not exist!' }
        ```

### PATCH Individual Model
* `/api/v1/models/:id`

    To edit an individual model you need to send in all or any of model_name, body, engine, top_speed, horse_power, transmission, make_id through the body object and the model ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

    Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
        ``` json
        { error: 'Please prove a valid model id.' }
        ```