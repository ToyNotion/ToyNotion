import { atom } from 'recoil';

export const modalState = atom<boolean>({
    key: 'modalState',
    default: false,
});
export const userIdState = atom<null | number>({
    key: 'userIdState',
    default: null,
});
