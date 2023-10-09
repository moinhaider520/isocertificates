import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />
            <div class="card">
            <div class="header">
                    <p class="lead">This is a secure area of the application. Please confirm your password before continuing.</p>
            </div>
            <div class="body">
            <form onSubmit={submit}>
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
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="btn btn-primary btn-lg btn-block" disabled={processing}>
                        Confirm
                    </PrimaryButton>
                </div>
            </form>
            </div>
            </div>
        </GuestLayout>
    );
}
