import styles from './DataContext.module.css'
import { createContext, useEffect, useState } from 'react'

export const DataContext = createContext() // criando um contexto

export default function DataProvider({ children }) {
    
    //colocando todas as variáveis que precisam utilizar os dados do backend neste contexto, podendo utilizar todas as variáveis em qualquer lugar do projeto através do 'useContext' 
    const [listUnicQuestionsContext, setListUnicQuestionsContext] = useState([])
    const [listUnicQuestionsContextLength, setListUnicQuestionsContextLength] = useState(null)
    const [listUnicOptionsContext, setListUnicOptionsContext] = useState([])
    const [listUnicOptionsContextLength, setListUnicOptionsContextLength] = useState(null)

    const [listMultiQuestionsContext, setListMultiQuestionsContext] = useState([])
    const [listMultiQuestionsContextLength, setListMultiQuestionsContextLength] = useState(null)
    const [listMultiOptionsContext, setListMultiOptionsContext] = useState([])
    const [listMultiOptionsContextLength, setListMultiOptionsContextLength] = useState(null)

    const [listThreeMultiQuestionsContext, setListThreeMultiQuestionsContext] = useState([])
    const [listThreeMultiQuestionsContextLength, setListThreeMultiQuestionsContextLength] = useState(null)
    const [listThreeMultiOptionsContext, setListThreeMultiOptionsContext] = useState([])
    const [listThreeMultiOptionsContextLength, setListThreeMultiOptionsContextLength] = useState(null)

    const [loading, setLoading] = useState(false)

    const [postApi, setPostApi] = useState(false)
    const [putApi, setPutApi] = useState(false)
    const [deleteApi, setDeleteApi] = useState(false)

    const [ableDisableMenuTools, setAbleDisableMenuTools] = useState(styles.menuIcons) // capturando o estilo habilitado do menu inicialmente, usando contexto para que ele não restorne ao valor inicial, mesmo mudando de questão

    useEffect(() => {
        // dados da questão main
        const fetchData1 = async () => {
            try {
                setLoading(true) // habilitar o loading
                const res = await fetch("http://localhost:3001/listQuestionsMain")
                const data = await res.json() 

                if (!data) {
                    throw new Error("Dados inválidos")

                } else {
                    setListUnicQuestionsContext(data.filter(e => e.questionText && e.correctAnswer && e.description && e.questionNumber)) // capturando os dados do backend
                    setListUnicQuestionsContextLength(data.filter(e => e.questionText && e.correctAnswer && e.description && e.questionNumber).length) // capturando o comprimento dos dados do backend                
                    setLoading(false) // desabilitar o loading

                }
            
            } catch (error) {
                console.error('Erro ao buscar as questões:', error)                          
                setLoading(false) // desabilitar o loading 

            }
        
        }

        fetchData1()

        // dados da opção main
        const fetchData2 = async () => {
            try {                
                setLoading(true) // habilitar o loading
                const res = await fetch("http://localhost:3001/listOptionsMain")
                const data = await res.json() 
                
                if (!data) {
                    throw new Error("Dados inválidos")

                } else {
                    setListUnicOptionsContext(data.filter(e => e.optionA && e.optionB && e.optionC && e.optionD)) // capturando os dados do backend
                    setListUnicOptionsContextLength(data.filter(e => e.optionA && e.optionB && e.optionC && e.optionD).length) // capturando o comprimento dos dados do backend
                    setLoading(false) // desabilitar o loading

                }  
    
            } catch (error) {
                console.error('Erro ao buscar as opções:', error)                               
                setLoading(false) // desabilitar o loading

            }

        } 

        fetchData2()

        // dados da questão multi
        const fetchData3 = async () => {
            try {                
                setLoading(true) // habilitar o loading
                const res = await fetch("http://localhost:3001/listQuestionsMulti")
                const data = await res.json()

                if (!data) {
                    throw new Error("Dados inválidos")
                    
                } else {
                    setListMultiQuestionsContext(data.filter(e => e.questionText && e.correctAnswer && e.description && e.questionNumber)) // capturando os dados do backend
                    setListMultiQuestionsContextLength(data.filter(e => e.questionText && e.correctAnswer && e.description && e.questionNumber).length) // capturando o comprimento dos dados do backend                           
                    setLoading(false) // desabilitar o loading

                }   

            } catch (error) {
                console.log('Erro ao buscar as questões:', error)                            
                setLoading(false) // desabilitar o loading 
                
            }

        }

        fetchData3()

        // dados da opção multi
        const fetchData4 = async () => {
            try {                
                setLoading(true) // habilitar o loading
                const res = await fetch("http://localhost:3001/listOptionsMulti")
                const data = await res.json()

                if (!data) {
                    throw new Error("Dados inválidos")

                } else {
                    setListMultiOptionsContext(data.filter(e => e.optionA && e.optionB && e.optionC && e.optionD)) // capturando os dados do backend
                    setListMultiOptionsContextLength(data.filter(e => e.optionA && e.optionB && e.optionC && e.optionD).length) // capturando o comprimento dos dados do backend
                    setLoading(false) // desabilitar o loading
                
                }       
                
            } catch (error) {
                console.log('Erro ao buscar as opções:', error)                         
                setLoading(false) // desabilitar o loading
                
            }

        }

        fetchData4()

        // dados da questão threeMulti
        const fetchData5 = async () => {
            try {                
                setLoading(true) // habilitar o loading
                const res = await fetch("http://localhost:3001/listQuestionsThreeMulti")
                const data = await res.json()

                if (!data) {
                    throw new Error("Dados inválidos")
                    
                } else {
                    setListThreeMultiQuestionsContext(data.filter(e => e.questionText && e.correctAnswer && e.description && e.questionNumber)) // capturando os dados do backend
                    setListThreeMultiQuestionsContextLength(data.filter(e => e.questionText && e.correctAnswer && e.description && e.questionNumber).length) // capturando o comprimento dos dados do backend                          
                    setLoading(false) // desabilitar o loading

                }   

            } catch (error) {
                console.log('Erro ao buscar as questões:', error)                            
                setLoading(false) // desabilitar o loading 
                
            }

        }

        fetchData5()

        // dados da opção threeMulti
        const fetchData6 = async () => {
            try {                
                setLoading(true) // habilitar o loading
                const res = await fetch("http://localhost:3001/listOptionsThreeMulti")
                const data = await res.json()

                if (!data) {
                    throw new Error("Dados inválidos")

                } else {
                    setListThreeMultiOptionsContext(data.filter(e => e.optionA && e.optionB && e.optionC && e.optionD && e.optionE && e.optionF)) // capturando os dados do backend
                    setListThreeMultiOptionsContextLength(data.filter(e => e.optionA && e.optionB && e.optionC && e.optionD && e.optionE && e.optionF).length) // capturando o comprimento dos dados do backend
                    setLoading(false) // desabilitar o loading
                
                }       
                
            } catch (error) {
                console.log('Erro ao buscar as opções:', error)                         
                setLoading(false) // desabilitar o loading
                
            }

        }

        fetchData6()

    }, [postApi, putApi, deleteApi])

    return (        
        <DataContext.Provider
            value={{
                listUnicQuestionsContext,
                listUnicQuestionsContextLength,
                listUnicOptionsContext,
                listUnicOptionsContextLength,
                listMultiQuestionsContext,
                listMultiQuestionsContextLength,
                listMultiOptionsContext,
                listMultiOptionsContextLength,
                listThreeMultiQuestionsContext,
                listThreeMultiQuestionsContextLength,
                listThreeMultiOptionsContext,
                listThreeMultiOptionsContextLength,
                loading,
                setLoading,
                postApi,
                setPostApi, 
                setPutApi,
                setDeleteApi,
                ableDisableMenuTools,
                setAbleDisableMenuTools
            }}
        >
            {children}

        </DataContext.Provider> 

    )

}
