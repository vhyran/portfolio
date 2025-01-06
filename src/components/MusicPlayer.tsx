import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import track from '/music/track.mp3';

const MusicPlayer: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const audioRef = useRef<HTMLAudioElement>(null);

	const togglePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const updateProgress = () => {
		if (audioRef.current) {
			const currentTime = audioRef.current.currentTime;
			const duration = audioRef.current.duration;
			setProgress((currentTime / duration) * 100);
		}
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (audio) {
			audio.addEventListener('timeupdate', updateProgress);
			return () => {
				audio.removeEventListener('timeupdate', updateProgress);
			};
		}
	});

	return (
		<div
			className="flex flex-col items-center justify-center bg-base p-6 rounded-lg shadow-lg"
			style={{ maxWidth: '300px', margin: '0 auto' }}
		>
			<audio ref={audioRef} src={track} loop>
				<track kind="captions" srcLang="en" label="English" />
			</audio>
			<button
				type="button"
				onClick={togglePlayPause}
				className="text-text text-2xl mb-4 pl-4"
			>
				{isPlaying ? <FaPause /> : <FaPlay />}
			</button>
			<div className="w-full bg-text h-5">
				<div className="bg-mauve h-5" style={{ width: `${progress}%` }} />
			</div>
		</div>
	);
};

export default MusicPlayer;
