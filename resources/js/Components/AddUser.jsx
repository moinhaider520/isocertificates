export default function AddUser(){
    return(
        <div className="modal fade" id="addcontact" tabIndex={-1} role="dialog">
  <div className="modal-dialog" role="document">
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
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
                <select className="form-control">
                    <option>--Select Role--</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Employee</option>
                </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
              />
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
        <button type="button" className="btn btn-primary">
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
  </div>
</div>
    )
}