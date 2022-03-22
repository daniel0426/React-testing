/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';

describe('HabitAddForm', ()=> {
    let onAdd;
    let input;
    let button;

    beforeEach(()=> {
        onAdd = jest.fn();

        //Arrange
        render(<HabitAddForm onAdd={onAdd} />);
        input =  screen.getByPlaceholderText('Habit');
        button= screen.getByText('Add');
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