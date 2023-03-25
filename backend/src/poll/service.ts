import {Poll} from './schema';
import {pool} from '../db';

export class PollService {
  public async list(id: string): Promise<Poll[]> {
    let select = 'SELECT * FROM options WHERE parent = $1';
    const query = {
      text: select,
      values: [`${id}`],
    };
    const {rows} = await pool.query(query);
    return rows;
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
      data: rows[0].data,
      votes: rows[0].votes
    };
  }

}
