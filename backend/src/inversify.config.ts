import { UserRepository } from '@repository/User';
import { AuthService, PassportService } from '@service/index';
import { Controller, TYPE } from '@socket';
import { MessageController } from '@controller/socket/Message';
import { AuthSocketController } from '@controller/socket/Auth';
import { MessageRepository } from '@repository/Message';
import { container } from './utils/container';

container
  .bind<Controller>(TYPE.Controller)
  .to(AuthSocketController)
  .whenTargetNamed('AuthSocketController');
container
  .bind<Controller>(TYPE.Controller)
  .to(MessageController)
  .whenTargetNamed('MessageController');

container.bind<AuthService>(AuthService).toSelf().inSingletonScope();
container.bind<PassportService>(PassportService).toSelf().inSingletonScope();

container.bind<UserRepository>(UserRepository).toSelf().inSingletonScope();
container
  .bind<MessageRepository>(MessageRepository)
  .toSelf()
  .inSingletonScope();

export default container;
