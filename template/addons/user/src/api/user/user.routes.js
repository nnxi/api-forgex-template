import express from 'expres';
const router = express.Router();


import { getMyProfile } from './userRoutes';


router.get('/me', getMyProfile);


export default router;
