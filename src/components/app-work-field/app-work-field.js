import './app-work-field.css';
// import {Container, Row} from 'react-bootstrap';
import AppAbout from '../app-about/app-about';
import StudyField from '../app-learn-words/app-learn-words';

function AppWorkField ({props , addWord, onDelete, getSearchedWord, words, getSelectedCategory}) {
    let {aboutBtn, learnBtn} = props;
    if (aboutBtn.clicked) {
        return (
            <div className='wrapper'> 
                <AppAbout/>
            </div>)
    } else if (learnBtn) {
        return (
            <div className='wrapper'>
                <StudyField wordsBase={props.wordsBase}
                            addWord={addWord}
                            onDelete={onDelete}
                            getSearchedWord={getSearchedWord}
                            visibleWords={words}
                            getSelectedCategory={getSelectedCategory}
                            />
            </div>)
    }
}

export default AppWorkField;