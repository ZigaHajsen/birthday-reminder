import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import List from './List';

interface ListProps {
  people: [
    {
      id: number;
      name: string;
      age: number;
      image: string;
    }
  ];
}

const defaultProps: ListProps = {
  people: [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
  ],
};

const findByTestAttribute = (wrapper: ShallowWrapper, value: string) => {
  return wrapper.find(`[data-test='${value}']`);
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<List {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, 'list-component');
  expect(component.length).toBe(1);
});
