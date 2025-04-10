import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
function Duyurular() {
  return (
    <div>
        <div className='duyurular flex-column'>
          <h3 className>
            Duyurular
          </h3>
            <div className='duyuru'>
            <CircleIcon className='circleicon' fontSize='large' />
            <p>Sayın öğrencilerimiz, Matematik ve Fizik derslerine ait dönem sonu projeleri için son teslim tarihi 15 Mayıs 2025 olarak belirlenmiştir. Ödevlerinizi zamanında teslim etmemeniz durumunda, sınav notunuzun %30'u kadar puan kesintisi uygulanacaktır. Projenizi PDF formatında öğretim görevlinizin e-posta adresine göndermeniz ve aynı zamanda basılı kopyanın da elden teslim edilmesi gerekmektedir. Tüm belgelerin eksiksiz olduğundan emin olunuz.</p>
            </div>
            <div className='duyuru'>
            <CircleIcon className='circleicon' fontSize='large' />
            <p>2025-2026 Eğitim Yılı Bahar Dönemi ders programı okulumuzun web sitesinde yayınlanmıştır. Bu dönem itibarıyla dijital medya laboratuvarımız haftanın her günü 08:00-20:00 saatleri arasında kullanıma açık olacaktır. Ayrıca yeni açılan "Yapay Zeka ve Gelecek Teknolojileri" seçmeli dersi için kontenjan sınırlı olduğundan, ilgilenen öğrencilerin en geç 20 Nisan tarihine kadar öğrenci işlerine başvurması gerekmektedir. Kredi yükleme işlemlerinizi de lütfen belirtilen son tarihe kadar tamamlayınız.</p>
            </div>
            <div className='duyuru'>
            <CircleIcon className='circleicon' fontSize='large' />
            <p>Üniversitemiz tarafından bu yıl düzenlenecek olan Yaz Okulu programı başvuruları başlamıştır. 5 Haziran - 20 Temmuz tarihleri arasında gerçekleşecek program kapsamında, öğrencilerimiz hem eksik kredilerini tamamlama hem de ilgi duydukları alanlarda kendilerini geliştirme fırsatı bulacaklardır. Ayrıca, bu yıl ilk kez uluslararası firmalarda staj imkanı da sağlanacaktır. Program detayları, ücretlendirme ve başvuru koşulları için Öğrenci İşleri ofisimizle iletişime geçebilir veya web sitemizin "Yaz Okulu" bölümünü ziyaret edebilirsiniz. Son başvuru tarihi 15 Mayıs 2025'tir.</p>
            </div>     
        </div>
    </div>
  )
}

export default Duyurular