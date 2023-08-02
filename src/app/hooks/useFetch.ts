import {IMovie} from '../interfaces/IMovie';
import {useState, useEffect} from 'react';
import {Platform} from 'react-native';

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<IMovie[]>([]);
  const [isLoading, setLoading] = useState(true);
  const baseUrl =
    Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}:3001/${endpoint}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    refetch,
  };
};

export default useFetch;
