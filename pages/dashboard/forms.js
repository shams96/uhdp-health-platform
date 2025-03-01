import { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../../components/dashboard/Sidebar'
import Header from '../../components/dashboard/Header'

export default function FormsPage() {
  const [activeForm, setActiveForm] = useState('polio')
  
  return (
    <div>
      <Head>
        <title>Data Forms | UHDP</title>
      </Head>

      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-800">Data Collection Forms</h1>
              
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
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Gender
                          </label>
                          <select className="input-field">
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Vaccination Status
                          </label>
                          <select className="input-field">
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
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <button className="btn-secondary">
                          Save Draft
                        </button>
                        <button className="btn-primary">
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
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <button className="btn-secondary">
                          Save Draft
                        </button>
                        <button className="btn-primary">
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
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Water Source
                          </label>
                          <select className="input-field">
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
                          <select className="input-field">
                            <option value="">Select facility type</option>
                            <option value="flush">Flush Toilet</option>
                            <option value="pit">Pit Latrine</option>
                            <option value="shared">Shared Facility</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <button className="btn-secondary">
                          Save Draft
                        </button>
                        <button className="btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
