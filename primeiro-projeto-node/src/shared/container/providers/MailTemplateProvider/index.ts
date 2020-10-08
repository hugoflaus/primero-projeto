import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsMailtemplateProvider from './implementations/HandlebarsMailTemplateprovider';

const providers = {
  handlebars: HandlebarsMailtemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
