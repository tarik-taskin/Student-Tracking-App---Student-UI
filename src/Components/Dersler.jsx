import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BarChart } from '@mui/x-charts/BarChart';
import '../App.css';

function Dersler() {
  const [selectedCourse, setSelectedCourse] = React.useState('');

  // Ders bazlı ödevler
  const courseAssignments = {
    "Kimya": [
      { name: "Aydın Kimya - Asit ve Bazlar", dueDate: "4/09/2025", duration: 2, teacher: "Hülya Ersoy" }
    ],
    "Matematik": [
      { name: "3D Matematik - Polinomlar", dueDate: "5/08/2025", duration: 3, teacher: "Hülya Ersoy" }
    ],
    "Biyoloji": [
      { name: "Palme Biyoloji - DNA Replikasyonu", dueDate: "6/03/2025", duration: 5, teacher: "Hülya Ersoy" }
    ],
    "Fizik": [
      { name: "Okyanus Fizik - Maddenin Halleri", dueDate: "4/03/2025", duration: 6, teacher: "Hülya Ersoy" },
      { name: "3D Fizik - Maddenin Halleri", dueDate: "1/03/2025", duration: 1, teacher: "Hülya Ersoy" },
      { name: "3D Fizik - Kuvvet", dueDate: "1/09/2025", duration: 1, teacher: "Hülya Ersoy" }
    ],
    "Türkçe": [],
    "Tarih": [],
    "Coğrafya": [],
    "Din Kültürü ve Ahlak Bilgisi": []
  };

  // Ders bazlı net skorları
  const courseNetScores = {
    "Kimya": [
      { month: "Ocak", score: 12 },
      { month: "Şubat", score: 15 },
      { month: "Mart", score: 18 },
      { month: "Nisan", score: 16 }
    ],
    "Matematik": [
      { month: "Ocak", score: 22 },
      { month: "Şubat", score: 25 },
      { month: "Mart", score: 28 },
      { month: "Nisan", score: 30 }
    ],
    "Biyoloji": [
      { month: "Ocak", score: 9 },
      { month: "Şubat", score: 12 },
      { month: "Mart", score: 14 },
      { month: "Nisan", score: 16 }
    ],
    "Fizik": [
      { month: "Ocak", score: 15 },
      { month: "Şubat", score: 17 },
      { month: "Mart", score: 19 },
      { month: "Nisan", score: 20 }
    ],
    "Türkçe": [
      { month: "Ocak", score: 25 },
      { month: "Şubat", score: 27 },
      { month: "Mart", score: 29 },
      { month: "Nisan", score: 30 }
    ],
    "Tarih": [
      { month: "Ocak", score: 18 },
      { month: "Şubat", score: 20 },
      { month: "Mart", score: 22 },
      { month: "Nisan", score: 23 }
    ],
    "Coğrafya": [
      { month: "Ocak", score: 16 },
      { month: "Şubat", score: 18 },
      { month: "Mart", score: 19 },
      { month: "Nisan", score: 21 }
    ],
    "Din Kültürü ve Ahlak Bilgisi": [
      { month: "Ocak", score: 28 },
      { month: "Şubat", score: 29 },
      { month: "Mart", score: 30 },
      { month: "Nisan", score: 32 }
    ]
  };

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const renderNetScoreChart = () => {
    if (!selectedCourse) return null;
    
    const data = courseNetScores[selectedCourse];
    const months = data.map(item => item.month);
    const scores = data.map(item => item.score);
    
    return (
      <div className="netScoreChart">
        <h3 className='derstext'>{selectedCourse} Dersi Son Dönem Netleri</h3>
        <BarChart
          xAxis={[{ 
            scaleType: 'band', 
            data: months,
            label: 'Aylar',
            tickLabelStyle: { fill: '#333' }
          }]}
          series={[
            { 
              data: scores,
              label: 'Net Sayısı',
              color: '#8884d8'
            }
          ]}
          width={500}
          height={300}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '15px',
            '.MuiChartsAxis-tickLabel': { fill: '#333' }
          }}
        />
      </div>
    );
  };

  return (
    <div className='derslercontainer'>
      <div className='dersSelect'>
        <Box sx={{ minWidth: 500 }}>
          <FormControl fullWidth>
            <InputLabel id="course-select-label">Ders</InputLabel>
            <Select
              labelId="course-select-label"
              id="course-select"
              value={selectedCourse}
              label="Ders"
              onChange={handleChange}
              width="100%"
            >
              <MenuItem value="Türkçe">Türkçe</MenuItem>
              <MenuItem value="Matematik">Matematik</MenuItem>
              <MenuItem value="Fizik">Fizik</MenuItem>
              <MenuItem value="Kimya">Kimya</MenuItem>
              <MenuItem value="Biyoloji">Biyoloji</MenuItem>
              <MenuItem value="Tarih">Tarih</MenuItem>
              <MenuItem value="Coğrafya">Coğrafya</MenuItem>
              <MenuItem value="Din Kültürü ve Ahlak Bilgisi">Din Kültürü ve Ahlak Bilgisi</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      
      {selectedCourse && (
        <div className="selectedCourseInfo">
          {/* Net skorları grafiği */}
          {renderNetScoreChart()}
          
          {/* Ödev bilgileri */}
          <div className="odevbilgisi">
            {courseAssignments[selectedCourse] && courseAssignments[selectedCourse].length > 0 ? (
              <div>
                <h3 className='derstext'>{selectedCourse} Dersi Ödevleri:</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {courseAssignments[selectedCourse].map((assignment, index) => (
                    <li key={index} style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      <p className='derstext' style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>{assignment.name}</p>
                      <p className='derstext' style={{ margin: '0 0 3px 0', fontSize: '14px' }}>Öğretmen: {assignment.teacher}</p>
                      <p className='derstext' style={{ margin: '0 0 3px 0', fontSize: '14px' }}>Tarih: {assignment.dueDate}</p>
                      <p className='derstext' style={{ margin: '0', fontSize: '14px' }}>Süre: {assignment.duration} gün</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className='derstext'>Bu dersten ödeviniz bulunmamaktadır.</p>
            )}
          </div>
        </div>
      )}
      
      {!selectedCourse && <p className='derstext'>Lütfen bir ders seçiniz.</p>}
    </div>
  );
}

export default Dersler