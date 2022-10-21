# bank-node-api
A simple NodeJS API that processes the amount of total balance that a user has between all their current banking accounts.


## Technologies

  - NodeJS 14 (LTS)
  - Typescript
  - ExpressJS
  - Nodemon

## Design patterns and architectures

  - Clean Architecture
  - Repository Pattern
  - SOLID Principles
  - Dependency Injection

## How to run

  You need to have NodeJS 14 and npm/yarn installed.
  ### Installing dependencies

  Inside of the project root directory, execute one of the following commands:

  ```bash
    # With npm
    $ npm i
  ```

  ```bash
    # With yarn
    $ yarn
  ```

  ### Running the server

  Inside of the project root directory, execute one of the following commands:

  ```bash
    # Development mode
    $ npm run start:dev
  ```

  ```bash
    # Production mode
    $ npm run start
  ```

  If you want, you can choose the server port in two ways:

  
  - Running the command and specifying the PORT:
    ```bash
      $ PORT=3001 npm run start
    ```
  - Creating a .env file inside the project root directory and specifying the PORT environment variable:
    ```javascript
      // .env file

      PORT=3001
    ```

## Endpoints

  ### /accounts/balance (GET)
  **Description:** Receives the user_name queryparam and
returns a number, which reflects the sum of the account balances of that user in USD.

  **Request example:**
  ```
  GET /accounts/balance?user_name=Tom
  ```
  **Response example:**
  ```json
  {
    "result": 3896.365048543689
  }
  ```