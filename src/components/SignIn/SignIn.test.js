import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';
global.alert = jest.fn();
describe('SignIn', () => {
    it('아이디를 5자 입력했을 때 아이디 확인 alert이 뜬다.', () => {
        render(<SignIn />);
        const idInput = screen.getByPlaceholderText('아이디');
        const pwInput = screen.getByPlaceholderText('비밀번호');
        const submitBtn = screen.getByText('로그인');

        fireEvent.change(idInput, { target: { value: '12345' } });
        fireEvent.change(pwInput, { target: { value: '12345678' } });
        
        fireEvent.click(submitBtn);

        expect(global.alert).toHaveBeenCalledWith('아이디를 확인해주세요.');
    });

    it('아이디를 21자 입력했을 때 아이디 확인 alert이 뜬다.', () => {
        render(<SignIn />);
        const idInput = screen.getByPlaceholderText('아이디');
        const pwInput = screen.getByPlaceholderText('비밀번호');
        const submitBtn = screen.getByText('로그인');

        fireEvent.change(idInput, { target: { value: `123456789012345678901` } });
        fireEvent.change(pwInput, { target: { value: '12345678' } });
        
        fireEvent.click(submitBtn);

        expect(global.alert).toHaveBeenCalledWith('아이디를 확인해주세요.');
    });

    it('아이디는 정상범위, 비밀번호는 7자 적었을 때 비밀번호 확인 알림이 뜬다.', () => {
        render(<SignIn />);
        const idInput = screen.getByPlaceholderText('아이디');
        const pwInput = screen.getByPlaceholderText('비밀번호');
        const submitBtn = screen.getByText('로그인');

        fireEvent.change(idInput, { target: { value: `123456789012345678` } });
        fireEvent.change(pwInput, { target: { value: '1234567' } });
        
        fireEvent.click(submitBtn);

        expect(global.alert).toHaveBeenCalledWith('비밀번호를 확인해주세요.');
    });

    it('아이디는 정상범위, 비밀번호는 21자 적었을 때 비밀번호 확인 알림이 뜬다.', () => {
        render(<SignIn />);
        const idInput = screen.getByPlaceholderText('아이디');
        const pwInput = screen.getByPlaceholderText('비밀번호');
        const submitBtn = screen.getByText('로그인');

        fireEvent.change(idInput, { target: { value: `123456789012345678` } });
        fireEvent.change(pwInput, { target: { value: '123456789012345678901' } });
        
        fireEvent.click(submitBtn);

        expect(global.alert).toHaveBeenCalledWith('비밀번호를 확인해주세요.');
    })

    it('아이디는 8자, 비밀번호는 8자 적었을 때 로그인 성공 알림이 뜬다.', () => {
        render(<SignIn />);
        const idInput = screen.getByPlaceholderText('아이디');
        const pwInput = screen.getByPlaceholderText('비밀번호');
        const submitBtn = screen.getByText('로그인');

        fireEvent.change(idInput, { target: { value: `12345678` } });
        fireEvent.change(pwInput, { target: { value: '12345678' } });
        
        fireEvent.click(submitBtn);

        expect(global.alert).toHaveBeenCalledWith('로그인 성공');
    })
})