<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development

1. clone the repository
2. run 
```
yarn install
```
3. should have nest cli installed globally
```
npm i -g @nestjs/cli
```
4. up the database
```
docker-compose up -d
```
5. copy the ```.env.template``` to ```.env```

6. fill up the environment variables inside the ```.env``` file

7. run the application
```
yarn start:dev
```

8. seed the database
```
http://localhost:3000/api/seed
```

## Used stack
* Nest
* MongoDB