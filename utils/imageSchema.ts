import { z } from 'zod';

const MB_BYTES = 1000000;
const ACCEPTED_MIME_TYPES = ['image/gif', 'image/jpeg', 'image/png'];

const imageSchema = z.lazy(() =>
	z.instanceof(FileList).superRefine((f, ctx) => {
		if (f.length <= 0) return;
		if (!ACCEPTED_MIME_TYPES.includes(f[0].type)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `File must be one of [${ACCEPTED_MIME_TYPES.join(
					', '
				)}] but was ${f[0].type}`,
			});
		}

		if (f[0].size > 3 * MB_BYTES) {
			ctx.addIssue({
				code: z.ZodIssueCode.too_big,
				type: 'array',
				message: `The file must not be larger than ${3 * MB_BYTES} bytes: ${
					f[0].size
				}`,
				maximum: 3 * MB_BYTES,
				inclusive: true,
			});
		}
	})
);

export { imageSchema };
