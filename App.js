import React, { useState } from 'react';
import Axios from 'axios';
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
    Axios.post(`http://127.0.0.1:4002/api/insert`, {
      sno: parseInt(sno),
      sname: sname,
      dob: dob,
      qualification: qualification,
      course: course,
      fees: parseInt(fees),
      state: state,
      address: address,
      email: email,
      contact: parseInt(contact)
    })
      .then((res) => {
        clearFields();
        find();
        alert('Insert operation successful.');
      })
      .catch((err) => {
        console.log(err);
        alert('Error occurred during insert operation.');
      });
  };

  const update = () => {
    Axios.post(`http://127.0.0.1:4002/api/update`, {
      sno: parseInt(sno),
      sname: sname,
      dob: dob,
      qualification: qualification,
      course: course,
      fees: parseInt(fees),
      state: state,
      address: address,
      email: email,
      contact: parseInt(contact)
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

  const clearFields = () => {
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
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Welcome to React component</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="sno" className="form-label"><strong>SNO</strong></label>
            <input type="text" className="form-control" id="sno" placeholder="Enter the sno" value={sno} onChange={(e) => setSno(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="sname" className="form-label"><strong>SNAME</strong></label>
            <input type="text" className="form-control" id="sname" placeholder="Enter the sname" value={sname} onChange={(e) => setSname(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label"><strong>DOB</strong></label>
            <input type="date" className="form-control" id="dob" placeholder="Enter the date of birth" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="qualification" className="form-label"><strong>QUALIFICATION</strong></label>
            <input type="text" className="form-control" id="qualification" placeholder="Enter the qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label"><strong>COURSE</strong></label>
            <input type="text" className="form-control" id="course" placeholder="Enter the course" value={course} onChange={(e) => setCourse(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="fees" className="form-label"><strong>FEES</strong></label>
            <input type="text" className="form-control" id="fees" placeholder="Enter the fees" value={fees} onChange={(e) => setFees(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label"><strong>STATE</strong></label>
            <input type="text" className="form-control" id="state" placeholder="Enter the state" value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label"><strong>ADDRESS</strong></label>
            <input type="text" className="form-control" id="address" placeholder="Enter the address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>EMAIL</strong></label>
            <input type="email" className="form-control" id="email" placeholder="Enter the email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label"><strong>CONTACT</strong></label>
            <input type="text" className="form-control" id="contact" placeholder="Enter the contact" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary me-2" onClick={insert}>Insert</button>
            <button className="btn btn-info me-2" onClick={update}>Update</button>
            <button className="btn btn-danger me-2" onClick={remove}>Delete</button>
            <button className="btn btn-success me-2" onClick={find}>Find</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SNO</th>
                <th>SNAME</th>
                <th>DOB</th>
                <th>QUALIFICATION</th>
                <th>COURSE</th>
                <th>FEES</th>
                <th>STATE</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>CONTACT</th>
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
                  <td>{item.state}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
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
