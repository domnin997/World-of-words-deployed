import './aboutApp.css';
import AppAboutItem from '../aboutAppItem/aboutAppItem.js';
import studyingPic from './study_icon_2.png';
import filterPic from './filter_icon_5.png';
import freePic from './free_icon.png';
import categoryPic from './categories_icon.png';
 
function AppAbout () {
    
  return ( 
    <div className='about_block'>
      <AppAboutItem pic={studyingPic} 
            text={'World of Words - это приложение для изучения иностранных слов. Добавляйте и удаляйте слова, а также перевод к ним, пополняя словарь.'}/> 
      <AppAboutItem pic={filterPic} 
            text={'Работать со словарем легко благодаря ряду фильтров - ищите конкретные слова или сортируйте их по категории. '}/> 
      <AppAboutItem pic={freePic}
            text={'Приложение абсолютно бесплатно - добавляйте любое количество слов и пользуйтесь словарем в любое время с разных устройств.'}/>
      <AppAboutItem pic={categoryPic}
            text={'Устанавливаейте приоритет для изучения, чтобы ускорить процесс.'}/>
    </div>
  ); 
}

export default AppAbout;