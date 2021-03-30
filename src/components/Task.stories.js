import React from 'react';

import Task from './Task';

// eslint-disable-next-line import/no-anonymous-default-export
// export default: the component itself
// title: how to refer to the component in the sidebar of the Storybook app
// excludeStories -- exports in the story file that should not be rendered as stories by Storybook.
// argTypes -- specify the args behavior in each story
// To define our stories, we export a function for each of our test states to generate a story. 
// The story is a function that returns a rendered element (i.e. a component with a set of props) 
// in a given state---exactly like a Stateless Functional Component.
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: Task,
    title: 'Task',
};

// As we have multiple permutations of our component, it's convenient to assign it to a Template variable. 
// Introducing this pattern in your stories will reduce the amount of code you need to write and maintain.
const Template = args => <Task {...args} />;

// Template.bind({}) for making a copy of a function. 
// We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default = Template.bind({});

// Arguments, allow us to live edit our components with the controls addon without restarting Storybook. 
// Once an args value changes so does the component.
// When creating a story we use a base task arg to build out the shape of the task the component expects. 
// This is typically modelled from what the true data looks like. Again, export-ing this shape will enable us to reuse it in later stories.
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};