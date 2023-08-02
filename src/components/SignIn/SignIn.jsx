import { useState } from 'react';
import Style from './SignIn.style';
import { isValidSignIn } from '../../utils/validation';
const SignIn = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    function submitForm() {
        const result = isValidSignIn(formData) || '로그인 성공';
        alert(result);
    }
    return (
        <>
        <Style.Input 
            name='id' 
            type="text" 
            placeholder="아이디"
            value={formData.id}
            onChange={handleChange}
        ></Style.Input>
        <Style.Input 
            name='password' 
            type="password" 
            placeholder="비밀번호" 
            value={formData.password}
            onChange={handleChange}
        ></Style.Input>
        <Style.SubmitBtn onClick={submitForm}>로그인</Style.SubmitBtn>
        </>
    )
}

export default SignIn;
