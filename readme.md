# Challenge Victoria Gonzalez

## Configuring the .env File

The .env file is used to store environment-specific configuration. Make sure to create this file in the project's root directory and provide the following values based on the database you are using:


## PostgreSQL

```
DB_URL=postgresql://usuario:contraseña@host:puerto/nombre_basedatos
```

## MySQL

```
DB_URL=mysql://usuario:contraseña@host:puerto/nombre_basedatos
```

## SQLite

```
DB_URL=file:./ruta_al_archivo.sqlite
```

Replace user, password, host, port, database_name, and path_to_file.sqlite with the corresponding values for your database.
Don't forget to change the provider in your schema.prisma depending on the one you're using, in this case I'm using postgredb:

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Applying Migrations to the Database
This command will apply the necessary migrations to reflect the updated schema in your database.

```bash
npx prisma db push
```

## You can also try with an online database like ElephantSQL, follow next steps:


1 Create an account on ElephantSQL at https://www.elephantsql.com/ if you don't have one already.

2 Log in to ElephantSQL and create a new PostgreSQL database instance.

3 Copy the connection URL provided by ElephantSQL as you will need it later.

4 Obtain the database access credentials, including the username and password.

5 fill the .env with the corresponding information like this: 


```
DB_URL=postgresql://usuario:contraseña@host:puerto/nombre_basedatos
```

6 run this command: 

```bash
npx prisma db push
```

## Once you finish performing the migrations, you can go to the index.ts file inside the src folder and add a new user. After you finish adding it, don't forget to execute the following command to transpile the files
```bash
tsc -w 
```

## And then, in the index.js file inside the dist folder, you can try the following command to save the user or, alternatively, get the validation errors.
```bash
node index.js
```
