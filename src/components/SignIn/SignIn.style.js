import { styled } from "styled-components";
import COLOR from "../../assets/Color";

const Input = styled.input`
    border: none;
    background-color: ${COLOR.GSF0};
    width: 300px;
    height: 50px;
    border-radius: 10px;
    padding: 0 20px;
    margin-bottom: 10px;
    font-size: 16px;
`;
const SubmitBtn = styled.button`
    width: 100px;
    height: 40px;
    background-color: ${COLOR.Primary};
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: ${COLOR.PrimaryDark}
    }
`;

export default { Input, SubmitBtn };