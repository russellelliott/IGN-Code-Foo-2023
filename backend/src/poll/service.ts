import {Poll} from './schema';
import {pool} from '../db';

export class PollService {
  public async list(id?: string): Promise<Poll[]> {
    let select = 'SELECT * FROM category';
    if (id) {
      select += ' WHERE id = $1';
    }
    const query = {
      text: select,
      values: id ? [`${id}`] : [],
    };
    const {rows} = await pool.query(query);
    const categories = [];
    for (const row of rows) {
      categories.push({id: row.id, parent: row.parent, data: row.data.name, votes: row.data.votes});
    }
    return categories;
  }

  public async add(id: string): Promise<Poll> {
    //const queryString = `INSERT INTO category(parent, data) VALUES ($2, jsonb_build_object('name', $1::text)) RETURNING *;`;
    const queryString = `UPDATE options SET votes = votes+1 WHERE id = $1 RETURNING *;`;

    const query = {
      text: queryString,
      values: [id],
    };

    const {rows} = await pool.query(query);
    return {
      id: rows[0].id,
      parent: rows[0].parent,
      data: rows[0].data.name,
      votes: rows[0].data.votes
    };
  }

}
