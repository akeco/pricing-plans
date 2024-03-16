# Dynamic pricing plans feature

## Project contains 
- Express API service
- React UI app
- Testing third party fetch app

### Pricing plans API service
It's implemented using Express / Prisma / Typescript / Docker compose.

**Set env variablees**
PORT=4040
DATABASE_URL=postgresql://postgres:\<secret>@localhost:5432/<db_name>?schema=public
API_KEY=random_api_key

To run DB execute run PostgreSQL with `docker-compose up`
To run API servicee execute
`yarn` - install dependencies
`npx prisma migrate dev` - execute prisma migrations
`npx prisma db seed` - execute prisma db seed
`yarn run dev` - run dev server

### Client React app
**Set env variable**
REACT_APP_API=http://localhost:4040

Run next commands
`yarn` - install dependencies
`yarn start` - runs server on localhost:3000
