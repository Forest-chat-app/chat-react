import React, { useState } from 'react';
import './AuthPage.scss';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 定义表单数据类型
interface LoginFormData {
  username: string;
  password: string;
}

interface RegisterFormData extends LoginFormData {
  confirmPassword: string;
}

// 登录表单验证规则
const loginSchema = yup.object({
  username: yup.string()
    .required('用户名不能为空')
    .min(3, '用户名至少需要3个字符'),
  password: yup.string()
    .required('密码不能为空')
    .min(6, '密码至少需要6个字符'),
});

// 注册表单验证规则
const registerSchema = yup.object({
  username: yup.string()
    .required('用户名不能为空')
    .min(3, '用户名至少需要3个字符'),
  password: yup.string()
    .required('密码不能为空')
    .min(6, '密码至少需要6个字符'),
  confirmPassword: yup.string()
    .required('请确认密码')
    .oneOf([yup.ref('password')], '两次密码输入不一致')
});

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    // 登录表单
    const { 
      register: registerLogin, 
      handleSubmit: handleLoginSubmit, 
      formState: { errors: loginErrors } 
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange'
    });
    
    // 注册表单
    const { 
      register: registerSignup, 
      handleSubmit: handleSignupSubmit, 
      formState: { errors: signupErrors } 
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        mode: 'onChange'
    });
    
    // 登录提交处理
    const onLoginSubmit = (data: LoginFormData) => {
        console.log('登录表单提交:', data);
        // 调用登录API
    };
    
    // 注册提交处理
    const onSignupSubmit = (data: RegisterFormData) => {
        console.log('注册表单提交:', data);
        // 调用注册API
    };
    
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>{isLogin ? '登录' : '注册'}</h2>
                
                {isLogin ? (
                    // 登录表单
                    <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                        <Input
                            label="用户名"
                            id="login-username"
                            type="text"
                            placeholder='用户名'
                            error={loginErrors.username?.message}
                            errorPosition="right"
                            {...registerLogin('username')}
                        />
                        <Input
                            label="密码"
                            id="login-password"
                            type="password"
                            placeholder='密码'
                            error={loginErrors.password?.message}
                            errorPosition="right"
                            {...registerLogin('password')}
                        />
                        <Button type='submit' style={{ width: '95%', margin: '16px 0' }}>登录</Button>
                    </form>
                ) : (
                    // 注册表单
                    <form onSubmit={handleSignupSubmit(onSignupSubmit)}>
                        <Input
                            label="用户名"
                            id="signup-username"
                            type="text"
                            placeholder='用户名'
                            error={signupErrors.username?.message}
                            errorPosition="right"
                            {...registerSignup('username')}
                        />
                        <Input
                            label="密码"
                            id="signup-password"
                            type="password"
                            placeholder='密码'
                            error={signupErrors.password?.message}
                            errorPosition="right"
                            {...registerSignup('password')}
                        />
                        <Input
                            label="确认密码"
                            id="signup-confirmPassword"
                            type="password"
                            placeholder='确认密码'
                            error={signupErrors.confirmPassword?.message}
                            errorPosition="right"
                            {...registerSignup('confirmPassword')}
                        />
                        <Button type='submit' style={{ width: '95%', margin: '16px 0' }}>注册</Button>
                    </form>
                )}
                
                <p className="toggle-mode">
                    {isLogin ? '没有账号？' : '已有账号？'}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? '立即注册' : '去登录'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AuthPage;