import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <>
            <button
                      type="button"
                      className="btn btn-danger js-sweetalert"
                      data-toggle="modal"
                      data-target="#deleteaccount"
                      title="Delete"
                    >
                        Delete Account
                    </button>
            {/* <Modal show={confirmingUserDeletion} onClose={closeModal}> */}
            <div className="modal fade" id="deleteaccount" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
      <div className="modal-header">
        <h6 className="title" id="defaultModalLabel">
        Are you sure you want to delete your account?
        </h6>
      </div>
      <form onSubmit={deleteUser} className="p-6">
      <div className="modal-body">
        <div className="row clearfix">
                <div className="col-12">
                    <div className="form-group">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="form-control"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>
        </div>
        </div>
        <div className="modal-footer">
        <button type="submit" className="btn btn-primary">
          Delete User
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          CLOSE
        </button>
      </div>
        </form>

                </div>
                </div>
                </div>
            {/* </Modal> */}
        </>
    );
}
