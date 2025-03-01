import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useChildStore = create(
  persist(
    (set, get) => ({
      children: [],
      polioData: {},
      nutritionData: {},
      washData: {},
      
      // Child management
      addChild: (child) => {
        const newChild = {
          ...child,
          id: Date.now().toString(),
          registrationDate: new Date().toISOString()
        }
        set(state => ({ 
          children: [...state.children, newChild]
        }))
        return newChild.id
      },
      
      updateChild: (id, data) => {
        set(state => ({
          children: state.children.map(child => 
            child.id === id ? { ...child, ...data } : child
          )
        }))
      },
      
      getChild: (id) => {
        return get().children.find(child => child.id === id)
      },
      
      // Polio data management
      savePolioData: (childId, data) => {
        set(state => ({
          polioData: {
            ...state.polioData,
            [childId]: {
              ...data,
              lastUpdated: new Date().toISOString()
            }
          }
        }))
      },
      
      getPolioData: (childId) => {
        return get().polioData[childId] || null
      },
      
      // Nutrition data management
      saveNutritionData: (childId, data) => {
        set(state => ({
          nutritionData: {
            ...state.nutritionData,
            [childId]: {
              ...data,
              lastUpdated: new Date().toISOString()
            }
          }
        }))
      },
      
      getNutritionData: (childId) => {
        return get().nutritionData[childId] || null
      },
      
      // WASH data management
      saveWashData: (childId, data) => {
        set(state => ({
          washData: {
            ...state.washData,
            [childId]: {
              ...data,
              lastUpdated: new Date().toISOString()
            }
          }
        }))
      },
      
      getWashData: (childId) => {
        return get().washData[childId] || null
      },
      
      // Get child's data status
      getChildDataStatus: (childId) => {
        const polioData = get().polioData[childId]
        const nutritionData = get().nutritionData[childId]
        const washData = get().washData[childId]
        
        return {
          polio: polioData ? (polioData.isDraft ? 'draft' : 'complete') : 'missing',
          nutrition: nutritionData ? (nutritionData.isDraft ? 'draft' : 'complete') : 'missing',
          wash: washData ? (washData.isDraft ? 'draft' : 'complete') : 'missing'
        }
      }
    }),
    {
      name: 'child-health-storage'
    }
  )
)
