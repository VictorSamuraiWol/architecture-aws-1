import styles from './FramerMotion.module.css'
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import Particles from "react-tsparticles";

export default function FramerMotion({ correct }) {

    return (
        <div className={styles.fireworks}>                        
            {/* Animação de Fogos de Artifício */}
            {correct && (
                <Particles
                    id="fireworks"
                    init={async (engine) => {
                    await loadFireworksPreset(engine);
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
