import styles from './App.module.css';
import Header from "./Components/Header";
import Question from "./Components/Question";
import ButtonAnswer from "./Components/ButtonAnswer";
import Answer from "./Components/Answer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header 
        title='Wellcome!!! Aws Architecture 1'>
      </Header>
      <div className={styles.questionAnswer}>
        <Question 
          question='What most efficient service can integrate data files from its on-premises with AWS Cloud via an NFS interface?'>
        </Question>

        <ButtonAnswer>
        </ButtonAnswer>

        <Answer
          answer='AWS Storage Gateway - Tape Gateway'
          srcImg='<svg class="w-6 h-6" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M19.871 4c-5.743 0-9.286 1.666-12.87 3.736V46H5V7.161c0-.355.187-.683.493-.863C9.361 4.033 13.37 2 19.871 2c6.042 0 10.468 2.281 14.024 4.115l.305.157a.999.999 0 01.542.889V24.5h-2V7.771C29.262 5.978 25.304 4 19.872 4zM41.8 44.1H16.294V26.521h6.325l.856 1.773a1 1 0 00.901.564H41.8V44.1zm1-17.242H25.003l-.857-1.772a1 1 0 00-.9-.565h-7.952a1 1 0 00-1 1V45.1a1 1 0 001 1H42.8a1 1 0 001-1V27.858a1 1 0 00-1-1z" fill="#3F8624" fillRule="evenodd"></path></svg>'
          descriptionP="AWS Storage Gateway's file interface, or file gateway, offers you a seamless way to connect to the cloud in order to store application data files and backup images as durable objects on Amazon S3 cloud storage. File gateway offers SMB or NFS-based access to data in Amazon S3 with local caching. As the company wants to integrate data files from its analytical instruments into AWS via an NFS interface, therefore AWS Storage Gateway - File Gateway is the correct answer."
        >
        </Answer>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;