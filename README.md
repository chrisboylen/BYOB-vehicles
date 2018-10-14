# BYOB-vehicles

[![Build Status](https://travis-ci.org/chrisboylen/BYOB-vehicles.svg?branch=master)](https://travis-ci.org/chrisboylen/BYOB-vehicles)

## Table of Contents
  * [Makes Endpoints](#makes)
    * [GET - All Makes](#get-all-makes)
    * [GET - Individual Make](#get-individual-make)
    * [POST - New Make](#post-new-make)
    * [PATCH - Individual Make](#patch-individual-make)
  * [Models Endpoints](#models)
    * [GET - All Models](#get-all-mmodels)
    * [GET - Model Search by Name](#get-model-search-by-name)
    * [GET - Individual Model](#get-individual-model)
    * [POST - New Model](#post-new-model)
    * [PATCH - Individual Model](#patch-individual-make)

## Endpoints
## Makes

### GET All Makes 
* `/api/v1/makes` 

  This endpoint will return an array with all the makes in the database. - ex: 
    * Status: 200 ok
    * `[{
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
    }]`

### GET Individual Make 
* `/api/v1/makes/:id`
 
  To get an individual make you need to send in the make ID through the params. This will return an array with the make object of the matching make id. - ex:
    * Status 200 ok
    * `[{
      "id": 2,
      "make_name": "Bugatti",
      "manufacturer": "Volkswagen",
      "created_at": "2018-10-10T22:54:25.599Z",
      "updated_at": "2018-10-10T22:54:25.599Z"
  }]`

  Passing in an invalid id will return an error. - ex: 
    * Status: 404 not found 
    * `{  error: 'Could not find make with id 10.' }`

### POST New Make  
* `/api/v1/makes`
 
  To add an individual make, you need to send in the new make_name and manufacturer through the body object. This will insert the new make into the database and return an object with the new make id. - ex:
    * Status: 201 created
    * `{ id: 6 }`
  
  Requests with missing parameters will return an error. - ex:
    *  Status: 422 Unprocessable Entity
    * `{ error: 'Expected format: { make_name: <String>, manufacturer: <String> }. You're missing a manufacturer property.' }`

* ### DELETE - Individual Make - `/api/v1/makes/:id`
 
  To delete an individual make you need to send in the make ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

  Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
    * `{ error: 'This make does not exist!' }`

### PATCH Individual Make 
* `/api/v1/makes/:id`

  To edit an individual make you need to send in make_name or manufacturer through the body object and the make ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

  Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
    * `{ error: 'Please prove a valid make id.' }`

## Models

### GET All Models 
* `/api/v1/models`

  This endpoint will return an array with all the models in the database.  - ex:
    * Status 200 Ok
    * `[{
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
    }]`

### GET Model Search by Name
* `localhost:3000/api/v1/models?model_name=458 Italia`

  To return specific model searched by model_name, you need to send the model_name through the params. This will return an array with the model object of the matching model_name.
    * Status 200 Ok
    * `[{
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
    }]`

### GET Individual Model  
* `/api/v1/models/:id`
 
  To get an individual model you need to send in the model ID through the params. This will return an array with the model object of the matching model id. - ex:
    * Status 200 Ok
    * `[{
        "id": 1,
        "make_name": "ferrari",
        "manufacturer": "ferrari",
        "created_at": "2018-10-10T22:54:25.588Z",
        "updated_at": "2018-10-10T22:54:25.588Z"
    }]`
  
  Passing in an invalid id will return an error. - ex:
    * Status 404
    * `{ error: 'Could not find model with id 789.' }`

### POST New model 
* `/api/v1/models`
 
  To add an individual model you need to send in the model_name,
    body, engine, top_speed, horse_power, transmission and make_id through the body object. This will insert the new model into the database and return an object with the new model id. - ex:
      * Status 201 Created
      * `{ id: 7 }`
    
    Requests with missing parameters will return an error. - ex:
      * Status: 422 Unprocessable Entity
      * `{ error: 'Expected format: { model_name: <String>, body: <String>, engine: <String>, top_speed: <Integer>, horse_power: <Integer>, transmission: <String>, make_id: <Integer> }. You're missing a horse_power property.' }`

### DELETE Individual model
*  `/api/v1/models/:id`
 
  To delete an individual model you need to send in the model ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

  Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
    * `{ error: 'This model does not exist!' }`

### PATCH Individual Model
* `/api/v1/models/:id`

  To edit an individual model you need to send in all or any of model_name, body, engine, top_speed, horse_power, transmission, make_id through the body object and the model ID through the params. This will return nothing. - ex:
    * Status: 204 No Content

  Passing in an invalid id will return an error. - ex:
    * Status: 422 Unprocessable Entity
    * `{ error: 'Please prove a valid model id.' }`