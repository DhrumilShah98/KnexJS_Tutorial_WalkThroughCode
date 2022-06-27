# Knex.js
- [Knex.js](http://knexjs.org/) (pronounced /kəˈnɛks/) is a "batteries included" SQL query builder for PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.

- It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full-featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

- Youtube Channel - [WalkThroughCode](https://www.youtube.com/watch?v=4nP6zFEvF_c&list=PL7sCSgsRZ-smPRSrim4bX5TQfRue1jKfw)

### Knex.js Migration Command

- To create a migration file, run the below command. This command will only work if knex is installed globally.

  ```
  knex migrate:make <migration_name>
  ```

- For knex installed locally, run the below command.

  ```
  npx knex migrate:make <migration_name>
  ```

### Knex.js Seed Command

- To create a seed file, run the below command. This command will only work if knex is installed globally.

  ```
  knex seed:make <seed_name>
  ```

- For knex installed locally, run the below command.

  ```
  npx knex seed:make <seed_name>
  ```

### Run Latest Migration

- To run the latest migration, use below command if knex is installed globally.

  ```
  knex migrate:latest
  ```
- If knex is installed locally, run the below command.

  ```
  npx knex migrate:latest
  ```

### Run Seeds

- To run the seed files, use below command if knex is installed globally.

  ```
  knex seed:run
  ```
- If knex is installed locally, run the below command.

  ```
  npx knex seed:run
  ```

### Run Migration with Up/Down Commands
- Up command when knex is installed globally.

  ```
  knex migrate:up <migration_file.js>
  ```

- Up command when knex is installed locally.

  ```
  npx knex migrate:up <migration_file.js>
  ```

- Down command when knex is installed globally.

  ```
  knex migrate:down <migration_file.js>
  ```

- Down command when knex is installed locally.
  ```
  npx knex migrate:down <migration_file.js>
  ```