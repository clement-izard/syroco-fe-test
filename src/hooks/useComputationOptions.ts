import { OptionsData } from '@/types';

import { useState, useEffect } from 'react';

const useComputationOptions = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [options, setOptions] = useState<OptionsData>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/computation-options');
        const data = await response.json();
        setOptions(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, options };
};

export default useComputationOptions;
