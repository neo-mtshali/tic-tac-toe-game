import { useState, useEffect, useCallback } from 'react';

const useSound = (soundPath) => {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newAudio = new Audio(soundPath);
        setAudio(newAudio);

        const handleEnded = () => setIsPlaying(false);

        newAudio.addEventListener('ended', handleEnded);
        newAudio.addEventListener('error', (e) => {
            console.error("Error loading audio:", e);
        });

        return () => {
            newAudio.removeEventListener('ended', handleEnded);
            newAudio.removeEventListener('error', (e) => {
                console.error("Error loading audio:", e);
            });
        };
    }, [soundPath]);

    const playSound = useCallback(() => {
        if (audio) {
            audio.currentTime = 0; // Reset to start
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
                // Handle any errors here (e.g., display a message to the user)
            });
            setIsPlaying(true);
        }
    }, [audio]);

    return { playSound, isPlaying };
};

export default useSound;