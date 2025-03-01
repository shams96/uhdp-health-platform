'use client';

import React from 'react';

export default function FormsPage() {
  const [activeForm, setActiveForm] = React.useState('polio');
  
  return (
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter child's full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age (months)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter age in months"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vaccination Status
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter full address"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter any additional notes"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Save Draft
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter child's full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age (months)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter height in cm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    MUAC (mm)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Mid-Upper Arm Circumference"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nutritional Status
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Select status</option>
                    <option value="normal">Normal</option>
                    <option value="moderate">Moderate Malnutrition</option>
                    <option value="severe">Severe Malnutrition</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Supplements Provided
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="vitamin-a" className="mr-2" />
                      <label htmlFor="vitamin-a">Vitamin A</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="iron" className="mr-2" />
                      <label htmlFor="iron">Iron Supplements</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="zinc" className="mr-2" />
                      <label htmlFor="zinc">Zinc</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Save Draft
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter household ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Residents
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter number of residents"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Water Source
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
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
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Select facility type</option>
                    <option value="flush">Flush Toilet</option>
                    <option value="pit">Pit Latrine</option>
                    <option value="shared">Shared Facility</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hygiene Practices
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="handwashing" className="mr-2" />
                      <label htmlFor="handwashing">Handwashing Station Available</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="soap" className="mr-2" />
                      <label htmlFor="soap">Soap Available</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="wastebin" className="mr-2" />
                      <label htmlFor="wastebin">Proper Waste Disposal</label>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issues/Concerns
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter any issues or concerns"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Save Draft
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
