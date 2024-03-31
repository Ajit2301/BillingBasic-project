import Axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Ajith() {
  const [list, setList] = useState([]);
  const [sno, setSno] = useState('');
  const [sname, setSname] = useState('');
  const [dob, setDob] = useState('');
  const [qualification, setQualification] = useState('');
  const [course, setCourse] = useState('');
  const [fees, setFees] = useState('');
  
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const find = () => {
    Axios.get(`http://127.0.0.1:4002/api/find`, { params: { sno: sno } })
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Error occurred during find operation.');
      });
  };

  const insert = () => {
   
    Axios.get(`http://127.0.0.1:4002/api/insert`, {
      params: { sno: parseInt(sno), sname: sname,dob:dob,qualification:qualification,course:course,fees:parseInt(fees),state:state,address:address,email:email,contact: parseInt(contact) }
    })
      .then((res) => {
        setSno('');
        setSname('');
        setDob('');
        setQualification('');
        setCourse('');
        setFees('');
        setState('');
        setAddress('');
        setEmail('');
        setContact('');

        find();
        alert('Insert operation successful.');
      })
      .catch((err) => {
        console.log(err);
        alert('Error occurred during insert operation.');
      });
  };

  const update = () => {
    Axios.get(`http://127.0.0.1:4002/api/update`, {
      params: { sno: parseInt(sno), sname: sname,dob:parseInt(dob),qualification:qualification,course:course,fees:parseInt(fees),state:state,address:address,email:email,contact: parseInt(contact) }
    })
      .then((res) => {
        find();
        alert('Update operation successful.');
      })
      .catch((err) => {
        console.log(err);
        alert('Error occurred during update operation.');
      });
  };

  const remove = () => {
    Axios.get(`http://127.0.0.1:4002/api/delete`, { params: { sno: sno } })
      .then((res) => {
        find();
        alert('Delete operation successful.');
      })
      .catch((err) => {
        console.log(err);
        alert('Error occurred during delete operation.');
      });
  };
  return (
    <div className="container">
      <h1 className="text-center mt-5">Welcome to React component</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
      <>
            <div className="mb-3">
             <label> <strong>SNO</strong></label> <input
                type="text"
                className="form-control"
                placeholder="Enter the sno"
                value={sno}
                onChange={(e) => setSno(e.target.value)}
              />
            </div>
            <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the sname"
              value={sname}
              onChange={(e) => setSname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              className="form-control"
              placeholder="Enter the date of birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter the emailid"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter the contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
            </>
        <div className="mb-3">
              <button className="btn btn-primary me-2" onClick={insert}>Insert</button>
              <button className="btn btn-info me-2" onClick={update}>Update</button>
              <button className="btn btn-danger me-2" onClick={remove}>Delete</button>
            <button className="btn btn-success me-2"  onClick={() => { find(); alert('Find operation successful.'); }}>Find</button>
            </div>
        
          
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th><strong>SNO</strong></th>
                <th><strong>SNAME</strong></th>
                <th><strong>DOB</strong></th>
                <th><strong>QUALIFICATION</strong></th>
                <th><strong>COURSE</strong></th>
                <th><strong>FEES</strong></th>
                <th><strong>ADDRESS</strong></th>
                <th><strong>STATE</strong></th>
                <th><strong>EMAIL</strong></th>
                <th><strong>CONTACT</strong></th>
                
                
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.sno}>
                  <td>{item.sno}</td>
                  <td>{item.sname}</td>
                  <td>{item.dob}</td>
                  <td>{item.qualification}</td>
                  <td>{item.course}</td>
                  <td>{item.fees}</td>
                  <td>{item.address}</td>
                  <td>{item.state}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ajith;
