import './commonStat.css';
import WorkPage from '../../components/crud/entities/workPage/workPage';
import { PageLayoutContext } from '../../context/layoutContext'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
// Static placeholders will be replaced by dynamic data from back

export default function CommonStat () {
  const {
    headerLeftElement,
  } = useContext(PageLayoutContext);
  
  return (
    <WorkPage>
      {headerLeftElement && createPortal(
          <h2>Общая статистика</h2>,
          headerLeftElement
      )}
      <div className='common-stat-block'>
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
    </WorkPage>
  )
}