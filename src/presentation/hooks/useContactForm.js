import { useCallback, useState } from 'react';
import { useServices } from '../providers/ServicesContext';

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', message: '' };

export function useContactForm() {
  const { sendContactMessage } = useServices();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((er) => (er[name] ? { ...er, [name]: undefined } : er));
  }, []);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus('sending');
    const result = await sendContactMessage.execute(values);
    if (result.ok) {
      setStatus('success');
      setFeedback('¡Gracias! Tu mensaje llegó, te respondo en menos de 24 h.');
      setValues(EMPTY);
      setErrors({});
    } else if (result.errors) {
      setStatus('idle');
      setErrors(result.errors);
    } else {
      setStatus('error');
      setFeedback(result.error);
    }
  }, [sendContactMessage, values]);

  const reset = useCallback(() => { setStatus('idle'); setFeedback(''); }, []);

  return { values, errors, status, feedback, onChange, onSubmit, reset };
}
