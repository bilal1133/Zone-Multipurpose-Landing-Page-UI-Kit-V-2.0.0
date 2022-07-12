import { NextApiRequest, NextApiResponse } from 'next';
// _data
import { _jobs } from '../../../../_data/mock';

// ----------------------------------------------------------------------

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(_jobs);
}
