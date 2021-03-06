import React from 'react';
import ParentForm from '.';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Parent Form', module)
  .add('Default', () => {
    let schema = {
      title: "A registration form",
      description: "A simple form example.",
      type: "object",

      properties: {
        details: {
          type: "object",
          title: "Details",
          properties: {
            firstName: {
              type: "string",
              title: "First name"
            },
            lastName: {
              type: "string",
              title: "Last name"
            },
            age: {
              type: "integer",
              title: "Age"
            },
            bio: {
              type: "string",
              title: "Bio"
            },
            password: {
              type: "string",
              title: "Password",
              minLength: 3
            },
            telephone: {
              type: "string",
              title: "Telephone",
              minLength: 10
            }
          }
        }
      }
    };

    return (
      <ParentForm schema={schema}/>
    )
  });
