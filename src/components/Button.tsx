import { Button as HeadlessButton } from '@headlessui/react';

interface CustomButtonProps {
	children: React.ReactNode;
}

function CustomButton({ children }: CustomButtonProps) {
	return (
		<HeadlessButton className="rounded bg-sky py-2 px-4 text-sm text-text h-10 data-[hover]:bg-blue data-[active]:bg-cyun">
			{children}
		</HeadlessButton>
	);
}

export default CustomButton;
