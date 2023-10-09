import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function ISOCertificates() {
    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        isocertificate: '',
        eacodes: [],
    });

    const [EACodes,setEACodes] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        // post(route('companyregistration'));
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
    
        // Copy the current eacodes array from the form data
        const updatedEacodes = [...data.eacodes];
    
        // Add or remove the value based on checkbox checked status
        if (isChecked) {
          updatedEacodes.push(value);
        } else {
          const index = updatedEacodes.indexOf(value);
          if (index !== -1) {
            updatedEacodes.splice(index, 1);
          }
        }
    
        // Update the eacodes array in the form data using setData
        setData('eacodes', updatedEacodes);
      };

    return (
        <div className="body">
        <h6>Available ISO Certificates</h6>
        <form onSubmit={submit}>
        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
          <div className="form-group">
              <select className="form-control"
              name="isocertificate"
              onChange={(e) => setData('isocertificate', e.target.value)}
              >
                <option value="">-- Select ISO Certificate --</option>
                <option value="ISO 9000">(ISO 9000) - Quality management systems</option>
                <option value="ISO 22000">(ISO 22000) - Food safety management</option>
                <option value="ISO 14000">(ISO 14000) - Environmental management</option>
                <option value="ISO 27000">(ISO 27000) - Information Security Management System</option>
                <option value="ISO 45000">(ISO 45000) - Occupational health and safety</option>
                <option value="ISO 50000">(ISO 50000) - Energy management</option>
              </select>
              <InputError message={errors.country} className="mt-2" />
            </div>
        {
            data.isocertificate&&(
                <>
                <div className='row'>
        <div className='col-md-6'>
        <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Agricultural/Fishing"
          id="flexCheckDefault"
          name="eacodes[]"
          checked={data.eacodes.includes('Agricultural/Fishing')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Agricultural/Fishing
        </label>
        </div>
        </div>
      
      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Mining and quarrying"
          id="flexCheckDefault2"
          name="eacodes[]"
          checked={data.eacodes.includes('Food products, beverages and tobacco')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault2">
        Food products, beverages and tobacco
        </label>
      </div>
      </div>
     

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Food products, beverages and tobacco"
          id="flexCheckDefault3"
          name="eacodes[]"
          checked={data.eacodes.includes('Food products, beverages and tobacco')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault3">
        Food products, beverages and tobacco
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Textiles and textile products"
          id="flexCheckDefault4"
          name="eacodes[]"
          checked={data.eacodes.includes('Textiles and textile products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault4">
        Textiles and textile products
        </label>
      </div>
      </div>


      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Leather and leather products"
          id="flexCheckDefault5"
          name="eacodes[]"
          checked={data.eacodes.includes('Leather and leather products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault5">
        Leather and leather products
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Wood and wood products"
          id="flexCheckDefault6"
          name="eacodes[]"
          checked={data.eacodes.includes('Wood and wood products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault6">
        Wood and wood products
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Pulp, paper and paper products"
          id="flexCheckDefault7"
          name="eacodes[]"
          checked={data.eacodes.includes('Pulp, paper and paper products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault7">
        Pulp, paper and paper products
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Publishing companies"
          id="flexCheckDefault8"
          name="eacodes[]"
          checked={data.eacodes.includes('Publishing companies')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault8">
        Publishing companies
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Printing companies"
          id="flexCheckDefault9"
          name="eacodes[]"
          checked={data.eacodes.includes('Printing companies')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault9">
        Printing companies
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Manufacture of coke and refined petroleum products"
          id="flexCheckDefault10"
          name="eacodes[]"
          checked={data.eacodes.includes('Manufacture of coke and refined petroleum products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault10">
        Manufacture of coke and refined petroleum products
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Nuclear fuel"
          id="flexCheckDefault11"
          name="eacodes[]"
          checked={data.eacodes.includes('Nuclear fuel')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault11">
        Nuclear fuel
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Chemicals, chemical products and fibers"
          id="flexCheckDefault12"
          name="eacodes[]"
          checked={data.eacodes.includes('Chemicals, chemical products and fibers')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault12">
        Chemicals, chemical products and fibers
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Pharmaceuticals"
          id="flexCheckDefault13"
          name="eacodes[]"
          checked={data.eacodes.includes('Pharmaceuticals')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault13">
        Pharmaceuticals
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Rubber and plastic products"
          id="flexCheckDefault14"
          name="eacodes[]"
          checked={data.eacodes.includes('Rubber and plastic products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault14">
        Rubber and plastic products
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Non-metallic mineral products"
          id="flexCheckDefault15"
          name="eacodes[]"
          checked={data.eacodes.includes('Non-metallic mineral products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault15">
        Non-metallic mineral products
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Concrete, cement, lime, plaster etc"
          id="flexCheckDefault16"
          name="eacodes[]"
          checked={data.eacodes.includes('Concrete, cement, lime, plaster etc')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault16">
        Concrete, cement, lime, plaster etc
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Basic metals and fabricated metal products"
          id="flexCheckDefault17"
          name="eacodes[]"
          checked={data.eacodes.includes('Basic metals and fabricated metal products')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault17">
        Basic metals and fabricated metal products
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Machinery and equipment"
          id="flexCheckDefault18"
          name="eacodes[]"
          checked={data.eacodes.includes('Machinery and equipment')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault18">
        Machinery and equipment
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Electrical and optical equipment"
          id="flexCheckDefault19"
          name="eacodes[]"
          checked={data.eacodes.includes('Electrical and optical equipment')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault19">
        Electrical and optical equipment
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Shipbuilding"
          id="flexCheckDefault20"
          name="eacodes[]"
          checked={data.eacodes.includes('Shipbuilding')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault20">
        Shipbuilding
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Aerospace"
          id="flexCheckDefault21"
          name="eacodes[]"
          checked={data.eacodes.includes('Aerospace')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault21">
        Aerospace
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Other transport equipment"
          id="flexCheckDefault22"
          name="eacodes[]"
          checked={data.eacodes.includes('Other transport equipment')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault22">
        Other transport equipment
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Manufacturing not elsewhere classified"
          id="flexCheckDefault23"
          name="eacodes[]"
          checked={data.eacodes.includes('Manufacturing not elsewhere classified')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault23">
        Manufacturing not elsewhere classified
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Recycling"
          id="flexCheckDefault24"
          name="eacodes[]"
          checked={data.eacodes.includes('Recycling')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault24">
        Recycling
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Electricity supply"
          id="flexCheckDefault25"
          name="eacodes[]"
          checked={data.eacodes.includes('Electricity supply')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault25">
        Electricity supply
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Gas supply"
          id="flexCheckDefault26"
          name="eacodes[]"
          checked={data.eacodes.includes('Gas supply')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault26">
        Gas supply
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Water supply"
          id="flexCheckDefault27"
          name="eacodes[]"
          checked={data.eacodes.includes('Water supply')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault27">
        Water supply
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Construction"
          id="flexCheckDefault28"
          name="eacodes[]"
          checked={data.eacodes.includes('Construction')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault28">
        Construction
        </label>
      </div>
      </div>
      
      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Wholesale and retail trade; Repair of motor vehicles,motorcycles and personal and household goods"
          id="flexCheckDefault29"
          name="eacodes[]"
          checked={data.eacodes.includes('Wholesale and retail trade; Repair of motor vehicles,motorcycles and personal and household goods')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault29">
        Wholesale and retail trade; Repair of motor vehicles,motorcycles and personal and household goods
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Hotels and restaurants"
          id="flexCheckDefault30"
          name="eacodes[]"
          checked={data.eacodes.includes('Hotels and restaurants')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault30">
        Hotels and restaurants
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Transport, storage and communication"
          id="flexCheckDefault31"
          name="eacodes[]"
          checked={data.eacodes.includes('Transport, storage and communication')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault31">
        Transport, storage and communication
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Financial intermediation; real estate; renting"
          id="flexCheckDefault32"
          name="eacodes[]"
          checked={data.eacodes.includes('Financial intermediation; real estate; renting')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault32">
        Financial intermediation; real estate; renting
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Information technology"
          id="flexCheckDefault33"
          name="eacodes[]"
          checked={data.eacodes.includes('Information technology')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault33">
        Information technology
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Engineering services"
          id="flexCheckDefault34"
          name="eacodes[]"
          checked={data.eacodes.includes('Engineering services')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault34">
        Engineering services
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Transport, storage and communication"
          id="flexCheckDefault31"
          name="eacodes[]"
          checked={data.eacodes.includes('Transport, storage and communication')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault31">
        Transport, storage and communication
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Other services"
          id="flexCheckDefault35"
          name="eacodes[]"
          checked={data.eacodes.includes('Other services')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault35">
        Other services
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Public administration"
          id="flexCheckDefault36"
          name="eacodes[]"
          checked={data.eacodes.includes('Public administration')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault36">
        Public administration
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Education"
          id="flexCheckDefault37"
          name="eacodes[]"
          checked={data.eacodes.includes('Education')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault37">
        Education
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Health and social work"
          id="flexCheckDefault38"
          name="eacodes[]"
          checked={data.eacodes.includes('Health and social work')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault38">
        Health and social work
        </label>
      </div>
      </div>

      <div className='col-md-6'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Other social services"
          id="flexCheckDefault39"
          name="eacodes[]"
          checked={data.eacodes.includes('Other social services')} // Check if it's in the selected eacodes
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault39">
        Other social services
        </label>
      </div>
      </div>

        </div>
        <InputError message={errors.eacode} className="mt-2" />
                </>
            )
        }
        

             

          </div>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Register For Certificate
        </button>
        </form>
        </div>
    );
}
