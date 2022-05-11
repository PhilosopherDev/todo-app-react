import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox
} from 'react-icons/md';
import classnames from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
    const { checked, text } = todo;
    return (
        <div className="TodoListItem">
            <div className={classnames("checkbox", { checked })}>
                { 
                    checked ? (
                        <MdCheckBox />
                    ): (
                        <MdCheckBoxOutlineBlank />
                    )
                }
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;