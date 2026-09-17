import './NavigateDefault.module.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NavigateDefault({ isLogged }) {
  
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate("/")

    }

  }, [isLogged, navigate])

}

export default NavigateDefault
