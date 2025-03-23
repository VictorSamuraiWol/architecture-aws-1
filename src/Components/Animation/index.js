import styles from './Animation.module.css'
import { loadFireworksPreset } from "tsparticles-preset-fireworks"; //Configura o efeito de fogos de artifício
import Particles from "react-tsparticles"; //Renderiza as partículas na tela dentro do React.

export default function Animation({ correct }) {

    return (
        <div className={styles.fireworks}>                        
            {/* Animação de Fogos de Artifício */}
            {correct && (
                <Particles
                    id="fireworks"
                    init={async (engine) => {
                    await loadFireworksPreset(engine); // registra o preset de fogos de artifício no mecanismo do tsparticles
                    }}
                    options={{
                    preset: "fireworks",
                    style: {width: '100%', height: '100%', opacity: '0.2'}
                    }}

                />
            )}
        </div>
    );
}
