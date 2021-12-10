import db from './models/index.mjs';

// import your routers here
import mainRouter from "./routers/mainRouter.mjs"

export default function bindRoutes(app) {

  // initialize the controller functions here
  // pass in the db for all callbacks
  
  // define your route matchers here using app
  app.use('/', mainRouter);
}
