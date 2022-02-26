import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { client } from '../../api';
import {
    fetchUpdateStatusMessage,
    fetchUpdateStatusName,
} from '../../api/profile';
import { fullImage, userIdState } from '../../modules/recoilAtoms/modalAtom';
import { UserInfoTypes } from '../../modules/recoilAtoms/userInfoAtom';
import ProfileImage from '../atoms/ProfileImage';
import ProfileUserInfo from '../molecules/ProfileUserInfo';
import MY_IMAGE from '../templates/winter.webp';
import WINTER_IMAGE from '../templates/겨울.jpg';

interface ProfileProps {
    onViewFullImage: () => void;
    userInfo: UserInfoTypes | null;
}

export type userInfoForm = {
    userSq: string;
    userNm: string;
    userMsg?: string;
};

const Profile = ({ onViewFullImage, userInfo }: ProfileProps) => {
    const [isMyProfile, setIsMyProfile] = useState<boolean>(false);
    const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);
    const [profileImg, setProfileImg] = useState('');
    const setProfileImage = useSetRecoilState(fullImage);
    const targetUserId = useRecoilValue(userIdState);
    // const { userSq, userImage, userMsg, userNm, userSq } = userInfo;
    const [form, setForm] = useState<userInfoForm>({
        userSq: '',
        userNm: '',
        userMsg: '',
    });
    const handleUpdateMode = () => {
        setIsUpdateMode((isUpdateMode) => !isUpdateMode);
    };
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        console.log('userInfo', userInfo);
        if (userInfo) {
            setForm({
                userSq: `${userInfo.userSq}`,
                userNm: userInfo.userNm,
                userMsg: userInfo.userMsg || '',
            });
            setProfileImg(
                userInfo.userSq === targetUserId ? MY_IMAGE : WINTER_IMAGE,
            );
            setProfileImage(
                userInfo.userSq === targetUserId ? MY_IMAGE : WINTER_IMAGE,
            );
            setIsMyProfile(userInfo.userSq === targetUserId ? true : false);
        }

        return () => {
            setIsMyProfile(false);
        };
    }, [targetUserId, userInfo]);

    const handleSubmit = async () => {
        console.log('1');
        try {
            console.log('2');
            const response = await axios.all([
                await fetchUpdateStatusName({
                    userSq: form.userSq,
                    userNm: form.userNm,
                }),
                await fetchUpdateStatusMessage({
                    userSq: form.userSq,
                    userMsg: form.userMsg,
                }),
            ]);
            console.log('3');
            console.log('response', response);
        } catch (error) {}
    };

    return (
        <>
            <ProfileImage
                profileImg={profileImg}
                onClick={onViewFullImage}
                isUpdateMode={isUpdateMode}
            />
            <ProfileUserInfo
                targetUserId={targetUserId}
                form={form}
                isMyProfile={isMyProfile}
                isUpdateMode={isUpdateMode}
                onChangeInput={handleChangeInput}
                onUpdateMode={handleUpdateMode}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default Profile;
