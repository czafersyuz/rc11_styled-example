import React from 'react'
import Button from './Button.styled'
import Container from './Container.styled'
import StyledHeader, { Flex, Image, Logo, Nav } from './Header.styled'

const Header = () => {
  return (
    <div>
        <StyledHeader>
            <Container>
              <Nav>
                   <Logo src="./images/logo.png"></Logo>
                   <div>
            
                     <Button color='#A62440'>Apply Courses</Button>
                     <Button bg='#A62440'>Talk to Adviser</Button>
    
                   </div>
               </Nav>
               <Flex>
               <div>
                 <h1>The IT Career of Your Dreams Starts Here!</h1>
                  <p>
          
                    Clarusway is a leading international software Bootcamp. Join a micro
                    class online with other trainees and learn coding skills with a
                    highly-skilled instructor.
                  </p>
                  <Button bg="#A62440">Start Your New Carier</Button>
                  <Image src="./images/hero.jpg" ></Image>
                  
                   
               </div>

               </Flex>
              

            </Container>
           

            
        

        </StyledHeader>
        
        
    </div>
  )
}

export default Header