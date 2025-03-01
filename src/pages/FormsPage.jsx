import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { saveData, loadData, STORAGE_KEYS } from '../utils/storage'

export default function FormsPage() {
  const [activeForm, setActiveForm] = useState('polio')
  const [formData, setFormData] = useState({
    polio: {
      childName: '',
      age: '',
      gender: '',
      status: '',
      address: '',
      notes: ''
    },
    nutrition: {
      childName: '',
      age: '',
      weight: '',
      height: '',
      muac: '',
      status: ''
    },
    wash: {
      householdId: '',
      residents: '',
      waterSource: '',
      sanitationFacility: '',
      issues: ''
    }
  })
  const [savedForms, setSavedForms] = useState({
    polio: [],
    nutrition: [],
    wash: []
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showSavedForms, setShowSavedForms] = useState(false)

  // Load saved forms on component mount
  useEffect(() => {
    const polioForms = loadData(STORAGE_KEYS.POLIO_FORMS, [])
    const nutritionForms = loadData(STORAGE_KEYS.NUTRITION_FORMS, [])
    const washForms = loadData(STORAGE_KEYS.WASH_FORMS, [])
    
    setSavedForms({
      polio: polioForms,
      nutrition: nutritionForms,
      wash: washForms
    })
  }, [])

  const handleInputChange = (formType, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [formType]: {
        ...prevData[formType],
        [field]: value
      }
    }))
  }

  const handleSubmit = (formType) => {
    // Create a new form entry with timestamp
    const newEntry = {
      ...formData[formType],
      id: Date.now(),
      timestamp: new Date().toISOString()
    }
    
    // Update saved forms
    const updatedForms = [...savedForms[formType], newEntry]
    setSavedForms(prevForms => ({
      ...prevForms,
      [formType]: updatedForms
    }))
    
    // Save to localStorage
    saveData(
      formType === 'polio' 
        ? STORAGE_KEYS.POLIO_FORMS 
        : formType === 'nutrition' 
          ? STORAGE_KEYS.NUTRITION_FORMS 
          : STORAGE_KEYS.WASH_FORMS, 
      updatedForms
    )
    
    // Reset form
    setFormData(prevData => ({
      ...prevData,
      [formType]: formType === 'polio' 
        ? { childName: '', age: '', gender: '', status: '', address: '', notes: '' }
        : formType === 'nutrition'
          ? { childName: '', age: '', weight: '', height: '', muac: '', status: '' }
          : { householdId: '', residents: '', waterSource: '', sanitationFacility: '', issues: '' }
    }))
    
    // Show success message
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleSaveDraft = (formType) => {
    // Create a draft entry
    const draftEntry = {
      ...formData[formType],
      id: Date.now(),
      timestamp: new Date().toISOString(),
      isDraft: true
    }
    
    // Update saved forms
    const updatedForms = [...savedForms[formType], draftEntry]
    setSavedForms(prevForms => ({
      ...prevForms,
      [formType]: updatedForms
    }))
    
    // Save to localStorage
    saveData(
      formType === 'polio' 
        ? STORAGE_KEYS.POLIO_FORMS 
        : formType === 'nutrition' 
          ? STORAGE_KEYS.NUTRITION_FORMS 
          : STORAGE_KEYS.WASH_FORMS, 
      updatedForms
    )
    
    // Show success message
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">Data Collection Forms</h1>
              <button 
                onClick={() => setShowSavedForms(!showSavedForms)}
                className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
              >
                {showSavedForms ? 'New Form' : 'View Saved Forms'}
              </button>
            </div>
            
            {formSubmitted && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    ✅
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      Form saved successfully!
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {!showSavedForms ? (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="border-b border-gray-200">
                  <nav className="flex -mb-px">
                    <button
                      onClick={() => setActiveForm('polio')}
                      className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                        activeForm === 'polio'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Polio Vaccination
                    </button>
                    <button
                      onClick={() => setActiveForm('nutrition')}
                      className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                        activeForm === 'nutrition'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Nutrition Assessment
                    </button>
                    <button
                      onClick={() => setActiveForm('wash')}
                      className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                        activeForm === 'wash'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      WASH Services
                    </button>
                  </nav>
                </div>
                
                <div className="p-6">
                  {activeForm === 'polio' && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-medium text-gray-900">Polio Vaccination Form</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Child's Name
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="Enter child's full name"
                            value={formData.polio.childName}
                            onChange={(e) => handleInputChange('polio', 'childName', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Age (months)
                          </label>
                          <input
                            type="number"
                            className="input-field"
                            placeholder="Enter age in months"
                            value={formData.polio.age}
                            onChange={(e) => handleInputChange('polio', 'age', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Gender
                          </label>
                          <select 
                            className="input-field"
                            value={formData.polio.gender}
                            onChange={(e) => handleInputChange('polio', 'gender', e.target.value)}
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Vaccination Status
                          </label>
                          <select 
                            className="input-field"
                            value={formData.polio.status}
                            onChange={(e) => handleInputChange('polio', 'status', e.target.value)}
                          >
                            <option value="">Select status</option>
                            <option value="vaccinated">Vaccinated</option>
                            <option value="refused">Refused</option>
                            <option value="absent">Absent</option>
                            <option value="pending">Pending</option>
                          </select>
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="Enter full address"
                            value={formData.polio.address}
                            onChange={(e) => handleInputChange('polio', 'address', e.target.value)}
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Notes
                          </label>
                          <textarea
                            rows={3}
                            className="input-field"
                            placeholder="Enter any additional notes"
                            value={formData.polio.notes}
                            onChange={(e) => handleInputChange('polio', 'notes', e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <button 
                          className="btn-secondary"
                          onClick={() => handleSaveDraft('polio')}
                        >
                          Save Draft
                        </button>
                        <button 
                          className="btn-primary"
                          onClick={() => handleSubmit('polio')}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeForm === 'nutrition' && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-medium text-gray-900">Nutrition Assessment Form</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Child's Name
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="Enter child's full name"
                            value={formData.nutrition.childName}
                            onChange={(e) => handleInputChange('nutrition', 'childName', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Age (months)
                          </label>
                          <input
                            type="number"
                            className="input-field"
                            placeholder="Enter age in months"
                            value={formData.nutrition.age}
                            onChange={(e) => handleInputChange('nutrition', 'age', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Weight (kg)
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            className="input-field"
                            placeholder="Enter weight in kg"
                            value={formData.nutrition.weight}
                            onChange={(e) => handleInputChange('nutrition', 'weight', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Height (cm)
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            className="input-field"
                            placeholder="Enter height in cm"
                            value={formData.nutrition.height}
                            onChange={(e) => handleInputChange('nutrition', 'height', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            MUAC (mm)
                          </label>
                          <input
                            type="number"
                            className="input-field"
                            placeholder="Mid-Upper Arm Circumference"
                            value={formData.nutrition.muac}
                            onChange={(e) => handleInputChange('nutrition', 'muac', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nutritional Status
                          </label>
                          <select 
                            className="input-field"
                            value={formData.nutrition.status}
                            onChange={(e) => handleInputChange('nutrition', 'status', e.target.value)}
                          >
                            <option value="">Select status</option>
                            <option value="normal">Normal</option>
                            <option value="moderate">Moderate Malnutrition</option>
                            <option value="severe">Severe Malnutrition</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <button 
                          className="btn-secondary"
                          onClick={() => handleSaveDraft('nutrition')}
                        >
                          Save Draft
                        </button>
                        <button 
                          className="btn-primary"
                          onClick={() => handleSubmit('nutrition')}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeForm === 'wash' && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-medium text-gray-900">WASH Services Form</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Household ID
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="Enter household ID"
                            value={formData.wash.householdId}
                            onChange={(e) => handleInputChange('wash', 'householdId', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Number of Residents
                          </label>
                          <input
                            type="number"
                            className="input-field"
                            placeholder="Enter number of residents"
                            value={formData.wash.residents}
                            onChange={(e) => handleInputChange('wash', 'residents', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Water Source
                          </label>
                          <select 
                            className="input-field"
                            value={formData.wash.waterSource}
                            onChange={(e) => handleInputChange('wash', 'waterSource', e.target.value)}
                          >
                            <option value="">Select water source</option>
                            <option value="tap">Tap Water</option>
                            <option value="well">Well</option>
                            <option value="bottled">Bottled Water</option>
                            <option value="river">River/Stream</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Sanitation Facility
                          </label>
                          <select 
                            className="input-field"
                            value={formData.wash.sanitationFacility}
                            onChange={(e) => handleInputChange('wash', 'sanitationFacility', e.target.value)}
                          >
                            <option value="">Select facility type</option>
                            <option value="flush">Flush Toilet</option>
                            <option value="pit">Pit Latrine</option>
                            <option value="shared">Shared Facility</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Issues/Concerns
                          </label>
                          <textarea
                            rows={3}
                            className="input-field"
                            placeholder="Enter any issues or concerns"
                            value={formData.wash.issues}
                            onChange={(e) => handleInputChange('wash', 'issues', e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <button 
                          className="btn-secondary"
                          onClick={() => handleSaveDraft('wash')}
                        >
                          Save Draft
                        </button>
                        <button 
                          className="btn-primary"
                          onClick={() => handleSubmit('wash')}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Saved Forms</h2>
                
                <div className="border-b border-gray-200 mb-4">
                  <nav className="flex -mb-px">
                    <button
                      onClick={() => setActiveForm('polio')}
                      className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                        activeForm === 'polio'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Polio Vaccination ({savedForms.polio.length})
                    </button>
                    <button
                      onClick={() => setActiveForm('nutrition')}
                      className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                        activeForm === 'nutrition'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Nutrition Assessment ({savedForms.nutrition.length})
                    </button>
                    <button
                      onClick={() => setActiveForm('wash')}
                      className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                        activeForm === 'wash'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      WASH Services ({savedForms.wash.length})
                    </button>
                  </nav>
                </div>
                
                {activeForm === 'polio' && (
                  <div>
                    {savedForms.polio.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">No saved polio vaccination forms yet.</p>
                    ) : (
                      <div className="space-y-4">
                        {savedForms.polio.map(form => (
                          <div key={form.id} className={`border rounded-lg p-4 ${form.isDraft ? 'border-amber-300 bg-amber-50' : 'border-gray-200'}`}>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">{form.childName || 'Unnamed'}</h3>
                              <div className="flex items-center">
                                {form.isDraft && (
                                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2">
                                    Draft
                                  </span>
                                )}
                                <span className="text-xs text-gray-500">
                                  {new Date(form.timestamp).toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div><span className="text-gray-500">Age:</span> {form.age} months</div>
                              <div><span className="text-gray-500">Gender:</span> {form.gender || 'Not specified'}</div>
                              <div><span className="text-gray-500">Status:</span> {form.status || 'Not specified'}</div>
                              <div><span className="text-gray-500">Address:</span> {form.address || 'Not specified'}</div>
                            </div>
                            {form.notes && (
                              <div className="mt-2 text-sm">
                                <span className="text-gray-500">Notes:</span> {form.notes}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {activeForm === 'nutrition' && (
                  <div>
                    {savedForms.nutrition.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">No saved nutrition assessment forms yet.</p>
                    ) : (
                      <div className="space-y-4">
                        {savedForms.nutrition.map(form => (
                          <div key={form.id} className={`border rounded-lg p-4 ${form.isDraft ? 'border-amber-300 bg-amber-50' : 'border-gray-200'}`}>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">{form.childName || 'Unnamed'}</h3>
                              <div className="flex items-center">
                                {form.isDraft && (
                                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2">
                                    Draft
                                  </span>
                                )}
                                <span className="text-xs text-gray-500">
                                  {new Date(form.timestamp).toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div><span className="text-gray-500">Age:</span> {form.age} months</div>
                              <div><span className="text-gray-500">Weight:</span> {form.weight || 'Not specified'} kg</div>
                              <div><span className="text-gray-500">Height:</span> {form.height || 'Not specified'} cm</div>
                              <div><span className="text-gray-500">MUAC:</span> {form.muac || 'Not specified'} mm</div>
                              <div><span className="text-gray-500">Status:</span> {form.status || 'Not specified'}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {activeForm === 'wash' && (
                  <div>
                    {savedForms.wash.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">No saved WASH services forms yet.</p>
                    ) : (
                      <div className="space-y-4">
                        {savedForms.wash.map(form => (
                          <div key={form.id} className={`border rounded-lg p-4 ${form.isDraft ? 'border-amber-300 bg-amber-50' : 'border-gray-200'}`}>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">Household: {form.householdId || 'Unidentified'}</h3>
                              <div className="flex items-center">
                                {form.isDraft && (
                                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2">
                                    Draft
                                  </span>
                                )}
                                <span className="text-xs text-gray-500">
                                  {new Date(form.timestamp).toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div><span className="text-gray-500">Residents:</span> {form.residents || 'Not specified'}</div>
                              <div><span className="text-gray-500">Water Source:</span> {form.waterSource || 'Not specified'}</div>
                              <div><span className="text-gray-500">Sanitation:</span> {form.sanitationFacility || 'Not specified'}</div>
                            </div>
                            {form.issues && (
                              <div className="mt-2 text-sm">
                                <span className="text-gray-500">Issues:</span> {form.issues}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
