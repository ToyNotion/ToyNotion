import moment from 'moment';

export const joinInitForm = {
    userId: '',
    userPwd: '',
    userPwdCheck: '',
    userNm: '',
    userSex: '여성',
    userHp: '',
    userBirth: moment().format('YYYY-MM-DD'),
};
