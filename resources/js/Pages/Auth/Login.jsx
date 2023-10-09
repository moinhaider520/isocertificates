import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
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

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div class="card">
                <div class="header">
                    <p class="lead">Login to your account</p>
                </div>
                <div class="body">
                    <form onSubmit={submit}>

                        
                        <div class="form-group">
                            <label for="signin-email" class="control-label sr-only">Email</label>



                            <input id="signin-email"
                                type="email"
                                name="email"
                                value={data.email}
                                class="form-control"
                                autoComplete="username"
                                placeholder="Your email"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)} />
                        </div>
                        <InputError message={errors.email} className="mt-2" />
                        <div class="form-group">
                            <label for="signin-password" class="control-label sr-only">Password</label>
                            <input type="password" name="password" class="form-control" id="signin-password"  placeholder="Password" autoComplete="current-password" 
                                onChange={(e) => setData('password', e.target.value)} />
                        </div>
                        <InputError message={errors.password} className="mt-2" />
                        <div class="form-group clearfix">
                            <label class="fancy-checkbox element-left">
                                <input type="checkbox" name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)} />
                                <span>Remember me</span>
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg btn-block" disabled={processing}>LOGIN</button>
                        <div class="bottom">
                            {canResetPassword && (
                                <span class="helper-text m-b-10"><i class="fa fa-lock"></i> <Link href={route('password.request')}  > Forgot your password? </Link> </span>

                            )}

                                
                            <span>Don't have an account? <Link href={route('register')} > Register </Link></span>
                        </div>
                    </form>
                </div>
            </div>



        </GuestLayout>
    );
}
