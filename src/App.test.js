import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('App Component',()=>{
  it('start with a count of 0',()=>{
    const wrapper = shallow(<App/>);
    const text = wrapper.find('p').text();
    expect(text).toBe('Count: 0');
  });
  
  it('if button text is Increament count',()=>{
    const wrapper = shallow(<App/>);
    const text = wrapper.find('button').text();
    expect(text).toBe('Increment count');
  });

  it('increament count by 1 on click of increament button',()=>{
    const wrapper = shallow(<App/>);
    const increamentBtn = wrapper.find('button.increment');
    increamentBtn.simulate('click');

    const text = wrapper.find('p').text();
    expect(text).toBe('Count: 1');
  });

  it('decrement count by 1 on click of decrement button',()=>{
    const wrapper = shallow(<App/>);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');

    const text = wrapper.find('p').text();
    expect(text).toBe('Count: 0');
  });
});