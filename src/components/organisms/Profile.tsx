import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { fullImage } from '../../modules/recoilAtoms/modalAtom';
import ProfileImage from '../atoms/ProfileImage';
import ProfileUserInfo from '../molecules/ProfileUserInfo';
import MY_IMAGE from '../templates/winter.webp';
import WINTER_IMAGE from '../templates/겨울.jpg';

interface ProfileProps {
    onViewFullImage: () => void;
    userId: number | null;
}

export type userInfoForm = {
    name: string;
    statusMessage?: string;
};

const Profile = ({ onViewFullImage, userId }: ProfileProps) => {
    const [isMyProfile, setIsMyProfile] = useState<boolean>(false);
    const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);
    const [profileImg, setProfileImg] = useState('');
    const setProfileImage = useSetRecoilState(fullImage);
    const [form, setForm] = useState<userInfoForm>({
        name: `윈터${userId}`,
        statusMessage: `상태메시지${userId}`,
    });

    const handleUpdateMode = () => {
        setIsUpdateMode((isUpdateMode) => !isUpdateMode);
    };
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    //풀화면으로 보여줄 이미지 업데이트
    // useEffect(() => {}, [isMyProfile]);

    useEffect(() => {
        if (userId === 0) {
            setIsMyProfile(true);
        }
        setProfileImg(userId === 0 ? MY_IMAGE : WINTER_IMAGE);
        setProfileImage(userId === 0 ? MY_IMAGE : WINTER_IMAGE);

        return () => {
            setIsMyProfile(false);
        };
    }, [userId]);
    return (
        <>
            <ProfileImage profileImg={profileImg} onClick={onViewFullImage} />
            <ProfileUserInfo
                userId={userId}
                form={form}
                isMyProfile={isMyProfile}
                isUpdateMode={isUpdateMode}
                onChangeInput={handleChangeInput}
                onUpdateMode={handleUpdateMode}
            />
        </>
    );
};

export default Profile;
