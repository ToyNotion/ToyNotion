import { client } from '.';

export type userNameTypes = {
    userSq: string;
    userNm: string;
};
export type userStatusMsgTypes = {
    userSq: string;
    userMsg?: string;
};

export const fetchUpdateStatusName = (statusForm: userNameTypes) => {
    return client.patch('user/profile/name', statusForm);
};
export const fetchUpdateStatusMessage = (statusForm: userStatusMsgTypes) => {
    return client.patch('user/profile/msg', statusForm);
};

// export const fetchJoin = (url: string, joinForm: JoinTypes) => {
//     return client.post(url, joinForm);
// };

// export const fetchUserCheck = (url: string) => {
//     return client.get(url);
// };
