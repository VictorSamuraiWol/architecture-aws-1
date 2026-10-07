import './NavigateDefault.module.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NavigateDefault({ path, setActivateNavigateDefault }) {
  
  const navigate = useNavigate()

  useEffect(() => {
    navigate(path)

    setActivateNavigateDefault(false)

  }, [navigate, path, setActivateNavigateDefault])

}

export default NavigateDefault;
