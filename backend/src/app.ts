import express, {
  Response,
  Request,
  NextFunction,
  urlencoded,
  json,
  Application,
} from 'express';

import compression from 'compression';
import cookieparser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';

import { LoggerFactory, Logger } from '@logger';
import passport from '@service/Passport';
import { Configuration } from '@env';
import { connect } from './configs/db-connect';

import container from './inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';

import '@controller/Auth';
import { errorHandle } from './middlewares/errorHandling';
import { InversifySocketServer } from '@socket';
import io from 'socket.io';

const { environment, url, server, db } = Configuration.appConfig;

class App {
  private readonly app: Application;

  private readonly port = server.PORT;

  private readonly url = server.BACKEND_URL;

  private readonly env = environment;

  private readonly logger = LoggerFactory.getLogger(App.name) as Logger;

  private server: InversifyExpressServer | null = null;

  constructor() {
    this.app = express();

    this.setAppMiddlewares();

    connect(db.MONGO_URI);
  }

  private setAppMiddlewares(): void {
    this.app.disable('x-powered-by');

    this.app.use([
      passport.initialize(),
      hpp(),
      helmet(),
      compression(),
      json({ limit: '1kb' }),
      urlencoded({ extended: false, limit: '1kb', parameterLimit: 10 }),
      cors({ origin: url, credentials: true }),
      cookieparser(),
    ]);
  }

  public async start() {
    this.server = new InversifyExpressServer(
      container,
      null,
      { rootPath: '/api' },
      this.app
    );

    this.server.setErrorConfig(app =>
      app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
        errorHandle(err, req, res, next)
      )
    );

    const appConfigured = this.server.build();

    const httpsServer = appConfigured.listen(this.port, () => {
      this.logger.info(
        `App is running at ${this.url} in ${this.env} mode.`,
        'this.app.listen'
      );
    });

    const socketServer = new InversifySocketServer(container, io(httpsServer));
    socketServer.build();
  }
}

export default App;
