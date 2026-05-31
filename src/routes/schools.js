import { Router } from 'express';
import { query } from '../common/snowflake.js';

const MAX_LIMIT = 1000;
const DEFAULT_LIMIT = 100;

const router = Router();

router.get('/schools', async (req, res, next) => {
  try {
    const requested = Number.parseInt(req.query.limit, 10);
    const limit = Number.isFinite(requested)
      ? Math.min(Math.max(requested, 1), MAX_LIMIT)
      : DEFAULT_LIMIT;

    const rows = await query(
      `SELECT DISTINCT INSTNM AS school_name FROM COLLEGE_SCORECARD_DW.RAW.SAMPLE_2021_22_PP LIMIT ${limit}`,
    );
    res.json({ count: rows.length, rows });
  } catch (err) {
    next(err);
  }
});

export default router;
