import { ContactGateway } from '../../domain/repositories/ContactGateway';

/** Gateway real vía HTTP (por ejemplo Formspree, un endpoint propio, etc.). */
export class HttpContactGateway extends ContactGateway {
  constructor(endpoint) {
    super();
    this.endpoint = endpoint;
  }
  async send(message) {
    const res = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(message.toJSON()),
    });
    if (!res.ok) throw new Error('El servidor rechazó el mensaje');
    return res.json().catch(() => ({}));
  }
}
