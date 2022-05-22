import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
font-family: 'Courier New', Courier, monospace;
margin: 0 50px 25px 25px;
padding: 10px 25px 25px;
text-align: center;
transform: scale(1);
transition: transform 0.3s;

&:hover{
  transform: scale(1.2);
}
`;

const StyledButtom = styled.button`
cursor:pointer;
padding: 5px 10px;
border: 1px solid ${p =>p.theme.line};
&:hover{
  border-color: ${p=>p.theme.color};
  transition: transform 0.3s border-color;
}

&[disabled]{
  background:${p =>p.theme.color2};
}

`;

export default function Form(props) {
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;
  return (
    <StyledForm onMouseEnter={()=> props.updateTheme()}>
      <h3>{movie.name}</h3>
      <StyledButtom
        type="button"
        onClick={() => {
          setQuantity(quantity - 1);
        }}
        disabled={quantity <= 0}
      >
        -
      </StyledButtom>
      {quantity}
      <StyledButtom
        type="button"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        disabled={quantity >= movie.available}
      >
        +
      </StyledButtom>
    </StyledForm>
  );
}
