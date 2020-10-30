import React, { useState } from 'react';
import styled from 'styled-components';
import Headding from '../UI/Headding';

interface Drage {
    pid: string;
    title: string;
    img: string;
}

interface GetProps {
    User?: boolean;
    update: ({ pid, title, img }: Drage) => void;
    delupdate: (pid: string) => void;
}
function SearchData({ User, update, delupdate }: GetProps) {

    //내꺼 인지 전체 인지 검사
    // const [on,off]
    const [Itmes, setItmes] = useState([{
        id: 1, title: "수능 대비", img: "https://via.placeholder.com/100x100.png/e5c7ff/ffffff/?text=test", key: 0
    },
    { id: 2, title: "수능 대비", img: "https://via.placeholder.com/100x100.png/e5c7ff/ffffff/?text=test", key: 0 },
    { id: 3, title: "수능 대비", img: "https://via.placeholder.com/100x100.png/e5c7ff/ffffff/?text=test", key: 0 },
    { id: 4, title: "수능 대비", img: "https://via.placeholder.com/100x100.png/e5c7ff/ffffff/?text=test", key: 0 }]);
    return (
        <Wrap>
            {
                Itmes.map(
                    (data) =>
                        <SerachItem key={data.id} onChange={(e) => e.target.checked ? update({ pid: String(data.id), title: data.title, img: data.img }) : delupdate(String(data.id))
                        }
                            title="수능 대비" img="https://via.placeholder.com/100x100.png/e5c7ff/ffffff/?text=test" />)
            }
        </Wrap>
    );
}

interface SerachProps {
    title: string;
    img: string;
    onChange: (e: any) => void;
}
function SerachItem({ title, img, onChange }: SerachProps) {
    return (
        <IWrap>
            <img src={img} alt="" style={{ maxWidth: "200px", maxHeight: "200px" }} />
            <Headding tag="h5" tagStyle="h6">{title}</Headding>
            <input type="checkbox" onClick={(e) => onChange(e)} />
        </IWrap>
    )
};
const Wrap = styled.div`
display: flex;
flex-direction: column;
padding-top:30px;
max-width:250px;
width:100%;
max-height:400px;
overflow-y:scroll;

`;
const IWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    &>input{
        
        display:none;
    }
    &:hover{
        &>input{
            display:block;
            position: absolute;
        top: 0;
        left: 20%;
        }
    }
`;

export default SearchData;