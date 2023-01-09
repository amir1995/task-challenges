import { setupTranslation } from '../../utils/setupTranslation';

describe('setup translation', () => {
  it('should should return fa', async () => {
    expect(await setupTranslation({ locale: '' })).toMatchObject({ locale: 'fa' });
    expect(await setupTranslation({ locale: 'fa' })).toMatchObject({ locale: 'fa' });
  });

  it('should should return en', async () => {
    expect(await setupTranslation({ locale: 'en' })).toMatchObject({ locale: 'en' });
  });
});
