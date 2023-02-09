import { describe, expectTypeOf } from 'vitest';
import type {
  UniGridOnChangeDetail,
  UniGridOnChange,
  UniGridProps,
  UniGrid,
  UniGridInstance,
} from '@/UniGrid';

describe('UniGrid', () => {
  expectTypeOf<UniGridOnChangeDetail>().toBeObject();
  expectTypeOf<UniGridOnChangeDetail>().toEqualTypeOf<UniHelper.UniGridOnChangeDetail>();

  expectTypeOf<UniGridOnChange>().toBeFunction();
  expectTypeOf<UniGridOnChange>().toEqualTypeOf<UniHelper.UniGridOnChange>();

  expectTypeOf<UniGridProps>().toBeObject();
  expectTypeOf<UniGridProps>().toEqualTypeOf<UniHelper.UniGridProps>();

  expectTypeOf<UniGrid>().not.toBeAny();
  expectTypeOf<UniGrid>().toEqualTypeOf<UniHelper.UniGrid>();

  expectTypeOf<UniGridInstance>().not.toBeAny();
  expectTypeOf<UniGridInstance>().toEqualTypeOf<UniHelper.UniGridInstance>();
});
