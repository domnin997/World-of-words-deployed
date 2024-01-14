import './dictionaryPlaceholder.css';

export default function DictionaryPlaceholder ({type}) {
  function createPlaceholder () {
    if (type === 'unauthorised') {
      return (
        <span>
          Чтобы начать работу со словарем, пожалуйста, войдите или зарегистрируйтесь.
        </span>
      )
    } else if (type === 'empty') {
      return (
        <span>
          Ваш словарь пуст - добавьте новые слова или измените критерии поиска.
        </span>
      )
    }
  }

  const content = createPlaceholder();
  return (
    <div className='placeholder-container'>
      {content}
    </div>
  )
}