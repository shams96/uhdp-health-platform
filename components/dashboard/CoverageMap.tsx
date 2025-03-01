
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample data - in a real app, this would come from an API
const sampleLocations = [
  { id: 1, name: 'Karachi', lat: 24.8607, lng: 67.0011, coverage: 78, type: 'urban' },
  { id: 2, name: 'Lahore', lat: 31.5204, lng: 74.3587, coverage: 82, type: 'urban' },
  { id: 3, name: 'Islamabad', lat: 33.6844, lng: 73.0479, coverage: 91, type: 'urban' },
  { id: 4, name: 'Peshawar', lat: 34.0151, lng: 71.5249, coverage: 65, type: 'urban' },
  { id: 5, name: 'Quetta', lat: 30.1798, lng: 66.9750, coverage: 58, type: 'urban' },
  { id: 6, name: 'Multan', lat: 30.1575, lng: 71.5249, coverage: 72, type: 'urban' },
  { id: 7, name: 'Faisalabad', lat: 31.4504, lng: 73.1350, coverage: 76, type: 'urban' },
  { id: 8, name: 'Rawalpindi', lat: 33.5651, lng: 73.0169, coverage: 85, type: 'urban' },
  { id: 9, name: 'Gujranwala', lat: 32.1877, lng: 74.1945, coverage: 79, type: 'urban' },
  { id: 10, name: 'Sialkot', lat: 32.4945, lng: 74.5229, coverage: 81, type: 'urban' },
  { id: 11, name: 'Rural Sindh', lat: 25.8943, lng: 68.5247, coverage: 54, type: 'rural' },
  { id: 12, name: 'Rural Punjab', lat: 31.1704, lng: 72.7097, coverage: 68, type: 'rural' },
  { id: 13, name: 'Rural KPK', lat: 34.9526, lng: 72.3311, coverage: 49, type: 'rural' },
  { id: 14, name: 'Rural Balochistan', lat: 28.4907, lng: 65.0964, coverage: 42, type: 'rural' },
];

// Helper function to determine circle color based on coverage percentage
const getColorByPercentage = (percentage: number) => {
  if (percentage >= 80) return '#22c55e'; // Green
  if (percentage >= 60) return '#eab308'; // Yellow
  return '#ef4