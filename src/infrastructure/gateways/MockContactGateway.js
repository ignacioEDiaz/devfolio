import { ContactGateway } from '../../domain/repositories/ContactGateway';

/** Gateway simulado: reemplazalo por HttpContactGateway cuando tengas backend. */
export class MockContactGateway extends ContactGateway {
  constructor({ delay = 900 } = {}) {
    super();
    this.delay = delay;
  }
  async send(message) {
    await new Promise((r) => setTimeout(r, this.delay));
    console.info('[contact] mensaje enviado', message.toJSON());
    return { id: crypto.randomUUID?.() ?? String(Date.now()) };
  }
}
