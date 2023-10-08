import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Logo from '../../assets/images/logo-white.svg';
export default function ForgotPassword({ token, email }){
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };
    return(
        <>
        <Head title="Forgot Password" />
        <div id="wrapper" class="theme-cyan">
		<div class="vertical-align-wrap">
			<div class="vertical-align-middle auth-main">
				<div class="auth-box">
                    <div class="top">
                        <img src={Logo} alt="Iconic"/>
                    </div>
					<div class="card">
                        <div class="header">
                            <p class="lead">Recover my password</p>
                        </div>
                        <div class="body">
                            <p>Please enter your email address below to receive instructions for resetting password.</p>
                            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                            <form class="form-auth-small" onSubmit={submit}>
                                <div class="form-group">                                    
                                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="form-control"
                    isFocused={true}
                    placeholder="Email"
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">RESET PASSWORD</button>
                                <div class="bottom">
                                    <span class="helper-text">Know your password? <Link href={route('/')}>Login</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}