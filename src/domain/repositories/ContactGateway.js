/**
 * Contrato (puerto) para enviar mensajes de contacto.
 * @interface
 */
export class ContactGateway {
  /** @param {import('../entities/ContactMessage').ContactMessage} _message */
  async send(_message) { throw new Error('Not implemented'); }
}
