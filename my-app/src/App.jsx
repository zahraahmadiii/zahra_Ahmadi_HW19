import styles from './App.module.css'
import  ManageContact from "./Components/Contacts-Managment/index"
import Modal  from './Components/Contacts-Modal/index'
import 'react-toastify/dist/ReactToastify.css';
import {DeletModal} from './Components/ModalForDelete'
import { useSelector } from 'react-redux';

function App() {

  const state = useSelector(state => state.contactData)

  let getLocal = JSON.parse(localStorage.getItem('contact'))
        

  return (
    <div className={styles.App}>
   
    <ManageContact/>
    <div className={styles.wrapperModal}>
    {getLocal ? getLocal.map(item => (
         <Modal item={item} />
      )) :''}
    </div>
    {state.deletMood? <DeletModal/>:null}
    </div>
  )
}

export default App
