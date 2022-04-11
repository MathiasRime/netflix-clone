import { NextApiRequest, NextApiResponse } from 'next';
import axios, {getAPIKEY} from '../../utils/axios';
import { Media, MediaType } from '../../types/types';
import { parse } from '../../utils/apiResolvers';

interface Response {
  type: 'Success' | 'Error';
  data: Media[] | Error;
}

const apiKey = getAPIKEY();

export default async function handler(request: NextApiRequest, response: NextApiResponse<Response>) {
  const { type, time } = request.query;

  try {
    const result = await axios().get(`/trending/movie/${time}`, {
      params: {
        api_key: apiKey,
        watch_region: 'US'
      }
    });
    const data = parse(result.data.results);

    response.status(200).json({ type: 'Success', data });
  } catch (error) {
    console.log(error.data);
    response.status(500).json({ type: 'Error', data: error.data });
  }
}
