import styles from './DataContext.module.css'
import { createContext, useEffect, useState } from 'react'

export const DataContext = createContext() // criando um contexto

export default function DataProvider({ children }) {
    
    //colocando todas as variáveis que precisam utilizar os dados do backend neste contexto, podendo utilizar todas as variáveis em qualquer lugar do projeto através do 'useContext' 
    const [listUnicQuestionsContext, setListUnicQuestionsContext] = useState([])
    const [listUnicQuestionsContextLength, setListUnicQuestionsContextLength] = useState('')
    const [listUnicOptionsContext, setListUnicOptionsContext] = useState([])

    const [listMultiQuestionsContext, setListMultiQuestionsContext] = useState([])
    const [listMultiQuestionsContextLength, setListMultiQuestionsContextLength] = useState('')
    const [listMultiOptionsContext, setListMultiOptionsContext] = useState([])

    const [listThreeMultiQuestionsContext, setListThreeMultiQuestionsContext] = useState([])
    const [listThreeMultiQuestionsContextLength, setListThreeMultiQuestionsContextLength] = useState('')
    const [listThreeMultiOptionsContext, setListThreeMultiOptionsContext] = useState([])

    const [loading, setLoading] = useState(false)

    const [postApi, setPostApi] = useState(false)

    const [deleteApi, setDeleteApi] = useState(false) // torna verdadeiro ao deletar

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
                    setListUnicQuestionsContext(data) // capturando os dados do backend
                    setListUnicQuestionsContextLength(data.length) // capturando o comprimento dos dados do backend                  
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
                    setListUnicOptionsContext(data) // capturando os dados do backend
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
                    setListMultiQuestionsContext(data) // capturando os dados do backend
                    setListMultiQuestionsContextLength(data.length) // capturando o comprimento dos dados do backend                           
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
                    setListMultiOptionsContext(data) // capturando os dados do backend
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
                    setListThreeMultiQuestionsContext(data) // capturando os dados do backend
                    setListThreeMultiQuestionsContextLength(data.length) // capturando o comprimento dos dados do backend                           
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
                    setListThreeMultiOptionsContext(data) // capturando os dados do backend
                    setLoading(false) // desabilitar o loading
                
                }       
                
            } catch (error) {
                console.log('Erro ao buscar as opções:', error)                         
                setLoading(false) // desabilitar o loading
                
            }

        }

        fetchData6()

    }, [postApi, deleteApi])

    return (        
        <DataContext.Provider
            value={{
                listUnicQuestionsContext,
                listUnicQuestionsContextLength,
                listUnicOptionsContext,
                listMultiQuestionsContext,
                listMultiQuestionsContextLength,
                listMultiOptionsContext,
                listThreeMultiQuestionsContext,
                listThreeMultiQuestionsContextLength,
                listThreeMultiOptionsContext,
                loading,
                setLoading,
                postApi,
                setPostApi,
                setDeleteApi,
                ableDisableMenuTools,
                setAbleDisableMenuTools
            }}
        >
            {children}

        </DataContext.Provider> 

    )

}
