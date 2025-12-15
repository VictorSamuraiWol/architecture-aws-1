import styles from './DataContext.module.css'
import { createContext, useEffect, useState } from 'react';

// criando um contexto
export const DataContext = createContext()

export default function DataProvider({ children }) {
    
    //colocando todas as variáveis que precisam utilizar os dados do backend neste contexto, podendo utilizar todas as variáveis em qualquer lugar do projeto através do 'useContext' 
    const [listUnicQuestionsContext, setListUnicQuestionsContext] = useState();
    const [listUnicQuestionsContextLength, setListUnicQuestionsContextLength] = useState();
    const [listUnicOptionsContext, setListUnicOptionsContext] = useState()

    const [listMultiQuestionsContext, setListMultiQuestionsContext] = useState()
    const [listMultiQuestionsContextLength, setListMultiQuestionsContextLength] = useState()
    const [listMultiOptionsContext, setListMultiOptionsContext] = useState()

    const [loading, setLoading] = useState(true)

    const [updateList, setUpdateList] = useState(false)

    const [postApi, setPostApi] = useState(false)

    const [deleteApi, setDeleteApi] = useState(false) // torna verdadeiro ao deletar

    useEffect(() => {

        const fetchData1 = async () => {
            try {

                // habilitar o loading
                setLoading(true)

                const res = await fetch("http://localhost:3001/questions");
                const data = await res.json(); 

                if (!data) {
                    throw new Error("Dados inválidos");

                } else {

                    setListUnicQuestionsContext(data)
                    setListUnicQuestionsContextLength(data.length)

                    // desabilitar o loading
                    setLoading(false)

                    postApi && setTimeout(() => {
                        setUpdateList(true) // torna a variável verdadeira em 300ms após o post ter sido realizado para dar tempo de atualizar a lista

                    }, 300)

                }
            
            } catch (error) {
                console.error('Erro ao buscar as questões:', error);

                // desabilitar o loading               
                setLoading(false)

            }
        
        }
        fetchData1()

        const fetchData2 = async () => {
            try {

                // habilitar o loading
                setLoading(true)

                const res = await fetch("http://localhost:3001/options");
                const data = await res.json(); 
                
                if (!data) {
                    throw new Error("Dados inválidos");

                } else {

                    setListUnicOptionsContext(data)
                    
                    // desabilitar o loading
                    setLoading(false)

                    postApi && setTimeout(() => {
                        setUpdateList(true) // torna a variável verdadeira em 300ms após o post ter sido realizado para dar tempo de atualizar a lista

                    }, 300)

                }  
    
            } catch (error) {
                console.error('Erro ao buscar as opções:', error);

                // desabilitar o loading               
                setLoading(false)

            }

        }    
        fetchData2()

        const fetchData3 = async () => {
            try {
                // habilitar o loading
                setLoading(true)

                const res = await fetch("http://localhost:3001/multiQuestions");
                const data = await res.json();

                if (!data) {
                    throw new Error("Dados inválidos");
                    
                } else {

                    setListMultiQuestionsContext(data)
                    setListMultiQuestionsContextLength(data.length)
                
                    // desabilitar o loading
                    setLoading(false)

                    postApi && setTimeout(() => {
                        setUpdateList(true) // torna a variável verdadeira em 300ms após o post ter sido realizado para dar tempo de atualizar a lista

                    }, 300)

                }   

            } catch (error) {
                console.log('Erro ao buscar as questões:', error);

                // desabilitar o loading                  
                setLoading(false)
                
            }

        }
        fetchData3()

        const fetchData4 = async () => {
            try {
                // habilitar o loading
                setLoading(true)

                const res = await fetch("http://localhost:3001/multiOptions");
                const data = await res.json();

                if (!data) {
                    throw new Error("Dados inválidos");

                } else {

                    setListMultiOptionsContext(data)                   

                    // desabilitar o loading
                    setLoading(false)

                    postApi && setTimeout(() => {
                        setUpdateList(true) // torna a variável verdadeira em 300ms após o post ter sido realizado para dar tempo de atualizar a lista

                    }, 300)

                }         
                
            } catch (error) {
                console.log('Erro ao buscar as opções:', error);

                // desabilitar o loading                  
                setLoading(false)
                
            }

        }
        fetchData4()

    }, [postApi, updateList, deleteApi])
 
    return (        
        <DataContext.Provider
            value={{
                listUnicQuestionsContext,
                listUnicQuestionsContextLength,
                listUnicOptionsContext,
                listMultiQuestionsContext,
                listMultiQuestionsContextLength,
                listMultiOptionsContext,
                loading,
                setLoading,
                updateList,
                setPostApi,
                setDeleteApi
            }}
        >

            {children}

        </DataContext.Provider> 

    )

}
