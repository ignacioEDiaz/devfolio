import { ContactMessage } from '../../domain/entities/ContactMessage';

/**
 * Caso de uso: validar y enviar un mensaje de contacto.
 * Devuelve un resultado explícito en lugar de lanzar excepciones hacia la UI.
 */
export class SendContactMessage {
  /** @param {import('../../domain/repositories/ContactGateway').ContactGateway} gateway */
  constructor(gateway) {
    this.gateway = gateway;
  }

  /** @returns {Promise<{ok: true} | {ok: false, errors?: Record<string,string>, error?: string}>} */
  async execute(input) {
    const message = new ContactMessage(input);
    const errors = message.validate();
    if (Object.keys(errors).length) return { ok: false, errors };
    try {
      await this.gateway.send(message);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e?.message || 'No se pudo enviar el mensaje' };
    }
  }
}
