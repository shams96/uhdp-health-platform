import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useChildStore } from '../store/childStore'

function ChildRegistration() {
  const navigate = useNavigate()
  const addChild = useChildStore(state => state.addChild)
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    const childId = addChild(data)
    navigate(`/polio/${childId}`)
  }
  
  return (
    <div>
      <h1>Child Registration</h1>
      
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.firstName.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.lastName.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input 
                id="dateOfBirth"
                type="date"
                {...register('dateOfBirth', { required: 'Date of birth is required' })}
              />
              {errors.dateOfBirth && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.dateOfBirth.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select 
                id="gender"
                {...register('gender', { required: 'Gender is required' })}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.gender.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="caretakerName">Caretaker's Name</label>
              <input 
                id="caretakerName"
                {...register('caretakerName', { required: 'Caretaker\'s name is required' })}
              />
              {errors.caretakerName && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.caretakerName.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="relationship">Relationship to Child</label>
              <select 
                id="relationship"
                {...register('relationship', { required: 'Relationship is required' })}
              >
                <option value="">Select relationship</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Grandparent">Grandparent</option>
                <option value="Sibling">Sibling</option>
                <option value="Other">Other</option>
              </select>
              {errors.relationship && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.relationship.message}</p>}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea 
              id="address"
              {...register('address', { required: 'Address is required' })}
              rows="3"
            />
            {errors.address && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.address.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input 
              id="contactNumber"
              type="tel"
              {...register('contactNumber', { required: 'Contact number is required' })}
            />
            {errors.contactNumber && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.contactNumber.message}</p>}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button type="submit">Register & Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChildRegistration
