import { NextApiRequest, NextApiResponse } from 'next';
// _data
import { _jobs } from '../../../../_data/mock';

// ----------------------------------------------------------------------

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const filtered = _jobs.find((job) => job.id === id);

  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Job with id: ${id} not found.` });
  }
}
