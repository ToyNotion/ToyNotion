import { JoinTypes } from '../types/joinTypes';

export function validateEmail(email: string) {
    var emailReg = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    return emailReg.test(email);
}

export function insertOnlyNumber(number: string) {
    return number.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

export const onCheckNullData = (state: {}) => {
    const temp = Object.entries(state).map((item) =>
        item[1] === '' ? false : true,
    );
    return temp.includes(false);
};
export const onCheckPassword = (pw1: string, pw2: string) => {
    return pw1.trim() === pw2.trim();
};

export const onCheckBirth = (date: string) => {
    const temp: string = date.slice();
    const target: string = temp.split('-')[0];
    return Number(target) >= 1900;
};
