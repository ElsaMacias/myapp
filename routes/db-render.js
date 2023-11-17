//** BD

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgres://elsa:rWjB9dTjKG51eVdiiDQKFDF2H2Zrlyb8@dpg-clbjsjft6quc738elbu0-a/test_table_ep6u'
//,
 /* ssl: {
    rejectUnauthorized: false
  }
*/
});

//**BD

var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', async (req, res) => {
    try {
      const client = await pool.connect();
// nuevo para REnder las dos lineas y lo comentado oculto
const result = await client.query('SELECT NOW()');
return res.json(result.rows[0]);
    /*  const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db', results );
*/
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
module.exports = router;
