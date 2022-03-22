/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';
import renderer from 'react-test-renderer';

describe('HabitAddForm', ()=> {

    it('renders', ()=> {
        //snapshot test 
        const component = renderer.create(<HabitAddForm onAdd={jest.fn()}/>)
        expect(component.toJSON()).toMatchSnapshot();
    })

    describe('Form Submit', ()=> {
        let onAdd;
        let input;
        let button;
    
        beforeEach(()=> {
            onAdd = jest.fn();
            //Arrange
            render(<HabitAddForm onAdd={onAdd} />);
            input =  screen.getByPlaceholderText('Habit');
            button= screen.getByText('Add Habit');
        })
    
        it('calls onAdd when button is clicked and valid habit is entered', ()=> {
            //Act
            userEvent.type(input, 'New Habit');
            userEvent.click(button);
            //Assert
            expect(onAdd).toHaveBeenCalledWith('New Habit');
        })
    
        it('does not call onAdd when the habit is empty', ()=> {
             //Act
             userEvent.type(input, '');
             userEvent.click(button);
             //Assert
             expect(onAdd).toHaveBeenCalledTimes(0);
        })
    })
    
})