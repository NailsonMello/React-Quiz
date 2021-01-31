import connect from '../../src/utils/database';

export default async (req, res) => {
    if (req.method === 'GET') {

        const { db } = await connect();
        const response = await db.find().toArray();

        res.status(200).json(response);
    } else {
        res.status(400).json({ error: 'Wrong request method' });
    }
}