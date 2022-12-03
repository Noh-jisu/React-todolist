import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done && css`
        border: 1px solid #38d9a9;
        color: #e8d9a9;
    `}
`;
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done && css`
        color: #ced4da;
    `}
`;
const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
        ${Remove} {
            opacity: 1;
        }
    }
`;

function TodoItem ({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({
        type: "TOGGLE",
        id
    });
    const onRemove = () => dispatch({
        type: 'REMOVE',
        id
    });

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>
                {text}
            </Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

/* 
    React.memo를 사용함으로써 컴포넌트를 최적화해줄 수 있다.
    ex) 프로젝트 생성하기(첫번째 항목)를 눌렀을때 아래에 있는 컴포넌트들은 리렌더링 하지 않는다.
    (다른 컴포넌트들은 dispatch만 가져오고 있기 때문에)
    만약 하나의 context에 state, dispatch를 한번에 작성한다면 리렌더링 한다.
*/
export default React.memo(TodoItem);