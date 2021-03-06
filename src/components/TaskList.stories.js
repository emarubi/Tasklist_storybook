import React from 'react';

// import TaskList from './TaskList';
import { PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories';

// By importing TaskStories, we were able to compose the arguments (args for short) in our stories with minimal effort. 
// That way the data and actions (mocked callbacks) expected by both components is preserved.

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: PureTaskList,
    title: "TaskList",
    decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
    parameters: { assets: ["designs/list-1.png", "designs/list-2.png"] },
  };
// Decorators are a way to provide arbitrary wrappers to stories. 
// In this case we’re using a decorator `key` on the default export to add some `padding` around the rendered component. 
// They can also be used to wrap stories in “providers”.

const Template = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
    ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};