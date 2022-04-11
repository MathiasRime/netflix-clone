import { NextApiResponse, NextApiRequest } from 'next';

import { parse } from '../../utils/apiResolvers';
import { Media } from '../../types/types';
import getInstance, {getAPIKEY} from '../../utils/axios';

interface Response {
  type: 'Success' | 'Error';
  data: Media[] | Error;
}

const apiKey = getAPIKEY();

export default async function handler(request: NextApiRequest, response: NextApiResponse<Response>) {
  const axios = getInstance();
  const { genre } = request.query;

  try {
    const result = await axios.get(`/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: genre,
        watch_region: 'US',
        with_networks:'213',
      }
    });
    const data = parse(result.data.results);

    response.status(200).json({ type: 'Success', data });
  } catch (error) {
    console.log(error.data);
    response.status(500).json({ type: 'Error', data: error.data });
  }
}
