/**
 * Entidad de dominio: mensaje de contacto.
 * Contiene sus propias reglas de validación (no depende de React ni de la UI).
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s\d]{6,20}$/;

export class ContactMessage {
  constructor({ firstName = '', lastName = '', email = '', phone = '', message = '' }) {
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.email = email.trim();
    this.phone = phone.trim();
    this.message = message.trim();
  }

  /** @returns {Record<string,string>} errores por campo (vacío si es válido) */
  validate() {
    const errors = {};
    if (!this.firstName) errors.firstName = 'Ingresá tu nombre';
    if (!this.lastName) errors.lastName = 'Ingresá tu apellido';
    if (!this.email) errors.email = 'Ingresá tu email';
    else if (!EMAIL_RE.test(this.email)) errors.email = 'Email inválido';
    if (!this.phone) errors.phone = 'Ingresá tu teléfono';
    else if (!PHONE_RE.test(this.phone)) errors.phone = 'Teléfono inválido';
    if (this.message.length > 2000) errors.message = 'Máximo 2000 caracteres';
    return errors;
  }

  isValid() {
    return Object.keys(this.validate()).length === 0;
  }

  toJSON() {
    const { firstName, lastName, email, phone, message } = this;
    return { firstName, lastName, email, phone, message };
  }
}
