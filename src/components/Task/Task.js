import React from 'react';
import propTypes from 'prop-types';

// import '../index.css';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask}) {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input 
                    type="checkbox" 
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked" 
                />
                <span className="checkbox-custom" onlick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Insert title" style={{ textOverflow: 'ellipsis' }}/>
            </div>
            <div className="actions" onlick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    );
}

// eslint-disable-next-line react/no-typos
Task.propTypes = {
    /** omposition of the task */
    task: propTypes.shape({
        /** Id of the task */
        id: propTypes.string.isRequired,
        /** Title of the task */
        title: propTypes.string.isRequired,
        /** urrent state of the task */
        state: propTypes.string.isRequired,
    }),
    /** Event function to change te task to archived */
    onArchiveTask: propTypes.func,
    /** Event function to change te task to pinned */
    onPinTask: propTypes.func,
};