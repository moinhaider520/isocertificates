import { Head, Link, useForm } from '@inertiajs/react';
import Logo from '../../assets/images/logo-white.svg';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import { useEffect } from 'react';
export default function Index({ status, canResetPassword }){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return(
        <>
        <Head title="Login" />
        <div class="vertical-align-wrap">
			<div class="vertical-align-middle auth-main">
				<div class="auth-box">
                    <div class="top">
                        <img src={Logo} alt="Iconic"/>
                    </div>
					<div class="card">
                        <div class="header">
                            <p class="lead">Login to your account</p>
                        </div>
                        <div class="body">
                            <form class="form-auth-small" onSubmit={submit}>
                                <div class="form-group">
                                    <InputError message={errors.email} className="mt-2" />
                                    <label for="signin-email" class="control-label sr-only">Email</label>
                                    <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control"
                                    autoComplete="username"
                                    isFocused={true}
                                    placeholder="Email"
                                    onChange={(e) => setData('email', e.target.value)}
                                    />
                                </div>
                                <div class="form-group">
                                    <InputError message={errors.password} className="mt-2" />
                                    <label for="signin-password" class="control-label sr-only">Password</label>
                                    <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="form-control"
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                                <div class="form-group clearfix">
                                    <label class="fancy-checkbox element-left">
                                    <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                        <span>Remember me</span>
                                    </label>								
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">LOGIN</button>
                                <div class="bottom">
                                    <span class="helper-text m-b-10"><i class="fa fa-lock"></i> 
                                    <Link href={route('forgotpassword')}>Forgot password?</Link>
                                    </span>
                                    <span>Don't have an account? <Link href={route('registerprofile')}>Register</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
				</div>
			</div>
		</div>
        </>
    )
}