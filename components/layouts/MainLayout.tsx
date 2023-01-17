import { Sidebar } from 'components/molecules/Sidebar/Sidebar';

interface Props {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
	return <Sidebar>{children}</Sidebar>;
};
