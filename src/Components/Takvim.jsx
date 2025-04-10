import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs'; // dayjs import eklendi

function Takvim() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          defaultValue={dayjs()} 
          sx={{
            bgcolor: 'transparent',
            color: 'white',
            '& .MuiPickersDay-root': { 
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)'
              }
            },
            '& .MuiDayCalendar-weekDayLabel': { 
              color: 'white' 
            },
            '& .MuiPickersCalendarHeader-label': { 
              color: 'white' 
            },
            '& .MuiPickersCalendarHeader-switchViewIcon': { 
              color: 'white' 
            },
            '& .MuiPickersArrowSwitcher-button': {
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)'
              }
            },
            '& .MuiPickersDay-today': {
              border: '1px solid white',
              color: 'white'
            },
            '& .Mui-selected': {
              bgcolor: 'rgba(255, 255, 255, 0.2) !important',
              color: 'white !important'
            }
          }}
        />
      </LocalizationProvider>
    )
  }

export default Takvim