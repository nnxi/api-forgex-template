import express from 'expres';
const router = express.Router();


import { getMyProfile } from './user.routes';


router.get('/me', getMyProfile);


export default router;
