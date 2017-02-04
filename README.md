#PEAN Skeleton

#### PEAN Stack Skeleton (MEAN with PostgreSQL instead of MongoDB)
=========

<strong>After downloading</strong>

1. Use "npm install" to install dependencies.
2. Download and install [PostgreSQL](https://www.postgresql.org/ "PostgreSQL"). A good Mac client for working with PostgreSQL is [Postico](https://eggerapps.at/postico/ "Postico"),
3. You can use either [PG](https://www.npmjs.com/package/pg "PG") or [connect-pg-simple](https://www.npmjs.com/package/connect-pg-simple "connect-pg-simple").
both installed as dependencies, to connect to your PostgreSQL Database. Use the links for documentation and examples.
4. For production, place your secret connection variables in the .env file before pushing your repo to GitHub (or wherever you commit your project).
The .env file will be ignored by Git, per the .gitignore file.