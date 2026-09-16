import { useEffect, useState } from 'react';
import { useServices } from '../providers/ServicesContext';

export function usePortfolio() {
  const { getPortfolio } = useServices();
  const [state, setState] = useState({ data: null, error: null, loading: true });

  useEffect(() => {
    let alive = true;
    getPortfolio.execute()
      .then((data) => alive && setState({ data, error: null, loading: false }))
      .catch((error) => alive && setState({ data: null, error, loading: false }));
    return () => { alive = false; };
  }, [getPortfolio]);

  return state;
}
