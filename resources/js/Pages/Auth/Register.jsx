import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div class="card">
            <div class="header">
                    <p class="lead">Register your account</p>
            </div>
            <div class="body">
            <form onSubmit={submit}>
                    <div class="form-group">
                            <label for="name" class="control-label sr-only">Name</label>
                            <input id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                class="form-control"
                                autoComplete="name"
                                placeholder="Your Name"
                                isFocused={true}
                                required
                                onChange={(e) => setData('name', e.target.value)} />
                                <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div class="form-group">
                            <label for="email" class="control-label sr-only">Email</label>
                            <input id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                class="form-control"
                                autoComplete="email"
                                placeholder="Your Email"
                                isFocused={true}
                                required
                                onChange={(e) => setData('email', e.target.value)} />
                                <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div class="form-group">
                            <label for="password" class="control-label sr-only">Password</label>
                            <input id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                class="form-control"
                                autoComplete="password"
                                placeholder="Your password"
                                isFocused={true}
                                required
                                onChange={(e) => setData('password', e.target.value)} />
                                <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div class="form-group">
                            <label for="password_confirmation" class="control-label sr-only">Password</label>
                            <input id="password"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="form-control"
                                autoComplete="new-password"
                                required
                                placeholder='Confirm Password'
                                onChange={(e) => setData('password_confirmation', e.target.value)} />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                <div className="flex items-center justify-end form-group">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="btn btn-primary btn-lg btn-block" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
            </div>
            </div>
        </GuestLayout>
    );
}
