import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div className="row clearfix">
            <div className="col-lg-6 col-md-12">
            <div className="form-group">
                      <input
                        className="form-control"
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        placeholder='Current Password'
                        autoComplete="current-password"
                      />
                                          <InputError message={errors.current_password} className="mt-2" />
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        placeholder='New Password'
                        autoComplete="new-password"
                      />
                    <InputError message={errors.password} className="mt-2" />
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        autoComplete="new-password"
                        placeholder='Confirm Password'
                      />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                    </div>
                    </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton className="btn btn-primary" disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                    </Transition>
                </div>
            </form>
    );
}
