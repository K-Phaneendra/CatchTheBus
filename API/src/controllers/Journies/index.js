import { Router } from 'express';
import { fetchAll, submitJourneyForm } from './controller';

const router = new Router();

router.get('/', fetchAll);
router.post('/submitJourneyForm/:routeMapId/:locationId', submitJourneyForm);

export default router;
