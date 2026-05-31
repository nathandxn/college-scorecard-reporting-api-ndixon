import { Router } from 'express';
import { query } from '../common/snowflake.js';
import { setLimit } from '../common/limits.js';

const router = Router();

router.get('/schools', async (req, res, next) => {
  try {
    const limit = setLimit(req.query.limit);

    const rows = await query(
      `SELECT DISTINCT INSTNM AS school_name FROM COLLEGE_SCORECARD_DW.RAW.SAMPLE_2021_22_PP LIMIT ${limit}`,
    );
    res.json({ count: rows.length, rows });
  } catch (err) {
    next(err);
  }
});

export default router;
