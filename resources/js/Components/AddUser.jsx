import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
export default function AddUser(){
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    phonenumber: '',
    address: '',
    image: '',
});

const submit = (e) => {
    e.preventDefault();
    console.log(data);
    // post(route('companyregistration'));
};
    return(
        <div className="modal fade" id="addcontact" tabIndex={-1} role="dialog">
  <div className="modal-dialog" role="document">
  <form onSubmit={submit}>
    <div className="modal-content">
      <div className="modal-header">
        <h6 className="title" id="defaultModalLabel">
          Add User
        </h6>
      </div>

      <div className="modal-body">
        <div className="row clearfix">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => setData('firstname', e.target.value)} 
              />
              <InputError message={errors.firstname} className="mt-2" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => setData('lastname', e.target.value)} 
              />
              <InputError message={errors.lastname} className="mt-2" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={(e) => setData('email', e.target.value)} 
              />
              <InputError message={errors.email} className="mt-2" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
                <select className="form-control"
                onChange={(e) => setData('role', e.target.value)} 
                >
                    <option>--Select Role--</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Employee</option>
                </select>
                <InputError message={errors.role} className="mt-2" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
                onChange={(e) => setData('phonenumber', e.target.value)} 
              />
              <InputError message={errors.phonenumber} className="mt-2" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                onChange={(e) => setData('address', e.target.value)} 
              />
              <InputError message={errors.address} className="mt-2" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
              />
              <small id="fileHelp" className="form-text text-muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </small>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          CLOSE
        </button>
      </div>

    </div>
    </form>
  </div>
</div>
    )
}