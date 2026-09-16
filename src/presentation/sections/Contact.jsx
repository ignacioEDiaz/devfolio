import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { SplitHeading } from '../components/SplitHeading';
import { Crosshair } from '../components/Crosshair';
import { useContactForm } from '../hooks/useContactForm';

const FIELDS = [
  { name: 'firstName', label: 'Nombre', placeholder: 'Tu nombre', required: true, autoComplete: 'given-name' },
  { name: 'lastName', label: 'Apellido', placeholder: 'Tu apellido', required: true, autoComplete: 'family-name' },
  { name: 'email', label: 'Email', placeholder: 'nombre@empresa.com', required: true, type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Teléfono', placeholder: '+54 11 0000 0000', required: true, type: 'tel', autoComplete: 'tel' },
];

export function Contact() {
  const { values, errors, status, feedback, onChange, onSubmit, reset } = useContactForm();

  return (
    <section className="section contact" id="contacto">
      <div className="container contact__grid">
        <div className="contact__head">
          <Crosshair style={{ left: 0, bottom: 0 }} />
          <Crosshair style={{ right: 0, bottom: 0 }} />
          <Reveal><SectionLabel>Contacto</SectionLabel></Reveal>
          <Reveal delay={120}>
            <SplitHeading before="Busco mi próximo" accent="equipo." after="Escribime." />
          </Reveal>
        </div>

        <div className="contact__panel">
          <div className="contact__art" aria-hidden="true">
            <span /><span /><span /><span />
          </div>

          {status === 'success' ? (
            <div className="form-msg form-msg--ok" role="status">
              <p>{feedback}</p>
              <button type="button" className="btn" onClick={reset}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              {FIELDS.map((f, i) => (
                <Reveal className={`field${errors[f.name] ? ' field--error' : ''}`} key={f.name} delay={i * 80}>
                  <label htmlFor={f.name}>
                    {f.label}{f.required && <span className="req"> *</span>}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type ?? 'text'}
                    placeholder={f.placeholder}
                    autoComplete={f.autoComplete}
                    value={values[f.name]}
                    onChange={onChange}
                    aria-invalid={Boolean(errors[f.name])}
                    aria-describedby={errors[f.name] ? `${f.name}-err` : undefined}
                  />
                  {errors[f.name] && <small id={`${f.name}-err`}>{errors[f.name]}</small>}
                </Reveal>
              ))}
              <Reveal className={`field${errors.message ? ' field--error' : ''}`} delay={320}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={5} placeholder="Contame sobre tu proyecto..."
                  value={values.message} onChange={onChange} maxLength={2000} />
                {errors.message && <small>{errors.message}</small>}
              </Reveal>
              {status === 'error' && <p className="form-msg form-msg--err" role="alert">{feedback}</p>}
              <Reveal delay={400}>
                <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                  <span className="btn__text" data-text={status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}>
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                  </span>
                </button>
              </Reveal>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
