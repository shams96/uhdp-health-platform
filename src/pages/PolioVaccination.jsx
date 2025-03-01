import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useChildStore } from '../store/childStore'
import ChildInfoBanner from '../components/ChildInfoBanner'

function PolioVaccination() {
  const { childId } = useParams()
  const navigate = useNavigate()
  const getChild = useChildStore(state => state.getChild)
  const getPolioData = useChildStore(state => state.getPolioData)
  const savePolioData = useChildStore(state => state.savePolioData)
  
  const child = getChild(childId)
  const existingData = getPolioData(childId)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: existingData || {
      vaccinationStatus: '',
      vaccinationDate: '',
      vaccineType: '',
      batchNumber: '',
      administeredBy: '',
      administrationSite: '',
      adverseEvents: '',
      notes: '',
      isDraft: true
    }
  })
  
  useEffect(() => {
    if (existingData) {
      reset(existingData)
    }
  }, [existingData, reset])
  
  const onSubmit = (data, e) => {
    // Check if this is a draft save or final submission
    const isDraft = e.nativeEvent.submitter.name === 'saveDraft'
    
    savePolioData(childId, {
      ...data,
      isDraft
    })
    
    if (!isDraft) {
      navigate(`/nutrition/${childId}`)
    } else {
      navigate('/')
    }
  }
  
  if (!child) {
    return <div>Child not found. Please check the ID or register a new child.</div>
  }
  
  return (
    <div>
      <h1>Polio Vaccination</h1>
      
      <ChildInfoBanner childId={childId} />
      
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="vaccinationStatus">Vaccination Status</label>
              <select 
                id="vaccinationStatus"
                {...register('vaccinationStatus', { required: 'Vaccination status is required' })}
              >
                <option value="">Select status</option>
                <option value="Vaccinated">Vaccinated</option>
                <option value="Refused">Refused</option>
                <option value="Absent">Absent</option>
                <option value="Contraindicated">Contraindicated</option>
              </select>
              {errors.vaccinationStatus && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.vaccinationStatus.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="vaccinationDate">Vaccination Date</label>
              <input 
                id="vaccinationDate"
                type="date"
                {...register('vaccinationDate', { required: 'Vaccination date is required' })}
              />
              {errors.vaccinationDate && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.vaccinationDate.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="vaccineType">Vaccine Type</label>
              <select 
                id="vaccineType"
                {...register('vaccineType')}
              >
                <option value="">Select type</option>
                <option value="OPV">OPV (Oral Polio Vaccine)</option>
                <option value="IPV">IPV (Inactivated Polio Vaccine)</option>
                <option value="bOPV">bOPV (Bivalent Oral Polio Vaccine)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="batchNumber">Batch Number</label>
              <input 
                id="batchNumber"
                {...register('batchNumber')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="administeredBy">Administered By</label>
              <input 
                id="administeredBy"
                {...register('administeredBy')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="administrationSite">Administration Site</label>
              <select 
                id="administrationSite"
                {...register('administrationSite')}
              >
                <option value="">Select site</option>
                <option value="Oral">Oral</option>
                <option value="Left Arm">Left Arm</option>
                <option value="Right Arm">Right Arm</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="adverseEvents">Adverse Events (if any)</label>
            <textarea 
              id="adverseEvents"
              {...register('adverseEvents')}
              rows="2"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea 
              id="notes"
              {...register('notes')}
              rows="3"
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <button 
              type="submit" 
              name="saveDraft"
              style={{ backgroundColor: '#666' }}
            >
              Save as Draft
            </button>
            <div>
              <button 
                type="submit"
                name="saveComplete"
              >
                Save & Continue to Nutrition
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PolioVaccination
