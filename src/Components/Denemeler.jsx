import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../App.css';
import { Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Denemeler() {
  const [selectedCourse, setSelectedCourse] = React.useState('');


  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  const buttonClicked = () => {

  }

  return (
    <div>
      <div className="butonlar_denemeler">
        <div className="btndva">
          <Button className='buton_denemeler' variant="contained" color='info' onClick={buttonClicked} sx={{ borderRadius: '20px' }}>TYT</Button>
        </div>
        <div className="btndva">
          <Button className='buton_denemeler' variant="contained" color='info' onClick={buttonClicked} sx={{ borderRadius: '20px' }}>AYT</Button>
        </div>
      </div>
      <div className='dersSelect'>
        <Box sx={{ minWidth: 500 }}>
          <FormControl fullWidth>
            <InputLabel id="course-select-label">
              Gönderim Durumu
            </InputLabel>
            <Select
              labelId="course-select-label"
              id="course-select"
              label="Gönderim Durumu"
              value={selectedCourse}
              onChange={handleChange}
              width="100%"
            >
              <MenuItem value="Gönderilmiş">Gönderilmiş</MenuItem>
              <MenuItem value="Gönderilmemiş">Gönderilmemiş</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="deneme_sonuc">
        <div className='deneme_accordion'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Hız ve Renk TYT</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="sonucdataviews">
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Toplam</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">80</span></p>
                    <p>Yanlış: <span className="yanlis">21</span></p>
                    <p>Boş: <span className="bos">9</span></p>
                    <p>Net Sayısı: <span className="net">74.75</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Türkçe</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">32</span></p>
                    <p>Yanlış: <span className="yanlis">5</span></p>
                    <p>Boş: <span className="bos">3</span></p>
                    <p>Net Sayısı: <span className="net">30.75</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Matematik</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">28</span></p>
                    <p>Yanlış: <span className="yanlis">8</span></p>
                    <p>Boş: <span className="bos">4</span></p>
                    <p>Net Sayısı: <span className="net">26.00</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Tarih</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">4</span></p>
                    <p>Yanlış: <span className="yanlis">0</span></p>
                    <p>Boş: <span className="bos">1</span></p>
                    <p>Net Sayısı: <span className="net">4.00</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Coğrafya</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">3</span></p>
                    <p>Yanlış: <span className="yanlis">2</span></p>
                    <p>Boş: <span className="bos">0</span></p>
                    <p>Net Sayısı: <span className="net">2.50</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Din Kültürü ve Ahlak Bilgisi</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">3</span></p>
                    <p>Yanlış: <span className="yanlis">2</span></p>
                    <p>Boş: <span className="bos">0</span></p>
                    <p>Net Sayısı: <span className="net">2.50</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Fizik</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">4</span></p>
                    <p>Yanlış: <span className="yanlis">0</span></p>
                    <p>Boş: <span className="bos">1</span></p>
                    <p>Net Sayısı: <span className="net">4.00</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Kimya</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">3</span></p>
                    <p>Yanlış: <span className="yanlis">2</span></p>
                    <p>Boş: <span className="bos">0</span></p>
                    <p>Net Sayısı: <span className="net">2.50</span></p>
                  </div>
                </div>
                <div className="sonuc_kart">
                  <Typography variant="h6" className="sonuc_baslik">Biyoloji</Typography>
                  <div className="sonuc_detay">
                    <p>Doğru: <span className="dogru">3</span></p>
                    <p>Yanlış: <span className="yanlis">2</span></p>
                    <p>Boş: <span className="bos">0</span></p>
                    <p>Net Sayısı: <span className="net">2.50</span></p>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Denemeler