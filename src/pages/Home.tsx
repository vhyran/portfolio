import { motion } from 'framer-motion';
import { useCallback, useLayoutEffect, useState } from 'react';

interface Shape {
	id: number;
	color: string;
	width: number;
	height: number;
}

export default function Home() {
	const [shapes, setShapes] = useState<Shape[]>([]);

	const generateGrid = useCallback(() => {
		const totalShapes = 9;
		const skipIndices = [6, 8]; // Skip bottom-left and bottom-right

		const minSizeFactor = 0.8;
		const maxSizeFactor = 0.95;

		const shapeList: Shape[] = [];

		for (let i = 0; i < totalShapes; i++) {
			if (skipIndices.includes(i)) continue;

			const widthFactor =
				minSizeFactor + Math.random() * (maxSizeFactor - minSizeFactor);
			const heightFactor =
				minSizeFactor + Math.random() * (maxSizeFactor - minSizeFactor);

			shapeList.push({
				id: i,
				color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`,
				width: widthFactor,
				height: heightFactor,
			});
		}

		setShapes(shapeList);
	}, []);

	useLayoutEffect(() => {
		generateGrid();

		const handleResize = () => generateGrid();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [generateGrid]);

	return (
		<div className="w-screen h-screen bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
			<div className="grid grid-cols-3 gap-[2vw] w-[90vw] max-w-[600px]">
				{Array.from({ length: 9 }).map((_, index) => {
					const shape = shapes.find(s => s.id === index);
					if (!shape) return <div key={`grid-position-${index}`} />;

					return (
						<motion.div
							key={shape.id}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: shape.id * 0.05 }}
							className="w-full h-full flex items-center justify-center"
						>
							<div
								className="shadow-lg border border-gray-300 rounded"
								style={{
									width: `${shape.width * 100}%`,
									height: `${shape.height * 100}%`,
									backgroundColor: shape.color,
								}}
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
