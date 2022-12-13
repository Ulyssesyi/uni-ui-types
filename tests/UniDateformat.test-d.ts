import { describe, expectTypeOf } from 'vitest';
import type {
  UniDateformatLocale,
  UniDateformatData,
  UniDateformatProps,
  UniDateformat,
} from '@/UniDateformat';

describe('UniDateformat', () => {
  expectTypeOf<UniDateformatLocale>().toBeString();
  expectTypeOf<UniDateformatLocale>().toEqualTypeOf<UniHelper.UniDateformatLocale>();

  expectTypeOf<UniDateformatData>().toMatchTypeOf<string | number | Date>();
  expectTypeOf<UniDateformatData>().toEqualTypeOf<UniHelper.UniDateformatData>();

  expectTypeOf<UniDateformatProps>().toBeObject();
  expectTypeOf<UniDateformatProps>().toEqualTypeOf<UniHelper.UniDateformatProps>();

  expectTypeOf<UniDateformat>().not.toBeAny();
  expectTypeOf<UniDateformat>().toEqualTypeOf<UniHelper.UniDateformat>();
});
