/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { supabase } from '../../clients';

function Results() {
  // get results supabase
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await supabase
        .from('results')
        .select('*')
        .order('id', { ascending: false });
      if (error) {
        console.log(error);
      } else {
        setResults(data);
      }
    };
    fetchResults();
  }, []);

  return <div>vista </div>;
}

export default Results;
