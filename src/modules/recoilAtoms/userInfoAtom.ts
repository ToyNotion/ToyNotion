import { atom } from 'recoil';

export type UserInfoTypes = {
    userSq: number;
    userId: string;
    userNm: string;
    userMsg: string | null;
    userImage: string | null;
};
export const userInfoState = atom<UserInfoTypes | null>({
    key: 'userInfoState',
    default: null,
});
