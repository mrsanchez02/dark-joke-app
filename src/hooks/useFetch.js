import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const config = {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }

  const refetch = () => {
          //set loading to true
    setLoading(true);

    axios
      .get(url,config)
      // send response to data state.
      .then((response) => {
        setData(response.data);
      })
      // if error occurs, will be sent to error state.
      .catch((err) => {
        setError(err);
      })
      /**
       * Finally loading will be set back to false, regarless
       * there was a response or an error.
       * */
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return { data, loading, error, refetch };
}

export default useFetch;