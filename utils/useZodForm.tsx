import type { UseFormProps } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TypeOf, ZodSchema } from 'zod';

interface UseZodFormProps<Z extends ZodSchema>
	extends Exclude<UseFormProps<TypeOf<Z>>, 'resolver'> {
	schema: Z;
}

export const useZodForm = <Z extends ZodSchema>({
	schema,
	...formProps
}: UseZodFormProps<Z>) =>
	useForm({
		...formProps,
		resolver: zodResolver(schema),
	});
