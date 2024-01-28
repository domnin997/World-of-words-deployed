import './dictionaries.css'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { PageLayoutContext } from '../../context/layoutContext'
import WorkPage from '../../components/crud/entities/workPage/workPage'

export default function Dictionaries () {
  // Создаем фильтры через CrudFilters - создаем конфигурацию
  // Создаем список карточек из полученной от back информации
  const {
    headerLeftElement,
  } = useContext(PageLayoutContext);
  return (
    <WorkPage>
      {headerLeftElement && createPortal(
        <h2>Мои словари</h2>,
        headerLeftElement
      )}
      <div>
        Словари списком - заглушка
      </div>
    </WorkPage>
  )
}