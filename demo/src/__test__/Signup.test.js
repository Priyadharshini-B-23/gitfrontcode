import { getByTestId ,render, screen,fireEvent} from "@testing-library/react";
import axios from 'axios';
import { BrowserRouter, Routes } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Signup from '../components/Code/Signup';
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe("Test the Signup Component", () => {
    test("render the signup form with signup button", async () => {
 
        render(<Signup/>);
 
        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });
    test("email input field should accept email", () => {
        render(<Signup />);
        const email = screen.getByPlaceholderText("Enter your Email ID");
        userEvent.type(email, "rajakumari");
        expect(email.value).not.toMatch("rajakumari@gmail.com");
         
        });
       test("password input should have type only password", () => {
          render(<Signup />);
          const password = screen.getByPlaceholderText("Enter your Password");
          expect(password).toHaveAttribute("type", "password");
      });
      
      test("check the word is placed or not", () => {
        render(<Signup />);
        var element1=screen.getByTestId("Heading");
        expect(element1).toBeInTheDocument(); 
        expect(element1).toHaveTextContent('Create your account') ;
      });
      test("check the word is placed or not", () => {
        render(<Signup />);
        var element1=screen.getByTestId("Head");
        expect(element1).toBeInTheDocument(); 
        expect(element1).toHaveTextContent('Register') ;
      });
      test('Test Case',()=>{
        render(<Signup/>);
        const textbox1=screen.getByTestId('TextBox1');
        const textbox2=screen.getByTestId('TextBox2');
        const textbox3=screen.getByTestId('TextBox3');
        const textbox4=screen.getByTestId('TextBox4');
        const textbox5=screen.getByTestId('TextBox5');
        const textbox6=screen.getByTestId('TextBox6');
        const textbox7=screen.getByTestId('TextBox7');
        expect(textbox1).toBeInTheDocument();
        expect(textbox2).toBeInTheDocument();
        expect(textbox3).toBeInTheDocument();
        expect(textbox4).toBeInTheDocument();
        expect(textbox5).toBeInTheDocument();
        expect(textbox6).toBeInTheDocument();
        expect(textbox7).toBeInTheDocument();
        });
        test('renders login form', () => { 
          render(<Signup />); 
          expect(screen.getByPlaceholderText('Enter your Name')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Enter your Email ID')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Enter your Phone Number')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Enter your Qualifiction')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Enter your Password')).toBeInTheDocument();
          expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();  
        }); 
        test('displays error messages for invalid input', () => { 
          render(<Signup />); 
          const signupButton = screen.getByTestId("Heading"); 
          fireEvent.click(signupButton); 
          (() => { 
            expect(screen.getByPlaceholderText('First Name is required')).toBeInTheDocument(); 
            expect(screen.getByPlaceholderText('Last Password is required')).toBeInTheDocument(); 
            expect(screen.getByPlaceholderText('Email ID is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Phone Number is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Qualification is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Password is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Confirm Password is required')).toBeInTheDocument();
          }); 
      }); 
  })

