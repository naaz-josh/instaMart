import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login Form', () => {
    test('renders login form with email and password fields', () => {
      
      render(<BrowserRouter><Login /></BrowserRouter>);
      expect(screen.getByPlaceholderText('Enter Email..')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter your password here...')).toBeInTheDocument();
    })
    test('validates email field', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        const emailInput = screen.getByPlaceholderText('Enter Email..');
        fireEvent.change(emailInput, { target: { value: 'chetan12356+@gmail.com' } });
        fireEvent.blur(emailInput);
        await waitFor(() => {
          expect(screen.getByText('*Invalid email address')).toBeInTheDocument();
        });
      });
    test('validates password field', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        const passwordInput = screen.getByPlaceholderText('Enter your password here...');
        fireEvent.change(passwordInput, { target: { value: 'Chetan@0' } });
        fireEvent.blur(passwordInput);
        await waitFor(() => {
          expect(screen.getByText('*Password must be at least 8 characters')).toBeInTheDocument();
        });
      });
    test('submits form with valid input', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        const emailInput = screen.getByPlaceholderText('Enter Email..');
        const passwordInput = screen.getByPlaceholderText('Enter your password here...');
        const submitButton = screen.getByTestId('login');
    
        fireEvent.change(emailInput, { target: { value: 'chetan123+@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'Chetan@0987' } });
        fireEvent.click(submitButton);
      });
      test('shows success toast when form is submitted successfully',async () => {
       
    
      await  waitFor(() => {
          expect(screen.getByText('Successfully Logged In')).toBeInTheDocument();
        });
      });
})
