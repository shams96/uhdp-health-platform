import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useChildStore } from '../store/childStore'

function Dashboard() {
  const children = useChildStore(state => state.children)
  const getChildDataStatus = useChildStore(state => state.getChildDataStatus)
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredChildren = children.filter(child => 
    `${child.firstName} ${child.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    child.id.includes(searchTerm)
  )
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h1>Dashboard</h1>
        <Link to="/register">
          <button>Register New Child</button>
        </Link>
      </div>
      
      <div className="card">
        <div style={{ marginBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Search by name or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        
        <h2>Registered Children ({children.length})</h2>
        
        {filteredChildren.length === 0 ? (
          <p>No children found. Please register a child to get started.</p>
        ) : (
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Gender</th>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Date of Birth</th>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Polio</th>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Nutrition</th>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>WASH</th>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredChildren.map(child => {
                  const status = getChildDataStatus(child.id)
                  
                  return (
                    <tr key={child.id} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.5rem' }}>{child.firstName} {child.lastName}</td>
                      <td style={{ padding: '0.5rem' }}>{child.gender}</td>
                      <td style={{ padding: '0.5rem' }}>{new Date(child.dateOfBirth).toLocaleDateString()}</td>
                      <td style={{ padding: '0.5rem' }}>
                        <StatusBadge status={status.polio} />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <StatusBadge status={status.nutrition} />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <StatusBadge status={status.wash} />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <Link to={`/polio/${child.id}`}>
                            <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}>Polio</button>
                          </Link>
                          <Link to={`/nutrition/${child.id}`}>
                            <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}>Nutrition</button>
                          </Link>
                          <Link to={`/wash/${child.id}`}>
                            <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}>WASH</button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      <div className="card">
        <h2>Summary</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <SummaryCard 
            title="Total Children" 
            value={children.length} 
            color="#0066cc" 
          />
          <SummaryCard 
            title="Polio Vaccination" 
            value={children.filter(child => getChildDataStatus(child.id).polio === 'complete').length} 
            total={children.length}
            color="#00cc66" 
          />
          <SummaryCard 
            title="Nutrition Assessment" 
            value={children.filter(child => getChildDataStatus(child.id).nutrition === 'complete').length} 
            total={children.length}
            color="#cc6600" 
          />
          <SummaryCard 
            title="WASH Services" 
            value={children.filter(child => getChildDataStatus(child.id).wash === 'complete').length} 
            total={children.length}
            color="#6600cc" 
          />
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  let backgroundColor = '#f0f0f0'
  let textColor = '#666666'
  let label = 'Missing'
  
  if (status === 'complete') {
    backgroundColor = '#e6f7e6'
    textColor = '#00cc66'
    label = 'Complete'
  } else if (status === 'draft') {
    backgroundColor = '#fff7e6'
    textColor = '#cc6600'
    label = 'Draft'
  }
  
  return (
    <span style={{ 
      backgroundColor, 
      color: textColor, 
      padding: '0.25rem 0.5rem', 
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '500'
    }}>
      {label}
    </span>
  )
}

function SummaryCard({ title, value, total, color }) {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '8px', 
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderLeft: `4px solid ${color}`
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', color }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>
        {value}
        {total && <span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}> / {total}</span>}
      </p>
      {total && (
        <div style={{ 
          height: '4px', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '2px',
          marginTop: '0.5rem'
        }}>
          <div style={{ 
            height: '100%', 
            width: `${(value / total) * 100}%`, 
            backgroundColor: color,
            borderRadius: '2px'
          }} />
        </div>
      )}
    </div>
  )
}

export default Dashboard
