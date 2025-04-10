import React from 'react'
import '../App.css'
import Checkbox from '@mui/material/Checkbox';
import CircleIcon from '@mui/icons-material/Circle';
// import Button from '@mui/material/Button';
import { Button, Alert, Snackbar } from "@mui/material";
import { useState, useEffect } from 'react';
function Odevozet({ odevad, ogretmenad, odevtarihi, odevsuresi }) {
    const [checked, setChecked] = useState(false);
    const [checkboxDisabled, setcheckboxDisabled] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [textDecoration, settextDecoration] = useState(false)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [due, setdue] = useState(false);
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        const calculateRemainingTime = () => {
            const now = new Date();
    
            const dateParts = odevtarihi.split('/');
            const day = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10) - 1;
            const year = parseInt(dateParts[2], 10);
            const dueDate = new Date(year, month, day);
    
            dueDate.setDate(dueDate.getDate() + odevsuresi);
    
            const timeDiff = dueDate - now;
            if (timeDiff > 0) {
                let remaining = timeDiff;
                const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
                remaining %= (1000 * 60 * 60 * 24);
                const hours = Math.floor(remaining / (1000 * 60 * 60));
                remaining %= (1000 * 60 * 60);
                const minutes = Math.floor(remaining / (1000 * 60));
    
                let formattedTime = '';
                if (days > 0) {
                    formattedTime += `${days} gün `;
                }
                formattedTime += `${hours} saat ${minutes} dakika`;
                setRemainingTime(formattedTime);
            } else {
                setRemainingTime('Süre doldu');
                setdue(true);
            }
        };
    
        calculateRemainingTime();
        const interval = setInterval(calculateRemainingTime, 60000);
    
        return () => clearInterval(interval);
    }, [odevtarihi, odevsuresi]);

    const checkboxChange = (event) => {
        setChecked(!checked);
        setButtonDisabled(checked ? true : false);
    }
    const buttonClicked = () => {
        if (due)
        {
            setOpen2(true);
            setTimeout(() => {
              setOpen2(false);
            }, 3000);
        }
        else
        {
            settextDecoration(true);
            setcheckboxDisabled(true);
            setButtonDisabled(true);
            setOpen(true);
            
            setTimeout(() => {
              setOpen(false);
            }, 3000);
        }
    }

    const undoAction = () => {
        settextDecoration(false);
        setcheckboxDisabled(false);
        setButtonDisabled(false);
    }

    // Süre dolduysa null döndür
    if (due) {
        return null;
    }

    return (
        <div className='odev2'>
            <div className="odevaciklama">
                <div className="odevbaslik flex-row">
                    <p style={{ textDecoration: textDecoration ? 'line-through' : 'none' }}>{odevad}</p>
                </div>
                <div className='flex-row odevbilgi'>
                    <p>{ogretmenad}</p>
                    <CircleIcon className='circleicon' fontSize='small' />
                    <p> {odevtarihi} </p>
                    <CircleIcon className='circleicon' fontSize='small' />
                    <p>  {odevsuresi} Gün </p>
                    <CircleIcon className='circleicon' fontSize='small' />
                    <p> kalan süre: {remainingTime} </p>
                </div>
            </div>
        </div>
    )
}

export default Odevozet