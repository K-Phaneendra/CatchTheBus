import { Router } from 'express';

import Journies from '../controllers/Journies';
import Buses from '../controllers/Buses';

const router = new Router();

router.use('/journies', Journies);
router.use('/buses', Buses);

export default router;
