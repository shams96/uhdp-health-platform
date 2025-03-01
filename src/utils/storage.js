// Utility functions for data storage using localStorage

// Save data to localStorage
export const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
};

// Load data from localStorage
export const loadData = (key, defaultValue = null) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error('Error loading data:', error);
    return defaultValue;
  }
};

// Keys for different data types
export const STORAGE_KEYS = {
  CHILDREN: 'uhdp_children',
  POLIO_DATA: 'uhdp_polio_data',
  NUTRITION_DATA: 'uhdp_nutrition_data',
  WASH_DATA: 'uhdp_wash_data',
  USER_SETTINGS: 'uhdp_user_settings'
};
