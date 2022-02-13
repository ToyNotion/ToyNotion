import { HomeIcon, ChatIcon, MypageIcon, SearchIcon } from '../constant/Icons';

//하단 독바
export const navigationList = [
    {
        name: '홈',
        uri: '/main',
        icon: <HomeIcon />,
    },
    {
        name: '채팅',
        uri: '/main/chat',
        icon: <ChatIcon />,
    },
    {
        name: '검색',
        uri: '/main/search',
        icon: <SearchIcon />,
    },
    {
        name: '마이페이지',
        uri: '/main/mypage',
        icon: <MypageIcon />,
    },
];
