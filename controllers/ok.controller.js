const db = require('../db')

class OKamountController {
    async createItem(req, res) {
        const {
            title,
            count
        } = req.body;

        try {
            const newItem = await db.query('INSERT INTO okna (title, count) values ($1, $2) RETURNING *', [title, count])
            res.json(newItem.rows[0])
        } catch (e) {
            console.log(e);
        }
    }
    async getItems(req, res) {
        const items = await db.query('SELECT * FROM okna')
        res.json(items.rows)
    }
    async getOneItem(req, res) {
        const {
            id
        } = req.params
        const item = await db.query('SELECT * from okna where id = $1', [id]);
        console.log(item.rows[0]);
        res.json(item.rows[0])
    }
    async updateItem(req, res) {
        const {
            id,
            title,
            count
        } = req.body;
        const item = await db.query('UPDATE okna set  title = $1, count = $2 where id = $3 RETURNING *', [title, count, id])
        res.json(item.rows[0])
    }
    async updateCount(req, res) {
        const {
            id,
            count
        } = req.body;
        const item = await db.query('UPDATE okna set   count = $1 where id = $2 RETURNING *', [count, id])
        res.json(item.rows[0])
    }
    async deleteItem(req, res) {
        const {
            id
        } = req.params
        const item = await db.query('DELETE  from okna where id = $1', [id]);
        res.json(item.rows[0])
    }
}

module.exports = new OKamountController()