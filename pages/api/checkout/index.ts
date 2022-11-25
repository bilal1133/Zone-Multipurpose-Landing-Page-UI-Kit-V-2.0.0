import { NextApiRequest, NextApiResponse } from 'next';
import MollieService from '../../../src/service/MollieService';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const user = await MollieService.createUser({
      name: 'Amin',
      email: 'aminrafaey543@gmail.com',
    });
    //  NEEDto User User Id in Data Base
    const data = await MollieService.createOrderForCustomer({
      customerId: user.id,
      description: 'Our First Payment',
      amount: {
        currency: 'EUR',
        value: '0.01',
      },
    });
    console.log('🔥🍊🍉 user', user);
    console.log('🔥🍊🍉 data', data._links.checkout.href);
    res.redirect(data._links.checkout.href);
    return;

    // if (true) {
    // } else {
    //   res.status(404).json({ message: `Course with id: ${id} not found.` });
    // }
  } catch (error) {
    res.status(200).json({ error });
    console.log('🔥🔥🔥🔥 ', error);
  }
}
