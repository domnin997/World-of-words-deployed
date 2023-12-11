import './footer.css';
 
function AppFooter () {
  return (
    <div className='footer_block'>     
      <div className='footer_disclaimer'>
        Данная страница является частью демонстрационного некоммерческого проекта, созданного в учебных целях. <br/>Копирование, использование и распространение без разрешения автора не допускается.
      </div>
      <div className='contacts_wrapper'>
        <div>Телефон: +7 (777) 777-77</div>
        <div>E-mail: example@example.com</div>
        <div>Адрес: 3-й кодерский переулок, д. 1</div>
      </div>
      <div className='developer'>
        Дмитрий Домнин. 2023
      </div>
    </div>
)}

export default AppFooter;