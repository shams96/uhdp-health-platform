
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useChildStore } from '../store/childStore'
import ChildInfoBanner from '../components/ChildInfoBanner'

function NutritionAssessment() {
  const { childId } = useParams()
  const navigate = useNavigate()
  const getChild = useChildStore(state => state.getChild)
  const getNutritionData = useChildStore(state => state.getNutritionData)
  const saveNutritionData = useChildStore(state => state.saveNutritionData)
  
  const child = getChild(childId)
  const existingData = getNutritionData(childId)
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    defaultValues: existingData || {
      assessmentDate: '',
      weight: '',
      height: '',
      muac: '',
      oedema: 'No',
      nutritionalStatus: '',
      supplementsProvided: [],
      feedingPractices: '',
      notes: '',
      isDraft: true
    }
  })
  
  const weight = watch('weight')
  const height = watch('height')
  
  // Calculate BMI if both weight and height are available
  const bmi = weight && height ? (weight / ((height / 100) * (height / 100))).toFixed(2) : null
  
  useEffect(() => {
    if (existingData) {
      reset(existingData)
    }
  }, [existingData, reset])
  
  const onSubmit = (data, e) => {
    // Check if this is a draft save or final submission
    const isDraft = e.nativeEvent.submitter.name === 'saveDraft'
    
    // Add calculated BMI to the data
    const dataWithBMI = {
      ...data,
      bmi: bmi,
      isDraft
    }
    
    saveNutritionData(childId, dataWithBMI)
    
    if (!isDraft) {
      navigate(`/wash/${childId}`)
    } else {
      navigate('/')
    }
  }
  
  if (!child) {
    return <div>Child not found. Please check the ID or register a new child.</div>
  }
  
  return (
    <div>
      <h1>Nutrition Assessment</h1>
      
      <ChildInfoBanner childId={childId} />
      
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="assessmentDate">Assessment Date</label>
              <input 
                id="assessmentDate"
                type="date"
                {...register('assessmentDate', { required: 'Assessment date is required' })}
              />
              {errors.assessmentDate && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.assessmentDate.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input 
                id="weight"
                type="number"
                step="0.1"
                {...register('weight', { 
                  required: 'Weight is required',
                  min: { value: 0.1, message: 'Weight must be greater than 0' }
                })}
              />
              {errors.weight && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.weight.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="height">Height (cm)</label>
              <input 
                id="height"
                type="number"
                step="0.1"
                {...register('height', { 
                  required: 'Height is required',
                  min: { value: 1, message: 'Height must be greater than 0' }
                })}
              />
              {errors.height && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.height.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="bmi">BMI</label>
              <input 
                id="bmi"
                type="text"
                value={bmi || ''}
                readOnly
                style={{ backgroundColor: '#f9f9f9' }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="muac">MUAC (mm)</label>
              <input 
                id="muac"
                type="number"
                {...register('muac')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="oedema">Oedema</label>
              <select 
                id="oedema"
                {...register('oedema')}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="nutritionalStatus">Nutritional Status</label>
              <select 
                id="nutritionalStatus"
                {...register('nutritionalStatus', { required: 'Nutritional status is required' })}
              >
                <option value="">Select status</option>
                <option value="Normal">Normal</option>
                <option value="Moderate Acute Malnutrition">Moderate Acute Malnutrition</option>
                <option value="Severe Acute Malnutrition">Severe Acute Malnutrition</option>
                <option value="Overweight">Overweight</option>
                <option value="Obese">Obese</option>
              </select>
              {errors.nutritionalStatus && <p style={{ color: 'red', margin: '0.25rem 0 0 0' }}>{errors.nutritionalStatus.message}</p>}
            </div>
          </div>
          
          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label>Supplements Provided</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>
                <input 
                  type="checkbox" 
                  id="vitaminA" 
                  value="Vitamin A"
                  {...register('supplementsProvided')}
                />
                <label htmlFor="vitaminA" style={{ display: 'inline', marginLeft: '0.5rem' }}>Vitamin A</label>
              </div>
              <div>
                <input 
                  type="checkbox" 
                  id="iron" 
                  value="Iron"
                  {...register('supplementsProvided')}
                />
                <label htmlFor="iron" style={{ display: 'inline', marginLeft: '0.5rem' }}>Iron</label>
              </div>
              <div>