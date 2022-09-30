# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

First run 'docker-compose up' to install all dependencies and spin up a docker container.

Test your connection by going to https://obelusfamily-anythink-market-x208q-pw7q5vr9q2rwgr-3000.githubpreview.dev/api/ping

Once you've established your backend is up and running, create a new user by going to https://obelusfamily-anythink-market-x208q-pw7q5vr9q2rwgr-3001.githubpreview.dev/register

For future references, make sure you run all scripts on one of. the containers created by 'docker-compose up'