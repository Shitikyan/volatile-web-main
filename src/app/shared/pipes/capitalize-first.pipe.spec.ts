import { CapitalizeFirstPipe } from '@shared/pipes/capitalize-first.pipe';

describe('CapitalizeFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeFirstPipe();
    expect(pipe).toBeTruthy();
  });
});
