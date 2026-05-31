import { Router } from 'express';
import { query } from '../common/snowflake.js';

const router = Router();

router.get('/avg-admission-rate', async (req, res, next) => {
  try {
    const rows = await query(
      `SELECT AVG(ADM_RATE) as avg_adm_rate, count(*) as total_schools FROM COLLEGE_SCORECARD_DW.RAW.SAMPLE_2021_22_PP`,
    );
    res.json({ count: rows.length, rows });
  } catch (err) {
    next(err);
  }
});

export default router;
