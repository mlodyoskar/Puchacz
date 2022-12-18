import cx from 'clsx';

interface Props {
	isOpen: boolean;
	toggleIsOpen: () => void;
}

const HAMBURGER_LINE =
	'block transition-transform duration-300 rounded-full w-full h-[6px] bg-gray-900';

export const Hamburger = ({ isOpen, toggleIsOpen }: Props) => {
	return (
		<button
			onClick={toggleIsOpen}
			className="absoltue flex h-10 w-10 flex-col items-center  justify-center gap-1"
		>
			<span
				className={cx(HAMBURGER_LINE, {
					'translate-y-[5px] rotate-45': isOpen,
				})}
			></span>
			<span
				className={cx(HAMBURGER_LINE, {
					hidden: isOpen,
				})}
			></span>
			<span
				className={cx(HAMBURGER_LINE, {
					'-translate-y-[5px] -rotate-45': isOpen,
				})}
			></span>
		</button>
	);
};
