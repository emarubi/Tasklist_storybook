import React from 'react';
import ReactDOM from 'react-dom';

import '@testing-library/jest-dom/extend-expect';
// the story that we would like to test is imported here
import { WithPinnedTasks } from './TaskList.stories'; 
// we want our TaskList to render any pinned tasks before unpinned tasks that it has passed in the tasks prop
// we can use Jest to render the story to the DOM and run some DOM querying code to verify salient features of the output

it('renders pinned tasks at the start of the list', () => {
    const div = document.createElement('div');
    // story args used with our test
    ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

    // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
    expect(lastTaskInput).notBe(null);

    ReactDOM.unmountComponentAtNode(div);
});