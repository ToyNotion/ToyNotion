// import { Client, Stomp } from '@stomp/stompjs';
import { Stomp } from '@stomp/stompjs';
import { send } from 'process';
import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import DefaultButton from '../atoms/DefaultButton';

export type message = {
    username: string;
    content: string;
};

// console.log(Stomp);

type messageType = {
    roomId: any;
    writer: any;
    message: string;
};
const SocketTest = () => {
    let sockJS = new SockJS('http://localhost:8080/stomp/chat');
    let stomp = Stomp.over(sockJS);
    const [talk, setTalk] = useState<string>();

    const connect = () => {
        stomp.connect(
            {
                reconnectDelay: 5000,
            },
            () => subcribe(),
        );
        stomp.activate();
    };
    const disConnect = () => {
        console.log('소켓 끈다 !');
        stomp.deactivate();
        stomp.disconnect();
    };
    const subcribe = () => {
        stomp.subscribe('/sub/message', (data) => {
            console.log('data', data);
            const newMessage: string = JSON.parse(data.body) as string;

            console.log('newMessage', newMessage);
            setTalk(() => newMessage);
        });
    };
    // connect();
    useEffect(() => {
        stomp.activate();
    }, [stomp]);
    useEffect(() => {
        connect();
        return () => {
            disConnect();
        };
    }, []);

    console.log('talk', talk);

    const SOCKET_SEND_URL = '/pub/message';
    // const SOCKET_RECEIVE_URL = '/sub/chat/room/1';
    const [message, setMessage] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setMessage(value);
    };
    const onSend = () => {
        stomp.send(
            SOCKET_SEND_URL,
            { nack: { name: '1' } },
            JSON.stringify(message),
        );
    };

    // stomp.subscribe(SOCKET_RECEIVE_URL, (message) => setTalk(message));
    return (
        <div className={'container'}>
            <input type={'text'} value={message} onChange={onChange} />
            <h1>{talk}</h1>

            <DefaultButton
                backgroundColor="violet"
                text="보내기"
                onClick={onSend}
            />
        </div>
    );
};

export default SocketTest;
