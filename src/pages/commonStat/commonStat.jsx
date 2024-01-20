import './commonStat.css';
// Static placeholders will be replaced by dynamic data from back

export default function CommonStat () {
  
  return (
    <>
      <div className='common-stat-block'>
        <h2>Ваша общая статистика</h2>
        <div className='stat-wrapper'>
          <div>
            Словарей создано: 1
          </div>
          <div>
            Слов добавлено: 156
          </div>
          <div>
            Самый большой словарь: Поездки 
          </div>
          <div>
            Слов выучено: 130
          </div>
          <div>
            Слов на повторении: 26
          </div>
        </div>
      </div>
    </>
  )
}