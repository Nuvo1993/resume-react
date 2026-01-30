import React, { useState }  from 'react';
import emailjs from 'emailjs-com';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import styled  from '@emotion/styled';
import profilePicture from '../../assets/images/DB9A0086.jpg';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: white;
  width: auto;
  margin: 0 auto;

  @media (min-width: 768px) { // Adjust this breakpoint according to your needs
    width: 500px;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  border: 2px solid #3f51b5;
  margin-bottom: 1rem;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
`;

// const StyledForm = styled('form')`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 400px;
// `;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert('Message sent, thank you!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          alert('An error occurred, please try again:', error.text);
        }
      );
  };
 

  return (
    <StyledBox>
      <StyledAvatar src={profilePicture}/>
      <StyledTypography variant="body1">
        I am eager to discuss how my skills and experiences can contribute to your company's objectives. Let's explore potential collaborations and how I can make a positive impact within your team. You can reach me directly at <a href="mailto:austinneveau93@gmail.com">austinneveau93@gmail.com</a>. I look forward to our fruitful conversation and the opportunity to discuss how we can work together towards achieving your goals.
      </StyledTypography>
    </StyledBox>
  );  
}