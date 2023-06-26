import './app-work-field.css';
import {Container, Row} from 'react-bootstrap';
import AppAbout from '../app-about/app-about';
import StudyField from '../app-learn-words/app-learn-words';
import SearchPanel from '../app-search-panel/app-search-panel';

function AppWorkField ({props , addWord, onDelete, getSearchedWord, words}) {

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
                        />
        </div>)
    }
}

export default AppWorkField;