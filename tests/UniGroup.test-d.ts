import { describe, expectTypeOf } from 'vitest';
import type { UniGroupMode, UniGroupProps, UniGroup, UniGroupInstance } from '@/UniGroup';

describe('UniGroup', () => {
  expectTypeOf<UniGroupMode>().toBeString();
  expectTypeOf<UniGroupMode>().toEqualTypeOf<UniHelper.UniGroupMode>();

  expectTypeOf<UniGroupProps>().toBeObject();
  expectTypeOf<UniGroupProps>().toEqualTypeOf<UniHelper.UniGroupProps>();

  expectTypeOf<UniGroup>().not.toBeAny();
  expectTypeOf<UniGroup>().toEqualTypeOf<UniHelper.UniGroup>();

  expectTypeOf<UniGroupInstance>().not.toBeAny();
  expectTypeOf<UniGroupInstance>().toEqualTypeOf<UniHelper.UniGroupInstance>();
});
