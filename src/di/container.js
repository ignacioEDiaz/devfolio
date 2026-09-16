import { portfolioData } from '../infrastructure/data/portfolioData';
import { InMemoryPortfolioRepository } from '../infrastructure/repositories/InMemoryPortfolioRepository';
import { MockContactGateway } from '../infrastructure/gateways/MockContactGateway';
import { HttpContactGateway } from '../infrastructure/gateways/HttpContactGateway';
import { GetPortfolio } from '../application/usecases/GetPortfolio';
import { SendContactMessage } from '../application/usecases/SendContactMessage';

/** Composition root: único lugar donde se conectan implementaciones concretas. */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
const portfolioRepository = new InMemoryPortfolioRepository(portfolioData);
const contactGateway = endpoint ? new HttpContactGateway(endpoint) : new MockContactGateway();

export const container = Object.freeze({
  getPortfolio: new GetPortfolio(portfolioRepository),
  sendContactMessage: new SendContactMessage(contactGateway),
});
