import * as userService from './userService.js';

const getMyProfile = async (req, res, next) => {
    try {
        const id = req.body;
        if (!id) {
            new Error('대충 파라미터가 비었다는 에러 <- 수정 필요')
        }

        const profile = await userService.getProfile(id);

        return res.status(201).json({ success: true, data: profile });
    } catch (error) {
        next(error);
    }
};

export {getMyProfile};