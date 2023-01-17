import { Input } from 'components/atoms/Input/Input';
import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';

const HomePage = () => {
	return (
		<MainLayout>
			<Typography component="h1">Strona główna</Typography>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sed
				maiores fuga consectetur voluptates nemo, facilis ea accusamus, itaque
				earum laborum, nobis incidunt. Sint sapiente beatae nostrum alias
				pariatur, similique aliquid. Architecto debitis cupiditate explicabo
				officiis ipsum asperiores sunt labore eveniet adipisci maxime totam,
				nisi ipsam sint nemo fuga nesciunt dignissimos voluptatem maiores! Magni
				praesentium, modi unde maxime adipisci temporibus perferendis nostrum
				nesciunt aut, culpa sunt ut debitis aliquid alias quidem consequuntur
				earum illo quas? Quae quam, molestias qui quod, numquam at neque
				deserunt ducimus quidem sed ex nisi dolor possimus amet omnis quia
				tenetur quis. Perferendis libero ex hic.
			</p>
			<Input> Co jest nie ma zamulania</Input>
		</MainLayout>
	);
};

export default HomePage;
