const app = require('./server');
const connection = require('./db/connection');
const config=require('./config/config')
connection()
    .then(() => {
  config.logger.info(`DB connected`);
        app.listen(config.app.PORT, () => {
        config.logger.info(`Sever Listening on localhost ${config.app.PORT}`)
    })
    })
    .catch((err) => {
        logger.warn(`Database connection failed: ${err}`);
    })

