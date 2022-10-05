import { useEffect, useState } from 'react';

const useFetch = (options) => {
  const [state, setState] = useState({ loading: true, error: false, data: options.initialState });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(options.url);
        let data = await response.json();
        if (options.transformData) {
          data = data.map(options.transformData);
        }
        setState({ data, loading: false });
      } catch (error) {
        setState({ error });
      }
    }

    fetchData();
  }, [options.url, options.transformData]);

  return state;
};

export default useFetch;
